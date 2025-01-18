import {useLocation, useNavigate} from "react-router";
import {useEffect, useRef} from "react";

export const Callback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const useEffectRan = useRef<boolean>(false);

  useEffect(() => {
    if (useEffectRan.current) {
      return;
    }

    useEffectRan.current = true;

    const authSessionStorage = sessionStorage.getItem('auth')
    sessionStorage.removeItem('auth')

    if (authSessionStorage === null) {
      navigate('/login')
      return;
    }

    const {state: storageState, codeVerifier: storageCodeVerifier} = JSON.parse(authSessionStorage)

    const params = new URLSearchParams(location.search);
    const state = params.get('state')
    const code = params.get('code')

    navigate('/auth/callback', {replace: true})

    // CSRF attack protection
    if (state !== storageState) {
      navigate('/login');
      return;
    }

    console.log(code, storageCodeVerifier)
  }, [])

  return null;
}