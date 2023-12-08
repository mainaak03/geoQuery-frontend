import ellipse from "../assets/images/ellipse.svg";
import { Link } from "react-router-dom";
import {useEffect} from "react";
import { MdSend } from "react-icons/md";
import axios from "axios";
import {loadUser} from "../actions/userAction";
import {useDispatch,useSelector} from "react-redux";
import {useAlert} from "react-alert";

const queries = [
  "How much rainfall in the Amazon ..?",
  "How much rainfall in the Amazon ..?",
  "How much rainfall in the Amazon ..?",
  "How much rainfall in the Amazon ..?",
  "How much rainfall in the Amazon ..?",
  "How much rainfall in the Amazon ..?",
];

const query = () => {

  const alert = useAlert();
  const dispatch = useDispatch();

  let token = localStorage.getItem("token");


  if(token){
    token = "Bearer " + token
    dispatch(loadUser(token));
  }

  
  return (
    <div className="w-full h-screen text-white flex flex-grow items-center justify-center bg-Background min-h-screen relative overflow-hidden">
      <div
        style={{ width: "1125px", height: "433px", filter: "blur(155px)" }}
        className="flex-shrink-0 rounded-[1125px] bg-custom-blue absolute top-0 left-0 z-0"
      ></div>
      <div
        style={{ width: "1125px", height: "433px", filter: "blur(155px)" }}
        className="flex-shrink-0 rounded-[1125px] bg-custom-blue absolute bottom-0 right-0 z-0"
      ></div>
      <nav className="p-4 fixed top-0 left-0 w-full z-10 py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:px-8 lg:px-16">
          <div className="flex items-center space-x-6">
            <img src={ellipse} alt="ellipse" className="w-10 h-10" />
            <div className="text-Primary text-3xl md:text-4xl font-outfit font-semibold">
              GeoQuery
            </div>
          </div>
          <button className="bg-onPrimary hover:opacity-80 text-Primary text-xl h-11 w-36 rounded-lg font-outfit flex items-center justify-center">
            <div className="text-center">
              <Link to="/profile">My Profile</Link>
            </div>
          </button>
        </div>
      </nav>
      <div className="flex flex-row justify-center items-center w-full z-10 mt-8 px-0 h-3/4 space-x-4 font-outfit text-Primary">
        <div className="flex flex-col w-1/6 h-full shadow-[0_0_40px_20px_rgba(0,0,0,0.26)] rounded-[20px] text-Primary font-outfit">
          <div className="relative w-full h-full shadow-[0px_0px_40px_-1px_rgba(54,32,255,0.33)] rounded-[15px] border border-onPrimary border-opacity-20">
            <div className="flex flex-col flex-grow overflow-auto justify-normal itmes-center w-full h-full box-border rounded-[30px] pt-[30px] pb-5 px-[5px]">
              <div className="mt-6 px-4 text-xl mb-4 font-normal">
                Server Stats
              </div>
              <div className="w-11/12 h-max flex-shrink-0 px-3 font-normal">
                <div
                  className="w-full h-full bg-white bg-opacity-5 p-2 rounded-lg border-2 border-purple-300 box-border"
                  style={{
                    borderRadius: "5px",
                    border: "2px solid rgba(54, 32, 255, 0.25)",
                    background: "rgba(255, 255, 255, 0.03)",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto auto",
                      gap: "10px",
                    }}
                  >
                    <span>Status:</span>
                    <span>Running</span>
                    <span>Load:</span>
                    <span>43%</span>
                    <span>Waiting Time:</span>
                    <span>5s</span>
                  </div>
                  <div className="text-[#00FF00] pt-2">System Ready</div>
                </div>
              </div>
              <div className="mt-8 px-4 text-xl font-normal pb-2">
                Recent Queries
              </div>
              <div className="flex flex-col flex-grow justify-center items-center space-y-4 overflow-auto pt-4">
                {queries.map((query, index) => (
                  // eslint-disable-next-line react/jsx-key
                  <div className="flex-shrink-0 w-11/12 h-max font-normal">
                    <div
                      key={index}
                      className="w-full h-full bg-white bg-opacity-5 p-2 rounded-lg border-2 border-purple-300 box-border"
                      style={{
                        borderRadius: "5px",
                        border: "2px solid rgba(54, 32, 255, 0.25)",
                        background: "rgba(255, 255, 255, 0.03)",
                      }}
                    >
                      {query}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/5 h-full shadow-[0_0_40px_20px_rgba(0,0,0,0.26)] rounded-[20px] text-Primary font-outfit">
          <div className="relative w-full h-full shadow-[0px_0px_40px_-1px_rgba(54,32,255,0.33)] rounded-[15px] border border-onPrimary border-opacity-20">
            <div className="flex flex-col justify-normal items-start px-24 w-full h-full box-border rounded-[30px] pt-[30px] pb-5">
              <div className="text-xl text-center font-light mt-6">
                Enter your query:
              </div>
              <div className="relative w-full mt-4">
                <input
                  className="w-full p-2 rounded-10"
                  style={{
                    background: "rgba(217, 217, 217, 0.15)",
                  }}
                />
                <button className="absolute top-1/2 right-2 transform -translate-y-1/2 text-xl ">
                  <MdSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default query;
