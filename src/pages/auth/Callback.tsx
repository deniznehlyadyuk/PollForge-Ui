import {useLocation} from "react-router";
import {useEffect, useRef} from "react";
import {login} from "../../services";

export const Callback = () => {
  const location = useLocation();
  const useEffectRan = useRef<boolean>(false);

  const getAuthSessionData = () => {
    const authData = sessionStorage.getItem('auth');
    sessionStorage.removeItem('auth');

    if (!authData) {
      return null;
    }

    try {
      return JSON.parse(authData);
    } catch {
      return null;
    }
  }

  const getUrlParams = () => {
    const params = new URLSearchParams(location.search);
    const state = params.get('state')
    const code = params.get('code')

    return {state, code}
  }

  const handleCallback = async () => {
    if (useEffectRan.current) {
      return;
    }

    useEffectRan.current = true;

    const authSessionData = getAuthSessionData();
    const urlParams = getUrlParams();

    if (!urlParams.state || !urlParams.code)
    {
      window.location.href = '/';
      return;
    }

    // CSRF attack protection
    if (urlParams.state !== authSessionData.state) {
      window.location.href = '/';
      return;
    }

    await login(urlParams.code, authSessionData.codeVerifier);

    window.location.href = '/';
  }

  useEffect(() => {
    handleCallback();
  }, [])

  return null;
}