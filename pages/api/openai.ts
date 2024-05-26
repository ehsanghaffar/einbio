import { OpenAIStream, OpenAIStreamPayload } from "../../libs/OpenAIStream";

if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

// export const config = {
//   runtime: "edge",
// };

const handler = async (req: Request): Promise<any> => {
  const { prompt } = (await req.body) as {
    prompt?: string;
  };

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 200,
    stream: true,
    n: 1,
  };

  try {
    const stream = await OpenAIStream(payload);
    return stream
  } catch (err) {
    return new Response(err as any, { status: 500 });
  }
};

export default handler;