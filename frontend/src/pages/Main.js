import React from "react";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[#EEEEEE] ml-[200px] w-[calc(100vw-250px)] h-[calc(100vh-60px)] py-[20px] mt-[60px] flex flex-col items-center">
      <div className="w-full mb-[20px] pl-[60px]">
        <span>Dashboard {">"} Main</span>
      </div>
      <div className="w-11/12 h-[200px] grid grid-flow-col grid-col-3 gap-4">
        <div className="flex flex-row h-[150px] w-[400px] items-center bg-[#31363F] rounded-lg">
          <div className="p-4">
            <FaUser
              className="text-[#76ABAE] bg-[#EEEEEE] rounded-full p-4"
              size={"60px"}
            />
          </div>
          <div className="flex flex-col p-4">
            <span className="text-[15px] font-thin text-[#EEEEEE]">
              Welcome Back,
            </span>
            <span className="text-[25px] font-semibold text-[#EEEEEE]">
              ABISHEK K
            </span>
          </div>
        </div>
        <div className="flex flex-col h-[150px] w-[400px] justify-center items-center bg-[#31363F] rounded-lg">
          <span className="text-[25px] font-semibold text-[#EEEEEE] mb-2">
           DASHBOARD
          </span>
          <span className="text-[15px] font-semibold text-[#EEEEEE]">
          Visit: <NavLink to="dashboard" className="text-[15px] font-semibold text-[#76ABAE]">localhost:3000/user/dashboard</NavLink>
          </span>
        </div>
        <div className="flex flex-col h-[150px] w-[400px] justify-center items-center bg-[#31363F] rounded-lg">
          <span className="text-[25px] font-semibold text-[#EEEEEE] mb-2">
           For Any Support
          </span>
          <span className="text-[15px] text-[#EEEEEE]">
          (Academic/Non-Academic/Personal)
          </span>
          <span className="text-[15px] font-semibold text-[#EEEEEE]">
          Login: <a href="https://supportdesk.bitsathy.ac.in" className="text-[15px] font-semibold text-[#76ABAE]">https://supportdesk.bitsathy.ac.in</a>
          </span>
        </div>
      </div>
      <span className="text-[14px] font-thin">
        Institute's Innovation Council website v0.1.0 . © 2024
      </span>
    </div>
  );
}

export default Home;
