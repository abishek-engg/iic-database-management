import React from "react";

function ReportForm() {
  return (
    <div className="bg-[#EEEEEE] ml-[200px] w-[calc(100vw-250px)] h-[calc(100vh-60px)] py-[20px] mt-[60px] flex flex-col items-center">
      <div className="w-full mb-[30px] pl-[60px]">
        <span>
          Event {">"} Report {">"} Report Submission
        </span>
      </div>
      <span>Number of Submissions : -</span>

      <div className="w-full mb-[20px] pl-[60px] flex flex-col">
        <span className="font-semibold text-[25px] mb-[20px]">
          Report Submission
        </span>
        <div className="h-max pl-0 pr-5 py-4">
          <form>
            <div className="bg-white mb-[10px] rounded-[10px]">
              <div className="p-4 h-[80px] border-b flex flex-row items-center">
                <label for="faculty" className="w-[400px] inline-block">
                  Event Title
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
                <label for="participants" className="w-[400px] inline-block">
                  No Of Participants
                </label>
                <input
                  type="number"
                  required
                  name="participants"
                  id="participants"
                  value=""
                  className="w-[600px] bg-[#EEEEEE] h-[40px] rounded-[5px] pl-4 focus:ring-[#76ABAE] focus:ring-1 focus:outline-none"
                />
              </div>
              <div className="p-4 h-[80px] border-b flex flex-row items-center">
                <label for="amount" className="w-[400px] inline-block">
                  Amount Spent
                </label>
                <input
                  type="number"
                  required
                  name="amount"
                  id="amount"
                  value=""
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
                <label for="image" className="w-[400px] inline-block">
                  Image / GeoTag
                </label>
                <input
                  required
                  type="file"
                  name="image"
                  id="image"
                  className="file:bg-[#EEEEEE] file:border-none file:p-2 file:text-[15px] file:rounded-[5px] file:mr-[10px] file:w-[150px] file:hover:bg-[#76ABAE] file:hover:text-[#EEEEEE] file:transition-all file:duration-200"
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
                <label for="brochure" className="w-[400px] inline-block">
                  Brochure
                </label>
                <input
                  required
                  type="file"
                  name="brochure"
                  id="brochure"
                  className="file:bg-[#EEEEEE] file:border-none file:p-2 file:text-[15px] file:rounded-[5px] file:mr-[10px] file:w-[150px] file:hover:bg-[#76ABAE] file:hover:text-[#EEEEEE] file:transition-all file:duration-200"
                />
              </div>
              <div className="p-4 h-[80px] border-b flex flex-row items-center">
                <label for="attendance" className="w-[400px] inline-block">
                  Attendance
                </label>
                <input
                  required
                  type="file"
                  name="attendance"
                  id="attendance"
                  className="file:bg-[#EEEEEE] file:border-none file:p-2 file:text-[15px] file:rounded-[5px] file:mr-[10px] file:w-[150px] file:hover:bg-[#76ABAE] file:hover:text-[#EEEEEE] file:transition-all file:duration-200"
                />
              </div>
              <div className="p-4 h-[80px] border-b flex flex-row items-center">
                <label for="schedule" className="w-[400px] inline-block">
                  Schedule
                </label>
                <input
                  required
                  type="file"
                  name="schedule"
                  id="schedule"
                  className="file:bg-[#EEEEEE] file:border-none file:p-2 file:text-[15px] file:rounded-[5px] file:mr-[10px] file:w-[150px] file:hover:bg-[#76ABAE] file:hover:text-[#EEEEEE] file:transition-all file:duration-200"
                />
              </div>
              <div className="p-4 h-[80px] border-b flex flex-row items-center">
                <label for="report" className="w-[400px] inline-block">
                  Final Report
                </label>
                <input
                  required
                  type="file"
                  name="report"
                  id="report"
                  className="file:bg-[#EEEEEE] file:border-none file:p-2 file:text-[15px] file:rounded-[5px] file:mr-[10px] file:w-[150px] file:hover:bg-[#76ABAE] file:hover:text-[#EEEEEE] file:transition-all file:duration-200"
                />
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
              <button
                className="text-[#76ABAE] mr-[30px]"
                type="button"
                onClick={() => {}}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#76ABAE] text-[#EEEEEE] rounded hover:scale-[1.05] hover:bg-[#89c7ca] hover:text-[#EEEEEE] transition-all duration-200">
                Create Event Report
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReportForm;
