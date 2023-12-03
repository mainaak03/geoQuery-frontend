import React, { Fragment} from "react";
import "./Login.css";
import ellipse from "../assets/ellipse1.png";

const Login = () => {

  return (

        <Fragment>
          <div className="logcontainer bg-Background min-h-screen relative overflow-hidden">
            <div
            style={{ width: "1125px", height: "433px", filter: "blur(155px)" }}
            className="flex-shrink-0 rounded-[1125px] bg-custom-blue absolute top-0 left-0 z-0"
            ></div>
            <div
            style={{ width: "1125px", height: "433px", filter: "blur(155px)" }}
            className="flex-shrink-0 rounded-[1125px] bg-custom-blue absolute bottom-0 right-0 z-0"
            ></div>
            <div class="logCard">
              <div class="logInnerBox" id="card">
                <div class="logFront">
                  <div className= "logTitle">
                    <img src={ellipse} alt="logo" className="ellipse" />
                    <h3>geoQuery</h3>
                  </div>
                  <h2>Login To Your Account</h2>
                  <form >
                    <input
                      type="email"
                      class="input-box"
                      placeholder="Username"
                      
                    />
                    <input
                      type="password"
                      class="input-box"
                      placeholder="Password"
                    />
                    <div className="btnBox">
                      <button type="submit" class="logSubmitBtn">
                        Login
                      </button>
                    </div>
                  </form>
                  <button
                    type="button"
                    class="signBtn"
                  >
                    Don't have an account? Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
  );
};

export default Login;
