import {useLoginButton} from "../hooks";
import {me} from "../services/auth";

export const Home = () => {
  const {login} = useLoginButton();

  return (
    <>
      <button onClick={() => login()}>
        Login
      </button>

      <button onClick={() => me()}>
        Me
      </button>
    </>
  )
}