import { ChatOpenAI } from "@langchain/openai";

export const createOpenAIModel = (apiKey: string) => {
  const model = new ChatOpenAI({
    apiKey: apiKey,
    temperature: 0.8,
    modelName: "gpt-4",
  });
  return model;
}