import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className=" flex justify-center items-center h-screen w-screen bg-[#e6e6e6]">
      <div className="flex flex-row h-[500px] shadow-md rounded-[10px] overflow-hidden">
        <div className="flex flex-col flex-2  justify-center pl-10 w-[600px] bg-[#31363F] text-white">
          <span className="text-[20px]">Welcome Back!</span>
          <span className="font-semibold text-[50px]">
            Login to your account
          </span>
        </div>
        <div className="flex w-[400px] justify-center items-center bg-white">
          <form className="flex flex-col justify-center items-center  px-5 py-10 rounded-xl  ">
            <div className="flex flex-col mb-3">
              <span className="mb-2 font-semibold">Username</span>
              <input
                type="text"
                className="w-[250px] h-[50px] p-4 bg-[#EEEEEE] rounded-md focus:outline-1 focus:outline-[#76ABAe]"
              />
            </div>
            <div className="flex flex-col mb-3">
              <span className="mb-2 font-semibold">Password</span>
              <input
                type="password"
                className="w-[250px] h-[50px] p-4 bg-[#EEEEEE] rounded-md focus:outline-1 focus:outline-[#76ABAe]"
              />
            </div>
            <NavLink to="/user">
              <button className="rounded-md bg-[#76ABAE] w-[250px] h-[35px] m-5 text-white font-bold hover:scale-105 hover:bg-[#7fbdc1] transition-all duration-200 focus:outline-1 focus:outline-[#76ABAe]">
                Login
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
