// Architecture for a future portfolio assistant.
//
// This intentionally does NOT call any AI provider from the browser — an AI
// API key must never live in frontend code. Once ready, this function should
// call a same-origin server endpoint (e.g. POST /api/assistant) that:
//   1. Holds the AI provider's API key server-side only (env var, never committed).
//   2. Grounds the model's answer strictly in approved portfolio/CV/project
//      content — the same content in src/data/ — rather than open-ended chat.
//   3. Returns a plain-text or structured answer to the client.
//
// Until that endpoint exists, this throws so the UI can show an honest
// "not connected yet" state instead of a fabricated response.

export class AssistantNotConnectedError extends Error {
  constructor() {
    super("The portfolio assistant isn't connected to a backend yet.");
    this.name = "AssistantNotConnectedError";
  }
}

export async function askPortfolioAssistant(_question: string): Promise<string> {
  throw new AssistantNotConnectedError();
}

export const SAMPLE_QUESTIONS = [
  "What is Acadexa?",
  "What technologies does Asad use?",
  "What is his AI QA project?",
];
