import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const userData = JSON.parse(localStorage.getItem("userData"));

  const [faculty, setFaculty] = useState("");
  const [facultyData, setFacultyData] = useState([]);
  const [showFacultyDropdown, setshowFacultyDropdown] = useState(false);

  const [eventName, setEventName] = useState("");
  const [eventData, setEventData] = useState([]);
  const [showEventDropdown, setShowEventDropdown] = useState(false);

  const [facultyID, setFacultyID] = useState("");
  const [eventID, setEventID] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [participationMode, setParticipationMode] = useState("");
  const [approval] = useState("Initiated");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFaculty = async () => {
      if (faculty !== "") {
        try {
          const response = await fetch(
            `http://127.0.0.1:6969/api/faculty/name/${faculty}`
          );
          const data = await response.json();

          const reqData = data.filter(
            (ele, i) => ele.username === userData.username
          );
          
          if (!response.ok) {
            setFacultyData([]);
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          setFacultyData(reqData);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchFaculty();
  }, [faculty]);

  useEffect(() => {
    const fetchEvents = async () => {
      if (eventName !== "") {
        try {
          const response = await fetch(
            `http://127.0.0.1:6969/api/events/name/${eventName}`
          );
          const data = await response.json();
          if (!response.ok) {
            setEventData([]);
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          setEventData(data);
        } catch (error) {
          console.log(error);
        }
      } else {
        setEventData([]);
      }
    };
    fetchEvents();
  }, [eventName]);

  const handleFacultySelect = (facultyName, i) => {
    setFaculty(facultyName);
    setshowFacultyDropdown(false);
    setFacultyID(facultyData[i]._id);
  };

  const handleEventSelect = (eventName, i) => {
    setEventName(eventName);
    setShowEventDropdown(false);
    setEventID(eventData[i]._id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      facultyID,
      eventID,
      startDate,
      endDate,
      participationMode,
      approval,
    };

    try {
      const response = await fetch("http://127.0.0.1:6969/api/eventTracker", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Event created successfully!");
      } else {
        console.error("Error creating event:", response.status);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      navigate("/user/eventTracker");
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="bg-white mb-[10px] rounded-[10px]">
              <div className="p-4 h-[80px] border-b flex flex-row items-center">
                <label for="faculty" className="w-[400px] inline-block">
                  Faculty
                </label>
                <div className="relative">
                  <input
                    required
                    name="faculty"
                    id="faculty"
                    value={faculty}
                    onChange={(event) => {
                      setFaculty(event.target.value);
                      setshowFacultyDropdown(true); // Show dropdown when typing
                    }}
                    placeholder="Type to search"
                    className="w-[600px] bg-[#EEEEEE] h-[40px] rounded-[5px] pl-4 focus:ring-[#76ABAE] focus:ring-1 focus:outline-none"
                  />
                  {showFacultyDropdown &&
                    faculty !== "" &&
                    facultyData.length > 0 && (
                      <div className="h-max w-[600px] p-2 absolute bg-white shadow-md rounded-[10px] z-20">
                        {facultyData.map((ele, i) => (
                          <div
                            key={i}
                            className="p-2 hover:bg-[#76abae5e] rounded cursor-pointer "
                            onClick={() =>
                              handleFacultySelect(ele.facultyName, i)
                            }
                          >
                            {`${ele.facultyName} (${ele.facultyCode}) ${ele.department}`}
                          </div>
                        ))}
                      </div>
                    )}
                  {showFacultyDropdown &&
                    faculty !== "" &&
                    facultyData.length === 0 && (
                      <div className="h-max w-[600px] p-2 absolute bg-white shadow-md rounded-[10px]">
                        Faculty Not Found
                      </div>
                    )}
                </div>
              </div>

              <div className="p-4 h-[80px] border-b flex flex-row items-center">
                <label htmlFor="eventName" className="w-[400px] inline-block">
                  Event Name
                </label>
                <div className="relative w-[600px]">
                  <input
                    required
                    name="eventName"
                    id="eventName"
                    value={eventName}
                    onChange={(e) => {
                      setEventName(e.target.value);
                      setShowEventDropdown(true); // Show dropdown when typing
                    }}
                    placeholder="Type to search event"
                    className="w-full bg-[#EEEEEE] h-[40px] rounded-[5px] pl-4 focus:ring-[#76ABAE] focus:ring-1 focus:outline-none"
                  />
                  {showEventDropdown &&
                    eventName !== "" &&
                    eventData.length > 0 && (
                      <div className="h-max w-[600px] p-2 absolute bg-white shadow-md rounded-[10px] z-20">
                        {eventData.map((event, i) => (
                          <div
                            key={i}
                            className="p-2 hover:bg-[#76abae5e] rounded cursor-pointer"
                            onClick={() =>
                              handleEventSelect(event.eventTitle, i)
                            }
                          >
                            {` ${event.eventCode} - ${event.eventTitle}`}
                          </div>
                        ))}
                      </div>
                    )}
                  {showEventDropdown &&
                    eventName !== "" &&
                    eventData.length === 0 && (
                      <div className="h-max w-[600px] p-2 absolute bg-white shadow-md rounded-[10px]">
                        Event Not Found
                      </div>
                    )}
                </div>
              </div>

              <div className="p-4 h-[80px] border-b flex flex-row items-center">
                <label for="startDate" className="w-[400px] inline-block">
                  From Date
                </label>
                <input
                  required
                  name="startDate"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-[200px] bg-[#EEEEEE] h-[40px] rounded-[5px] px-4 focus:ring-[#76ABAE] focus:ring-1 focus:outline-none"
                  type="date"
                />
              </div>
              <div className="p-4 h-[80px] border-b flex flex-row items-center">
                <label for="endDate" className="w-[400px] inline-block">
                  To Date
                </label>
                <input
                  required
                  name="endDate"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
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
                  value={participationMode}
                  onChange={(e) => setParticipationMode(e.target.value)}
                  className="w-[600px] bg-[#EEEEEE] h-[40px] rounded-[5px] pl-4 focus:bg-[#31363f14] focus:ring-[#76ABAE] focus:ring-1 focus:outline-none"
                >
                  <option value="">Select Mode</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
              </div>
              <div className="p-4 h-[80px] border-b flex flex-row items-center">
                <label for="approval" className="w-[400px] inline-block">
                  Admin Approval
                </label>
                <input
                  required
                  name="approval"
                  id="approval"
                  value={approval}
                  className="w-[600px] bg-[#EEEEEE] text-[#0000006e] h-[40px] rounded-[5px] pl-4 focus:ring-[#76ABAE] focus:ring-1 focus:outline-none"
                  disabled
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="text-[#76ABAE] mr-[30px]"
                type="button"
                onClick={() => {
                  navigate("/user/eventTracker");
                }}
              >
                Cancel
              </button>
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
