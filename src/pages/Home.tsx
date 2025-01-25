import {useLoginButton} from "../hooks";
import {AuthServices} from "../services";

export const Home = () => {
  const {login} = useLoginButton();

  return (
    <>
      <div>
        <button onClick={() => login()}>
          Login
        </button>
      </div>

      <div>
        <button onClick={() => AuthServices.me()}>
          Me
        </button>
      </div>

      <div>
        <button onClick={() => AuthServices.refreshToken()}>
          Refresh Token
        </button>
      </div>

      <div>
        <button onClick={() => AuthServices.logout()}>
          Logout
        </button>
      </div>
    </>
  )
}