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

  const url = new URL(`${settings.authorizationEndpoint}?${params.toString()}`);

  return url.toString();
}