import ellipse from "../assets/images/ellipse.svg";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";


const Login = () => {

  const dispatch = useDispatch();
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    // here the dispatch code to be added
  };

  return (
        <>
          <div className="w-full h-screen text-white flex flex-grow items-center justify-center bg-Background min-h-screen relative overflow-hidden">
            <div
            style={{ width: "1125px", height: "433px", filter: "blur(155px)" }}
            className="flex-shrink-0 rounded-[1125px] bg-custom-blue absolute top-0 left-0 z-0"
            ></div>
            <div
            style={{ width: "1125px", height: "433px", filter: "blur(155px)" }}
            className="flex-shrink-0 rounded-[1125px] bg-custom-blue absolute bottom-0 right-0 z-0"
            ></div>

            <div className="flex flex-col w-1/3 shadow-[0_0_40px_20px_rgba(0,0,0,0.26)] rounded-[20px] text-Primary font-outfit">
              <div className ="relative w-full h-full shadow-[0px_0px_40px_-1px_rgba(54,32,255,0.33)] rounded-[15px] border border-onPrimary border-opacity-20">
                <div className="w-full h-full box-border rounded-[30px] pt-[30px] pb-5 px-[5px]">
                  <div className= "flex items-center justify-center mb-5">
                    <img src={ellipse} alt="logo" className="justify-center m-8 scale-90" />
                    <h3 className="text-3xl font-semibold">geoQuery</h3>
                  </div>
                  <div className="text-5xl font-semibold text-center mb-12">Login to your account.</div>
                  <form onSubmit={loginSubmit}>
                      <div className="mx-4 p-4 font-light z-10">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" className="block w-full p-3 mt-1 rounded-lg bg-Primary bg-opacity-20" 
                          required
                          value={loginUserName}
                          onChange={(e) => setLoginUserName(e.target.value)}
                        />
                      </div>
                      <div className="mx-4 p-4 font-light z-10">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" className="block w-full p-3 mt-1 rounded-lg bg-Primary bg-opacity-20" 
                          required
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)} 
                        />
                      </div>
                      <div className="flex p-4 justify-center items-center">
                        <button className="w-full mx-4 my-4 z-10 bg-onPrimary hover:opacity-80 text-Primary text-xl h-11 rounded-lg font-outfit flex items-center justify-center"
                          type="submit"
                        >
                          <div className="text-center px-4">Login</div>
                        </button>
                      </div>
                  </form>
                  <div className="flex items-baseline justify-center text-lg z-10 mt-4">
                    Don&apos;t have an account?
                    <span className="text-xl font-semibold p-2 hover:underline hover:cursor-pointer">
                      <Link to="/signup">Sign Up</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
  );
};

export default Login;
