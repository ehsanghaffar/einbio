import { getOpenAIApiInstance } from "@/lib/OpenAiCompletaions"
import { errorHandler } from "@/lib/utils";

const apikey = process.env.NEXT_OPENAI_API_KEY

export async function POST(req: Request) {

  const messages = await req.json()

  const openai = getOpenAIApiInstance(apikey)

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: "system",
          content: `Generate a compelling social media bio for user centered around context which them provide you.
          The bio should be concise (150-200 characters) and capture the essence of user in a way that resonates with context.
          Include elements that showcase personality, passion, and any relevant hashtags or keywords.
          Feel free to add a touch of creativity to make it engaging.`
        },
        {
          role: "user",
          content: messages
        }],
    })

    const choices = completion.data.choices[0].message?.content ?? ""
    return new Response(JSON.stringify(choices), {
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return errorHandler(error);
  }

}
