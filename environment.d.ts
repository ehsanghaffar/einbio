declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_PUBLIC_OPENAI_API_KEY: string
    readonly NEXT_PUBLIC_COOLDOWN_TIME: number
  }
}
