export default class ServerError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export type JWTPayload = {
  userId: string;
  apiKey: string;
};


export interface GeneratedBio {
  id: string;
  content: string;
}

export type VibeType = "حرفه‌ای" | "معمولی" | "طنز";


export interface UserInputPayload {
  vibe: VibeType;
  bio: string;
}