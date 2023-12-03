import React, { Fragment} from "react";
import "./SignUp.css";
import ellipse from "../assets/ellipse1.png";

const SignUp = () => {


  return (
    <Fragment>
    <div class="signContainer">
      <div class="signCard">
        <div class="signInnerBox" id="card">
          <div class="signFront">
            <div className= "logTitle">
              <img src={ellipse} alt="logo" className="ellipse" />
              <h3>geoQuery</h3>
            </div>
            <h2>Create a new acccount</h2>
            <form >
              <div className="formName">
                <input
                  type="text"
                  class="input-box"
                  placeholder="First"
                />
                <input
                  type="text"
                  class="input-box"
                  placeholder="Last"
                />
              </div>
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
                <button type="submit" class="signSubmitBtn">
                  Create account
                </button>
              </div>
            </form>
            <button
              type="button"
              class="logBtn"
            >
              Already have an account? Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default SignUp;
