import { NextRequest, NextResponse } from "next/server";

import { z } from "zod";

import { createStructuredOutputChainFromZod } from "langchain/chains/openai_functions";
import { PromptTemplate } from "@langchain/core/prompts";
import { createOpenAIModel } from "@/libs/Langchain";
import { getIP } from "@/libs/utils";
import { checkRateLimit } from "@/store/rateLimitStore";

export const runtime = "edge";

const TEMPLATE = `Generate a compelling social media bio for user centered around context which them provide you.
The bio should be concise (150-200 characters) and capture the essence of user in a way that resonates with context.
Include elements that showcase personality, passion, and any relevant hashtags or keywords.
Feel free to add a touch of creativity to make it engaging.

{input}`;


const apikey = process.env.NEXT_PUBLIC_OPENAI_API_KEY


export async function POST(req: NextRequest) {
  try {

    const ip = getIP(req);
    if (!checkRateLimit(ip as string)) {
      return NextResponse.json({ error: "شما بیش از حد مجاز از سرویس استفاده کرده اید. چند ساعت بعد امتحان کنید" }, { status: 429 });
    }

    const messages = await req.json()

    const prompt = PromptTemplate.fromTemplate<{ input: string }>(TEMPLATE);

    const model = createOpenAIModel(apikey)

    const schema = z.object({
      output: z.array(
        z.object({
          id: z.string(),
          content: z.string(),
        })
      ),

    });


    const chain = createStructuredOutputChainFromZod(schema, {
      llm: model,
      prompt,
      outputKey: "output",
    });
    console.log(chain)

    const result = await chain.call({
      input: messages,
    });
    console.log(result)

    return NextResponse.json(result.output, { status: 200 });
  } catch (e: any) {
    console.log(e)
    if (e.message.includes("API key")){
      return NextResponse.json({ error: "سرویس فعلا در دسترس نیست" }, { status: 500 });
    }
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
