import { Link } from "react-router-dom";
import { useState } from "react";
import {useDispatch} from "react-redux";
import {register} from "../actions/userAction";
import ellipse from "../assets/images/ellipse.svg";

const Signup = () => {

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    first_name : "",
    last_name : "",
    username : "",
    password : "",
  });

  const { firstName,lastName,userName,password } = user;

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerSubmit = async (e) => {

    const userData = {
      first_name : firstName,
      last_name : lastName,
      username: userName,
      password: password,
    };
    dispatch(register(userData));
  };


  return (
    <>
      <div className="bg-Background min-h-screen relative overflow-hidden">
        <div
          style={{ width: "1125px", height: "433px", filter: "blur(155px)" }}
          className="flex-shrink-0 rounded-[1125px] bg-custom-blue absolute top-0 left-0 z-0"
        ></div>
        <div
          style={{ width: "1125px", height: "433px", filter: "blur(155px)" }}
          className="flex-shrink-0 rounded-[1125px] bg-custom-blue absolute bottom-0 right-0 z-0"
        ></div>

        <div className="flex h-screen">
            <div className="flex flex-col w-1/3 p-4 m-auto items-center justify-center rounded-2xl border border-onPrimary border-opacity-20 text-Primary font-outfit" style={{boxShadow:"0px 0px 40px -1px rgba(54, 32, 255, 0.33)"}}>
              <div className="flex items-center justify-center">
                <img src={ellipse} className="m-8 scale-90" alt="logo" />
                <div className="text-3xl font-semibold">geoQuery</div>
              </div>
              <div className="mb-12 text-5xl font-semibold">Create a new account.</div>

              <div className="flex flex-col flex-grow">

                <div className="flex flex-row z-10">
                  <div className="mx-4 my-2 font-light">
                    <label>First Name</label>
                    <input id="firstname" type="text" className="block p-3 mt-1 rounded-lg bg-Primary bg-opacity-20" 
                      required
                      name = "firstName"
                      value = {firstName}
                      onChange={registerDataChange}
                    />
                  </div>
                  <div className="mx-4 my-2 font-light">
                    <label htmlFor="lastname">Last Name</label>
                    <input id="lastname" type="text" className="block p-3 mt-1 rounded-lg bg-Primary bg-opacity-20" 
                      required 
                      name = "lastName"
                      value = {lastName}
                      onChange={registerDataChange}
                    />
                  </div>
                </div>

                <div className="mx-4 my-2 font-light z-10">
                  <label htmlFor="username">Username</label>
                  <input id="username" type="text" className="block w-full p-3 mt-1 rounded-lg bg-Primary bg-opacity-20"
                    required
                    name = "userName"
                    value = {userName}
                    onChange={registerDataChange} 
                  />
                </div>
                <div className="mx-4 my-2 font-light z-10">
                  <label htmlFor="password">Password</label>
                  <input id="password" type="password" className="block w-full p-3 mt-1 rounded-lg bg-Primary bg-opacity-20" 
                    required 
                    name = "password"
                    value = {password}
                    onChange={registerDataChange}
                  />
                </div>
                <button className="mx-4 my-8 z-10 bg-onPrimary hover:opacity-80 text-Primary text-xl h-11 rounded-lg font-outfit flex items-center justify-center"
                  onClick={registerSubmit}
                >
                  <div className="text-center px-4">Create Account</div>
                </button>
                <div className="flex items-baseline justify-center mx-4 my-2 text-lg z-10">
                  Already have an account?
                  <span className="text-xl font-semibold p-2 hover:underline hover:cursor-pointer">
                    <Link to="/login">Sign In.</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Signup;