import React from "react";
import { FaSearch } from "react-icons/fa";
import Table from "../components/Table";

function EventCenter() {
    
  const title = [
    "ID",
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
    "eventCode",
    "eventTitle",
    "eventCategory",
    "startDate",
    "endDate",
    "duration",
    "modeOfParticipation",
    "status",
  ];

  const eventData = [
    {
      id: 1,
      eventCode: "EV123",
      eventTitle: "Annual Tech Fest",
      eventCategory: "Technology",
      startDate: "2024-01-01",
      endDate: "2024-01-03",
      duration: 3,
      modeOfParticipation: "Offline",
      status: "Active",
    },
    {
      id: 2,
      eventCode: "EV456",
      eventTitle: "Workshop on AI",
      eventCategory: "Workshop",
      startDate: "2024-02-10",
      endDate: "2024-02-12",
      duration: 2,
      modeOfParticipation: "Offline",
      status: "Inactive",
    },
    {
      id: 3,
      eventCode: "EV789",
      eventTitle: "Coding Hackathon",
      eventCategory: "Competition",
      startDate: "2024-03-15",
      endDate: "2024-03-16",
      duration: 1,
      modeOfParticipation: "Hybrid",
      status: "Active",
    },
    {
      id: 4,
      eventCode: "EV101",
      eventTitle: "Cultural Fest",
      eventCategory: "Cultural",
      startDate: "2024-04-20",
      endDate: "2024-04-22",
      duration: 2,
      modeOfParticipation: "Offline",
      status: "Inactive",
    },
    {
      id: 5,
      eventCode: "EV202",
      eventTitle: "Tech Webinar",
      eventCategory: "Technology",
      startDate: "2024-05-10",
      endDate: "2024-05-10",
      duration: 1,
      modeOfParticipation: "Online",
      status: "Active",
    },
    {
      id: 6,
      eventCode: "EV303",
      eventTitle: "Entrepreneurship Meetup",
      eventCategory: "Business",
      startDate: "2024-06-01",
      endDate: "2024-06-02",
      duration: 1,
      modeOfParticipation: "Offline",
      status: "Inactive",
    },
    {
      id: 7,
      eventCode: "EV404",
      eventTitle: "Robotics Workshop",
      eventCategory: "Workshop",
      startDate: "2024-07-15",
      endDate: "2024-07-16",
      duration: 1,
      modeOfParticipation: "Offline",
      status: "Active",
    },
    {
      id: 8,
      eventCode: "EV505",
      eventTitle: "Environmental Awareness Camp",
      eventCategory: "Social",
      startDate: "2024-08-10",
      endDate: "2024-08-11",
      duration: 1,
      modeOfParticipation: "Offline",
      status: "Inactive",
    },
    {
      id: 9,
      eventCode: "EV606",
      eventTitle: "Cyber Security Seminar",
      eventCategory: "Technology",
      startDate: "2024-09-05",
      endDate: "2024-09-05",
      duration: 1,
      modeOfParticipation: "Online",
      status: "Active",
    },
    {
      id: 10,
      eventCode: "EV707",
      eventTitle: "Art Exhibition",
      eventCategory: "Cultural",
      startDate: "2024-10-01",
      endDate: "2024-10-03",
      duration: 2,
      modeOfParticipation: "Offline",
      status: "Inactive",
    },
  ];

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

      <Table title={title} data={eventData} keyList={key} />
    </div>
  );
}

export default EventCenter;
