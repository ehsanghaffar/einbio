import { Configuration, OpenAIApi } from 'openai'

if (!process.env.OPENAI_API_KEY) {
  console.log("api", process.env)
  process.env.OPENAI_API_KEY = "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"
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default openai