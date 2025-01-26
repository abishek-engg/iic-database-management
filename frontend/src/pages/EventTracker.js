import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Table from "../components/Table";
import { NavLink } from "react-router-dom";
import Loading from "../components/Loading";

function EventTracker() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userData = JSON.parse(localStorage.getItem("userData"));


  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch("http://127.0.0.1:6969/api/eventTracker"); // Added 'http://'
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const reqData = data.map((data, index) => ({
          id: index + 1,
          faculty: data.faculty.facultyName,
          eventCategory: data.event.eventCategory,
          eventTitle: data.event.eventTitle,
          startDate: data.event.startDate,
          endDate: data.event.endDate,
          modeOfParticipation: data.event.modeOfParticipation,
          approval: data.approval,
          remarks: data.remarks,
        })).filter((ele) => ele.faculty === userData.facultyName);;

        console.log(reqData);

        setData(reqData);
      } catch (err) {
        console.error("Failed to fetch data:", err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, []);

  const title = [
    "S NO",
    "FACULTY",
    "EVENT CATEGORY",
    "EVENT TITLE",
    "START DATE",
    "END DATE",
    "MODE OF PARTICIPATION",
    "APPROVAL",
    "REMARKS",
  ];

  const key = [
    "id",
    "faculty",
    "eventCategory",
    "eventTitle",
    "startDate",
    "endDate",
    "modeOfParticipation",
    "approval",
    "remarks",
  ];

  return (
    <div className="bg-[#EEEEEE] ml-[200px] w-[calc(100vw-250px)] h-[calc(100vh-60px)] py-[20px]  mt-[60px] flex flex-col items-center">
      <div className="w-full mb-[30px] pl-[60px]">
        <span>Event {">"} Event Tracker</span>
      </div>
      <div className="w-full mb-[20px] pl-[60px] flex flex-col">
        <span className="font-semibold text-[25px] mb-[20px]">
          Event Tracker
        </span>
        <div className="flex flex-row items-center justify-between">
          <div>
            <input
              className="w-[300px] bg-white h-[30px] rounded-full pl-4  text-[#31363F] text-[13px] focus:outline-1 focus:outline-[#76ABAE] focus:border-none focus:scale-[1.02] hover:scale-[1.02] transition-all duration-200 placeholder:text-[#31363F]"
              placeholder="Search"
            />
            <button className="ml-[10px] text-[#31363F] hover:scale-110 hover:text-[#76ABAE] transition-all duration-200">
              <FaSearch />
            </button>
          </div>
          <NavLink to="createevent">
            <button className="px-4 py-2 mr-[80px] bg-[#76ABAE] text-[#EEEEEE] rounded hover:scale-[1.05] hover:bg-[#89c7ca] hover:text-[#EEEEEE] transition-all duration-200">
              Create Event
            </button>
          </NavLink>
        </div>
      </div>
      {isLoading && <Loading />}
      {data && <Table title={title} data={data} keyList={key} />}
    </div>
  );
}

export default EventTracker;
