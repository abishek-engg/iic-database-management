import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Table from "../components/Table";
import Loading from "../components/Loading";

function EventCenter() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData._id);

  const title = [
    "ID",
    "Faculty",
    "EVENT CODE",
    "EVENT TITLE",
    "EVENT CATEGORY",
    "START DATE",
    "END DATE",
    "DURATION (DAYS)",
    "MODE OF PARTICIPATION",
    "STATUS",
  ];

  const key = [
    "id",
    "facultyName",
    "eventCode",
    "eventTitle",
    "eventCategory",
    "startDate",
    "endDate",
    "duration",
    "modeOfParticipation",
    "eventStatus",
  ];

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log(userData._id);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:6969/api/eventCenter`); // Added 'http://'
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const reqData = data
          .map((data, index) => ({
            id: index + 1,
            facultyName: data.faculty.facultyName,
            eventCode: data.event.eventCode,
            eventCategory: data.event.eventCategory,
            eventTitle: data.event.eventTitle,
            startDate: data.event.startDate,
            endDate: data.event.endDate,
            modeOfParticipation: data.event.modeOfParticipation,
            eventStatus: data.event.eventStatus,
            duration: data.event.duration,
            username: data.faculty.username
          }))
          .filter((ele) => ele.username === userData.username);
        setData(reqData);
        console.log(reqData);
      } catch (err) {
        console.error("Failed to fetch data:", err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, []);

  return (
    <div className="bg-[#EEEEEE] ml-[200px] w-[calc(100vw-250px)] h-[calc(100vh-60px)] mt-[60px] py-[20px] flex flex-col items-center">
      <div className="w-full mb-[30px] pl-[60px]">
        <span>Event {">"} Event Center</span>
      </div>
      <div className="w-full mb-[20px] pl-[60px] flex flex-col">
        <span className="font-semibold text-[25px] mb-[20px]">
          Event Center
        </span>
        <div className="flex flex-row items-center">
          <input
            className="w-[300px] bg-white h-[30px] rounded-full pl-4 text-[#31363F] text-[13px] focus:outline-1 focus:outline-[#76ABAE] focus:border-none focus:scale-[1.02] hover:scale-[1.02] transition-all duration-200 placeholder:text-[#31363F]"
            placeholder="Search"
          />
          <button className="ml-[10px] text-[#31363F] hover:scale-110 hover:text-[#76ABAE] transition-all duration-200">
            <FaSearch />
          </button>
        </div>
      </div>
      {isLoading && <Loading />}
      {data && <Table title={title} data={data} keyList={key} />}
    </div>
  );
}

export default EventCenter;
