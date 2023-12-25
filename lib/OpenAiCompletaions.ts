import { Configuration, OpenAIApi } from 'openai'

// if (!process.env.OPENAI_API_KEY) {
// process.env.OPENAI_API_KEY = ""
// }

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default openai