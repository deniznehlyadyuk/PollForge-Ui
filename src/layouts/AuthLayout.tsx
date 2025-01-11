import {Outlet} from "react-router";

export default () => {
  return (
    <div className="bg-[#F3F5F9] h-screen w-screen flex justify-center items-center">
      <div className="bg-white rounded-3xl shadow-md">
        <Outlet />
      </div>
    </div>
  )
}