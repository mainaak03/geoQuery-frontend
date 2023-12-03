import React, { Fragment} from "react";
import "./Login.css";
import ellipse from "../assets/ellipse1.png";

const Login = () => {


  return (

        <Fragment>
          <div class="logcontainer">
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
