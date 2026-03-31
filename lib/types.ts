export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export interface StreamChunk {
  type: "text" | "done" | "error";
  content?: string;
  error?: string;
}
