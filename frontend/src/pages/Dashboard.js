import React from "react";
import CountTile from "../components/CountTile";
import { FaBookOpen } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdEvent } from "react-icons/md";
import { FaPersonRunning } from "react-icons/fa6";
import BarChart from "../components/Bar";

function Dashboard() {

  const data = [
    { label: "Self Driven", value: 2 },
    { label: "Mic Driven", value: 4 },
    { label: "Calendar", value: 1 },
    { label: "Celebration", value: 7 },
  ];

  return (
    <div className="bg-[#EEEEEE] ml-[200px] w-[calc(100vw-200px)] h-[calc(100vh-60px)] py-[20px] mt-[60px] flex flex-col items-center">
      <div className="w-full mb-[20px] pl-[60px]">
        <span>User {">"} Dashboard</span>
      </div>
      <div className="grid grid-flow-row grid-cols-4 gap-10">
        <CountTile title="Self Driven" count="02" icon={FaBookOpen} />
        <CountTile title="Mic Driven" count="04" icon={FaBuildingColumns} />
        <CountTile title="Calendar" count="01" icon={MdEvent} />
        <CountTile title="Celebration" count="07" icon={FaPersonRunning} />
      </div>
      <div className="bg-[#EEEEEE] rounded-[10px] w-full h-[400px] flex justify-center mt-[80px]">
      <BarChart/>
      </div>
      
    </div>
  );
}

export default Dashboard;
