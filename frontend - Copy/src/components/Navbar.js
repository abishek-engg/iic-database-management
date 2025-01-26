import React, { useState } from "react";

import { FaRegUser } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  const [activityToggle, setActivityToggle] = useState(true);
  const [profileToggle, setProfileToggle] = useState(false);
  const [notificationToggle, setnotificationToggle] = useState(false);

  const path = window.location.pathname; // "/admin/home"
  const parts = path.split("/");
  const role = parts[1];

  return (
    <div>
      <div className="bg-[#31363F] w-full h-[60px] flex items-center border-b-1 border-b-[#EEEEEE] p-4 justify-between fixed top-0 right-0 left-0">
        <span className="text-[15px] text-[#EEEEEE] font-bold">
          INSTITUTE'S INNOVATION COUNCIL
        </span>
        <div className="flex flex-row  w-[500px] justify-between">
          <div className="flex flex-row items-center">
            <input
              className="w-[300px] bg-[#EEEEEE] h-[30px] rounded-full pl-4  text-[#31363F] text-[13px] focus:outline-1 focus:outline-[#76ABAE] focus:border-none"
              placeholder="Search"
            />
            <button className="ml-[10px] text-[#EEEEEE] hover:text-[#76ABAE] hover:scale-[1.05] transition-all duration-200">
              <FaSearch />
            </button>
          </div>

          <div className="flex flex-row">
            <div className="relative">
              <FaRegBell
                size={"25px"}
                className={
                  notificationToggle
                    ? "text-[#76ABAE] mr-5"
                    : "text-[#EEEEEE] mr-5 hover:text-[#76ABAE]"
                }
                onClick={() => {
                  setnotificationToggle(!notificationToggle);
                  setProfileToggle(false);
                }}
              />
              {notificationToggle && (
                <div className="absolute z-50 top-12 -left-[250px] min-h-[300px] w-[300px] bg-[#31363F] rounded-[5px] flex justify-center items-center">
                  <span className="text-[#EEEEEE]">No New Notifications</span>
                </div>
              )}
            </div>

            <div className="relative">
              <FaRegUser
                size={"25px"}
                className={
                  profileToggle
                    ? "text-[#76ABAE] mr-5"
                    : "text-[#EEEEEE] mr-5 hover:text-[#76ABAE]"
                }
                onClick={() => {
                  setProfileToggle(!profileToggle);
                  setnotificationToggle(false);
                }}
              />
              {profileToggle && (
                <div className="absolute z-50  top-12 -left-[120px] h-[40px] w-[150px] bg-[#31363F] rounded-[5px] flex justify-center items-center">
                  <NavLink to="/">
                    <button className="bg-[#31363F] text-[#EEEEEE] h-[30px] w-[140px] rounded-[5px] text-left pl-2 hover:bg-[#31363fa5] hover:text-red-400">
                      Logout
                    </button>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-[60px] left-0 bottom-0 w-[200px] bg-[#EEEEEE] flex flex-col justify-start items-start ">
        <NavLink
          to=""
          end
          className={({ isActive }) =>
            isActive
              ? "bg-[#76ABAE]  text-[#EEEEEE] h-[60px] w-full"
              : "h-[60px] w-full bg-[#EEEEEE]"
          }
        >
          <button className="h-[60px] w-full text-[15px] text-left pl-4  hover:bg-[#76ABAE]  hover:text-[#EEEEEE] hover:scale-105 transition-all duration-200">
            <div className="flex w-full flex-row items-center">
              <FaInbox className="mr-[10px]" size={"20px"} />
              Main
            </div>
          </button>
        </NavLink>

        <button
          className="h-[60px] w-full text-[15px] text-left pl-4 text-[#31363F] hover:bg-[#76ABAE]  hover:text-[#EEEEEE] hover:scale-105 transition-all duration-200"
          onClick={() => {
            setActivityToggle(!activityToggle);
          }}
        >
          <div className="flex w-full flex-row items-center">
            <FaBox className="mr-[10px]" size={"18px"} />
            Manage Activities
            <FaAngleDown
              className={activityToggle ? "ml-[10px] rotate-180" : "ml-[10px]"}
              size={"15px"}
            />
          </div>
        </button>
        {activityToggle && (
          <div className="pl-5">
            {  role==="user" && <NavLink
              to="eventcenter"
              end
              className={({ isActive }) =>
                isActive
                  ? "bg-[#76ABAE]  text-[#EEEEEE] h-[60px] w-full inline-block"
                  : "h-[60px] w-full bg-[#EEEEEE]"
              }
            >
              <button className="h-[60px] w-full text-[15px] text-left pl-4  hover:bg-[#76ABAE]  hover:text-[#EEEEEE] hover:scale-105 transition-all duration-200">
                {" "}
                <div className="flex w-full flex-row items-center">
                  <FaFolder className="mr-[10px]" size={"20px"} />
                  Event Center
                </div>
              </button>
            </NavLink>}
            <NavLink
              to="eventtracker"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#76ABAE]  text-[#EEEEEE] h-[60px] w-full inline-block"
                  : "h-[60px] w-full bg-[#EEEEEE]"
              }
            >
              <button className="h-[60px] w-full text-[15px] text-left pl-4  hover:bg-[#76ABAE]  hover:text-[#EEEEEE] hover:scale-105 transition-all duration-200">
                <div className="flex w-full flex-row items-center">
                  <FaCalendar className="mr-[10px]" size={"20px"} />
                  Event Tracker
                </div>
              </button>
            </NavLink>
            <NavLink
              to="selfdriven"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#76ABAE]  text-[#EEEEEE] h-[60px] w-full inline-block"
                  : "h-[60px] w-full bg-[#EEEEEE] text-[#31363F]"
              }
            >
              <button className="h-[60px] w-full text-[15px] text-left pl-4  hover:bg-[#76ABAE]  hover:text-[#EEEEEE] hover:scale-105 transition-all duration-200">
                <div className="flex w-full flex-row items-center">
                  <FaBookOpen className="mr-[10px]" size={"20px"} />
                  Self Driven Event
                </div>
              </button>
            </NavLink>
            <NavLink
              to="report"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#76ABAE]  text-[#EEEEEE] h-[60px] w-full inline-block"
                  : "h-[60px] w-full bg-[#EEEEEE] text-[#31363F]"
              }
            >
              <button className="h-[60px] w-full text-[15px] text-left pl-4  hover:bg-[#76ABAE]  hover:text-[#EEEEEE] hover:scale-105 transition-all duration-200">
                <div className="flex w-full flex-row items-center">
                  <FaFileAlt className="mr-[10px]" size={"20px"} />
                  Event Reports
                </div>
              </button>
            </NavLink>
          </div>
        )}

        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            isActive
              ? "bg-[#76ABAE]  text-[#EEEEEE] h-[60px] w-full"
              : "h-[60px] w-full bg-[#EEEEEE]"
          }
        >
          <button className="h-[60px] w-full text-[15px] text-left pl-4  hover:bg-[#76ABAE]  hover:text-[#EEEEEE] hover:scale-105 transition-all duration-200">
            <div className="flex w-full flex-row items-center">
              <MdSpaceDashboard className="mr-[10px]" size={"20px"} />
              Dashboard
            </div>
          </button>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
