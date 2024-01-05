import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uriAuth } from "./constanta/constanta";
import { useDispatch } from "react-redux";
import { ApiPost } from "./util/api";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [msgError, setMsgError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await ApiPost(
      uriAuth + "/verify",
      {
        username,
        password,
      },
      ""
    );

    if (resp.status !== 200) {
      setIsError(true);
      setMsgError(resp.payload.status.message);
      return;
    }
    dispatch({
      type: "LOGIN",
      authorization: resp.authToken,
    });

    navigate("/home");
  };

  return (
    <div className="bg-blue-100 w-screen h-screen">
      <div className="rounded-[15px] bg-stone-500 h-3/4 w-3/4 min-h-[700px] max-w-[1200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex overflow-hidden">
        <div className="bg-gradient-to-t from-[#0D47A1] to-[#1976D2] h-full w-3/5 flex items-center justify-center flex-col">
          <div className="text-white font-sans font-bold text-[40px]">
            Fantech
          </div>
          <div className="text-white font-sans text-[15px]">
            The Most Populer application technology
          </div>
        </div>
        <div className="bg-white h-full w-2/5 flex items-center justify-center">
          <div className="flex flex-col">
            <div className="font-sans font-bold text-[30px]">Hello Again!</div>
            <div className="font-sans text-[20px] mb-[40px]">Welcome Back</div>
            <input
              className="border-2 border-gray-200 h-[50px] w-[250px] mb-[15px] rounded-[25px] placeholder:italic placeholder:text-slate-400 py-2 pl-9 pr-3"
              placeholder="Email"
              type="text"
              name="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="border-2 border-gray-200 h-[50px] w-[250px] rounded-[25px] placeholder:italic placeholder:text-slate-400 py-2 pl-9 pr-3"
              placeholder="Password"
              type="password"
              name="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {isError && (
              <div className="pl-[10px] text-[13px] text-red-500">
                {msgError}
              </div>
            )}

            <button
              className="bg-blue-500 border-black h-[50px] w-[250px] mt-[20px] mb-[20px] rounded-[25px] text-[18px] text-white"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
