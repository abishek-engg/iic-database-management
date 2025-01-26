import React from "react";

function CreateEvent() {
  return (
    <div className="bg-[#EEEEEE] ml-[200px] w-[calc(100vw-250px)] h-[calc(100vh-60px)] mt-[60px] py-[20px] flex flex-col items-center">
      <div className="w-full mb-[30px] pl-[60px]">
        <span>
          Event {">"} Event Tracker {">"} Create Event
        </span>
      </div>
      <div className="w-full mb-[20px] pl-[60px] flex flex-col">
        <span className="font-semibold text-[25px] mb-[20px]">
          Create Event
        </span>
        <div className="h-max pl-0 pr-5 py-4">
          <form>
            <div className="bg-white mb-[10px] rounded-[10px]">
              <div className="p-4 h-[80px] border-b flex flex-row items-center">
                <label for="faculty" className="w-[400px] inline-block">
                  Faculty
                </label>
                <input
                  required
                  name="faculty"
                  id="faculty"
                  value=""
                  placeholder="Type to search"
                  className="w-[600px] bg-[#EEEEEE] h-[40px] rounded-[5px] pl-4 focus:ring-[#76ABAE] focus:ring-1 focus:outline-none"
                />
              </div>
              <div className="p-4 h-[80px] border-b flex flex-row items-center">
                <label for="eventName" className="w-[400px] inline-block">
                  Event Name
                </label>
                <input
                  required
                  name="eventName"
                  id="eventName"
                  value=""
                  placeholder="Type to search"
                  className="w-[600px] bg-[#EEEEEE] h-[40px] rounded-[5px] pl-4 focus:ring-[#76ABAE] focus:ring-1 focus:outline-none"
                />
              </div>
              <div className="p-4 h-[80px] border-b flex flex-row items-center">
                <label for="fromDate" className="w-[400px] inline-block">
                  From Date
                </label>
                <input
                  required
                  name="fromDate"
                  id="fromDate"
                  value=""
                  className="w-[200px] bg-[#EEEEEE] h-[40px] rounded-[5px] px-4 focus:ring-[#76ABAE] focus:ring-1 focus:outline-none"
                  type="date"
                />
              </div>
              <div className="p-4 h-[80px] border-b flex flex-row items-center">
                <label for="toDate" className="w-[400px] inline-block">
                  To Date
                </label>
                <input
                  required
                  name="toDate"
                  id="toDate"
                  value=""
                  className="w-[200px] bg-[#EEEEEE] h-[40px] rounded-[5px] px-4 focus:ring-[#76ABAE] focus:ring-1 focus:outline-none"
                  type="date"
                />
              </div>
              <div className="p-4 h-[80px] border-b flex flex-row items-center">
                <label
                  for="participationMode"
                  className="w-[400px] inline-block"
                >
                  Mode of Participation
                </label>
                <select
                  required
                  name="participationMode"
                  id="participationMode"
                  value=""
                  className="w-[600px] bg-[#EEEEEE] h-[40px] rounded-[5px] pl-4 focus:bg-[#31363f14] focus:ring-[#76ABAE] focus:ring-1 focus:outline-none"
                >
                  <option value="">Select Mode</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
              </div>
              <div className="p-4 h-[80px] border-b flex flex-row items-center">
                <label for="adminApproval" className="w-[400px] inline-block">
                  Admin Approval
                </label>
                <input
                  required
                  name="adminApproval"
                  id="adminApproval"
                  value="Initiated"
                  className="w-[600px] bg-[#EEEEEE] text-[#0000006e] h-[40px] rounded-[5px] pl-4 focus:ring-[#76ABAE] focus:ring-1 focus:outline-none"
                  disabled
                />
              </div>
            </div>
            <div className="flex justify-end">
            <button className="text-[#76ABAE] mr-[30px]" type="button" onClick={() => {}}>Cancel</button>
              <button className="px-4 py-2 bg-[#76ABAE] text-[#EEEEEE] rounded hover:scale-[1.05] hover:bg-[#89c7ca] hover:text-[#EEEEEE] transition-all duration-200">
                Create Event Tracker
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
