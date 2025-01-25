import {useLoginButton} from "../hooks";

export const Home = () => {
  const {login} = useLoginButton();

  return (
    <button onClick={() => login()}>
      Login
    </button>
  )
}