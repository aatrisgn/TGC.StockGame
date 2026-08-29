export function decodeJwtPayload(token: string): Record<string, unknown> {
  const segments = token.split('.');
  if (segments.length < 2) {
    throw new Error('Token does not look like a JWT.');
  }

  const base64 = segments[1].replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, '=');
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  const json = new TextDecoder('utf-8').decode(bytes);

  return JSON.parse(json) as Record<string, unknown>;
}
