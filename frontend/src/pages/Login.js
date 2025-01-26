import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username,
      password,
    };

    try {
      const response = await fetch("http://127.0.0.1:6969/api/faculty/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Message: ${data.error}`);
      }

      localStorage.setItem("userData", JSON.stringify(data));
      if(data.role==="faculty")
      navigate(`/user`); 
    } catch (error) {
      alert(error);
      console.error("Error submitting form:", error);
    } finally {
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen w-screen bg-[#e6e6e6]">
      <div className="flex flex-row h-[500px] shadow-md rounded-[10px] overflow-hidden">
        <div className="flex flex-col flex-2  justify-center pl-10 w-[600px] bg-[#31363F] text-white">
          <span className="text-[20px]">Welcome Back!</span>
          <span className="font-semibold text-[50px]">
            Login to your account
          </span>
        </div>
        <div className="flex w-[400px] justify-center items-center bg-white">
          <form
            className="flex flex-col justify-center items-center  px-5 py-10 rounded-xl  "
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col mb-3">
              <span className="mb-2 font-semibold">Username</span>
              <input
                type="text"
                value={username}
                required
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                className="w-[250px] h-[50px] p-4 bg-[#EEEEEE] rounded-md focus:outline-1 focus:outline-[#76ABAe]"
              />
            </div>
            <div className="flex flex-col mb-3">
              <span className="mb-2 font-semibold">Password</span>
              <input
                type="password"
                value={password}
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className="w-[250px] h-[50px] p-4 bg-[#EEEEEE] rounded-md focus:outline-1 focus:outline-[#76ABAe]"
              />
            </div>

            <button className="rounded-md bg-[#76ABAE] w-[250px] h-[35px] m-5 text-white font-bold hover:scale-105 hover:bg-[#7fbdc1] transition-all duration-200 focus:outline-1 focus:outline-[#76ABAe]">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
