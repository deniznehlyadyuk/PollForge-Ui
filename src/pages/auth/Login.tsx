import GoogleLogo from "../../assets/google-logo.svg?react"

export default () => {
  return (
    <div className="flex flex-col w-[27.5rem]">
        <div className="flex flex-col items-center gap-2 p-5 text-[#2E2E2E]">
          <span className="text-2xl font-bold">Log in</span>
          <span className="text-center font-thin">To proceed, please log in using your Google account, as it is currently the only supported login option.</span>
        </div>
        <div className="p-5">
          <div className="flex justify-center items-center shadow-md hover:shadow-lg rounded py-2 duration-300 cursor-pointer">
            <GoogleLogo width={32} height={32} />
          </div>
        </div>
    </div>
  )
}