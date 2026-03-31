const CRISIS_PATTERNS = [
  /\bkill\s*(my|him|her|them)?self\b/i,
  /\bend\s*(my|it\s*all|this)\s*life?\b/i,
  /\bwant\s*to\s*die\b/i,
  /\bsuicid/i,
  /\bself[- ]?harm/i,
  /\bcutting\s*(my)?self\b/i,
  /\bdon'?t\s*want\s*to\s*(be\s*alive|live|exist)\b/i,
  /\bno\s*reason\s*to\s*live\b/i,
  /\bhurt\s*(my)?self\b/i,
  /\btake\s*my\s*(own\s*)?life\b/i,
];

export function detectCrisis(message: string): boolean {
  return CRISIS_PATTERNS.some((pattern) => pattern.test(message));
}

export const CRISIS_AUGMENTATION = `
CRITICAL SAFETY OVERRIDE: The user's latest message contains indicators of crisis or self-harm.
You MUST:
1. Acknowledge their pain with genuine warmth and compassion
2. Clearly state that they are not alone and that help is available
3. Provide these resources prominently:
   - 988 Suicide & Crisis Lifeline: call or text 988 (US)
   - Crisis Text Line: text HOME to 741741
   - International Association for Suicide Prevention: https://www.iasp.info/resources/Crisis_Centres/
4. Gently encourage them to reach out to a trusted person or professional
5. Continue being supportive — do NOT end the conversation abruptly
`;
