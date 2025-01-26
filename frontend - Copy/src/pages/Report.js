import React from "react";
import { FaSearch } from "react-icons/fa";
import Table from "../components/Table";
import { NavLink } from "react-router-dom";

function Report() {
  const title = [
    "ID",
    "FACULTY",
    "EVENT TITLE",
    "MODE OF PARTICIPATION",
    "AMOUNT SPENT",
    "NO OF PARTICIPANTS",
    "IMAGE/GEO TAG",
    "APPROVAL",
    "REMARKS",
    "Edit"
  ];

  const key = [
    "id",
    "faculty",
    "eventTitle",
    "modeOfParticipation",
    "amountSpent",
    "noOfParticipants",
    "", // Image/Geo Tag (left empty)
    "approval",
    "remarks",
  ];

  const eventData = [
    {
      id: 1,
      faculty:
        "FACULTY (22EC0781) @faculty.ec22 (Electronics and Communication Engineering)",
      eventTitle: "Annual Tech Fest",
      modeOfParticipation: "Offline",
      amountSpent: 10000,
      noOfParticipants: 150,
      approval: "Approved",
      remarks: "-",
    },
    {
      id: 2,
      faculty:
        "FACULTY (22EC0781) @faculty.ec22 (Electronics and Communication Engineering)",
      eventTitle: "Workshop on AI",
      modeOfParticipation: "Offline",
      amountSpent: 5000,
      noOfParticipants: 80,
      approval: "Approved",
      remarks: "-",
    },
    {
      id: 3,
      faculty:
        "FACULTY (22EC0781) @faculty.ec22 (Electronics and Communication Engineering)",
      eventTitle: "Coding Hackathon",
      modeOfParticipation: "Offline",
      amountSpent: 8000,
      noOfParticipants: 120,
      approval: "Approved",
      remarks: "-",
    },
  ];

  return (
    <div className="bg-[#EEEEEE] ml-[200px] w-[calc(100vw-250px)] h-[calc(100vh-60px)] py-[20px] mt-[60px] flex flex-col items-center">
      <div className="w-full mb-[30px] pl-[60px]">
        <span>Event {">"} Report</span><br/>
      
      </div>
      <div className="w-full mb-[20px] pl-[60px] flex flex-col">
        <span className="font-semibold text-[25px] mb-[20px]">
          Event Reports
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
          <NavLink to="reportform">
            <button className="px-4 py-2 mr-[80px] bg-[#76ABAE] text-[#EEEEEE] rounded hover:scale-[1.05] hover:bg-[#89c7ca] hover:text-[#EEEEEE] transition-all duration-200">
              Create Event Report
            </button>
          </NavLink>
        </div>
      </div>
      <Table title={title} data={eventData} keyList={key} />
    </div>
  );
}

export default Report;
