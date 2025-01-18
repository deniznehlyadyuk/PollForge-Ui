export const generateRandomString = (length: number) => {
  const array = new Uint32Array(length / 2);
  window.crypto.getRandomValues(array);
  return Array.from(array, dec => ('0' + dec.toString(16)).slice(-2)).join('');
}

export const generateCodeChallenge = async (codeVerifier: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

interface GenerateAuthLoginUrlSettings {
  authorizationEndpoint: string;
  clientId: string;
  scope: string;
  redirectUri: string;
  codeChallenge: string;
  state: string;
}

export const generateAuthLoginUrl = (settings: GenerateAuthLoginUrlSettings) => {
  const params = new URLSearchParams();
  params.append("client_id", settings.clientId);
  params.append("response_type", "code");
  params.append("scope", settings.scope);
  params.append("redirect_uri", settings.redirectUri);
  params.append("code_challenge", settings.codeChallenge);
  params.append("code_challenge_method", "S256");
  params.append("state", settings.state);
  params.append("access_type", "offline");
  params.append("prompt", "consent");

  const url = new URL(`${settings.authorizationEndpoint}?${params.toString()}`);

  return url.toString();
}