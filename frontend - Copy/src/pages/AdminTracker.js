import React from "react";
import { FaSearch } from "react-icons/fa";
import Table from "../components/Table";
import { NavLink } from "react-router-dom";

function AdminTracker() {
  const title = [
    "ID",
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

  const eventData = [
    {
      id: 1,
      faculty:
        "FACULTY (22EC0781) @faculty.ec22 (Electronics and Communication Engineering)",
      eventCategory: "Technology",
      eventTitle: "Annual Tech Fest",
      startDate: "2024-01-01",
      endDate: "2024-01-03",
      modeOfParticipation: "Offline",
      approval: (
        <div>
          <button className="bg-[#76ABAE] p-2 text-[#eeeeee] rounded text-[10px] mx-2">
            Approve
          </button>
          <button className="bg-[red] p-2 text-[#eeeeee] rounded text-[10px]">
            Reject
          </button>
        </div>
      ),
      remarks: <textarea className="bg-[#eeeeee] h-[30px] w-[150px]"/>,
    },
    {
      id: 2,
      faculty:
        "FACULTY (22EC0781) @faculty.ec22 (Electronics and Communication Engineering)",
      eventCategory: "Workshop",
      eventTitle: "Workshop on AI",
      startDate: "2024-02-10",
      endDate: "2024-02-12",
      modeOfParticipation: "Offline",
      approval: (
        <div>
          <button className="bg-[#76ABAE] p-2 text-[#eeeeee] rounded text-[10px] mx-2">
            Approve
          </button>
          <button className="bg-[red] p-2 text-[#eeeeee] rounded text-[10px]">
            Reject
          </button>
        </div>
      ),
      remarks: <textarea className="bg-[#eeeeee] h-[30px] w-[150px]"/>,
    },
    {
      id: 3,
      faculty:
        "FACULTY (22EC0781) @faculty.ec22 (Electronics and Communication Engineering)",
      eventCategory: "Competition",
      eventTitle: "Coding Hackathon",
      startDate: "2024-03-15",
      endDate: "2024-03-16",
      modeOfParticipation: "Offline",
      approval: (
        <div>
          <button className="bg-[#76ABAE] p-2 text-[#eeeeee] rounded text-[10px] mx-2">
            Approve
          </button>
          <button className="bg-[red] p-2 text-[#eeeeee] rounded text-[10px]">
            Reject
          </button>
        </div>
      ),
      remarks: <textarea className="bg-[#eeeeee] h-[30px] w-[150px]"/>,
    },
    {
      id: 4,
      faculty:
        "FACULTY (22EC0781) @faculty.ec22 (Electronics and Communication Engineering)",
      eventCategory: "Cultural",
      eventTitle: "Cultural Fest",
      startDate: "2024-04-20",
      endDate: "2024-04-22",
      modeOfParticipation: "Offline",
      approval: (
        <div>
          <button className="bg-[#76ABAE] p-2 text-[#eeeeee] rounded text-[10px] mx-2">
            Approve
          </button>
          <button className="bg-[red] p-2 text-[#eeeeee] rounded text-[10px]">
            Reject
          </button>
        </div>
      ),
      remarks: <textarea className="bg-[#eeeeee] h-[30px] w-[150px]"/>,
    },
    {
      id: 5,
      faculty:
        "FACULTY (22EC0781) @faculty.ec22 (Electronics and Communication Engineering)",
      eventCategory: "Technology",
      eventTitle: "Tech Webinar",
      startDate: "2024-05-10",
      endDate: "2024-05-10",
      modeOfParticipation: "Online",
      approval: (
        <div>
          <button className="bg-[#76ABAE] p-2 text-[#eeeeee] rounded text-[10px] mx-2">
            Approve
          </button>
          <button className="bg-[red] p-2 text-[#eeeeee] rounded text-[10px]">
            Reject
          </button>
        </div>
      ),
      remarks: <textarea className="bg-[#eeeeee] h-[30px] w-[150px]"/>,
    },
    {
      id: 6,
      faculty:
        "FACULTY (22EC0781) @faculty.ec22 (Electronics and Communication Engineering)",
      eventCategory: "Business",
      eventTitle: "Entrepreneurship Meetup",
      startDate: "2024-06-01",
      endDate: "2024-06-02",
      modeOfParticipation: "Offline",
      approval: (
        <div>
          <button className="bg-[#76ABAE] p-2 text-[#eeeeee] rounded text-[10px] mx-2">
            Approve
          </button>
          <button className="bg-[red] p-2 text-[#eeeeee] rounded text-[10px]">
            Reject
          </button>
        </div>
      ),
      remarks: <textarea className="bg-[#eeeeee] h-[30px] w-[150px]"/>,
    },
    {
      id: 7,
      faculty:
        "FACULTY (22EC0781) @faculty.ec22 (Electronics and Communication Engineering)",
      eventCategory: "Workshop",
      eventTitle: "Robotics Workshop",
      startDate: "2024-07-15",
      endDate: "2024-07-16",
      modeOfParticipation: "Offline",
      approval: (
        <div>
          <button className="bg-[#76ABAE] p-2 text-[#eeeeee] rounded text-[10px] mx-2">
            Approve
          </button>
          <button className="bg-[red] p-2 text-[#eeeeee] rounded text-[10px]">
            Reject
          </button>
        </div>
      ),
      remarks: <textarea className="bg-[#eeeeee] h-[30px] w-[150px]"/>,
    },
    {
      id: 8,
      faculty:
        "FACULTY (22EC0781) @faculty.ec22 (Electronics and Communication Engineering)",
      eventCategory: "Social",
      eventTitle: "Environmental Awareness Camp",
      startDate: "2024-08-10",
      endDate: "2024-08-11",
      modeOfParticipation: "Offline",
      approval: (
        <div>
          <button className="bg-[#76ABAE] p-2 text-[#eeeeee] rounded text-[10px] mx-2">
            Approve
          </button>
          <button className="bg-[red] p-2 text-[#eeeeee] rounded text-[10px]">
            Reject
          </button>
        </div>
      ),
      remarks: <textarea className="bg-[#eeeeee] h-[30px] w-[150px]"/>,
    },
    {
      id: 9,
      faculty:
        "FACULTY (22EC0781) @faculty.ec22 (Electronics and Communication Engineering)",
      eventCategory: "Technology",
      eventTitle: "Cyber Security Seminar",
      startDate: "2024-09-05",
      endDate: "2024-09-05",
      modeOfParticipation: "Offline",
      approval: (
        <div>
          <button className="bg-[#76ABAE] p-2 text-[#eeeeee] rounded text-[10px] mx-2">
            Approve
          </button>
          <button className="bg-[red] p-2 text-[#eeeeee] rounded text-[10px]">
            Reject
          </button>
        </div>
      ),
      remarks: <textarea className="bg-[#eeeeee] h-[30px] w-[150px]"/>,
    },
    {
      id: 10,
      faculty:
        "FACULTY (22EC0781) @faculty.ec22 (Electronics and Communication Engineering)",
      eventCategory: "Cultural",
      eventTitle: "Art Exhibition",
      startDate: "2024-10-01",
      endDate: "2024-10-03",
      modeOfParticipation: "Offline",
      approval: (
        <div>
          <button className="bg-[#76ABAE] p-2 text-[#eeeeee] rounded text-[10px] mx-2">
            Approve
          </button>
          <button className="bg-[red] p-2 text-[#eeeeee] rounded text-[10px]">
            Reject
          </button>
        </div>
      ),
      remarks: <textarea className="bg-[#eeeeee] h-[30px] w-[150px]"/>,
    },
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
        </div>
      </div>
      <Table title={title} data={eventData} keyList={key} />
    </div>
  );
}

export default AdminTracker;
