// import { Configuration, OpenAIApi } from 'openai'

import { Configuration, OpenAIApi } from "openai";

// if (!process.env.NEXT_OPENAI_API_KEY) {
//     console.log(process.env.NEXT_OPENAI_API_KEY)
// }

// const configuration = new Configuration({
//   apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// export default openai

export function getOpenAIApiInstance(apiKey: string) {
  const configuration = new Configuration({
    apiKey,
  });
  return new OpenAIApi(configuration);
}