import {generateAuthLoginUrl, generateCodeChallenge, generateRandomString} from "./utils";
import {AUTHORIZATION_ENDPOINT, CLIENT_ID, REDIRECT_URI, SCOPE} from "./constants";

export const useAuth = () => {
  const login = async () => {
    const state = generateRandomString(64);
    const codeVerifier = generateRandomString(64);
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    sessionStorage.setItem('auth', JSON.stringify({state, codeVerifier}));

    window.location.href = generateAuthLoginUrl({
      clientId: CLIENT_ID,
      redirectUri: REDIRECT_URI,
      scope: SCOPE,
      codeChallenge: codeChallenge,
      authorizationEndpoint: AUTHORIZATION_ENDPOINT,
      state: state
    });
  }

  return {login};
}