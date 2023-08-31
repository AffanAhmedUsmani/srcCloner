import React, { useState } from "react";
import Nav2 from "../common/Nav2";

function LoginTeacher() {
  const [next, setNext] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const options = [
    { value: "Biology", label: "Biology" },
    { value: "Chemistry", label: "Chemistry" },
    { value: "Physics", label: "Physics" },
  ];
  const options2 = [
    { value: "OLevels", label: "O Levels" },
    { value: "Alevels", label: "A Levels" },
  ];

  return (
    <>
      <Nav2 />
      <div className="signup_student_main">
        <div className="signup_student_left">
          <h1>Login</h1>

          <>
            <div className="input_div_first">
              <label>Email</label>
              <input type="text" placeholder="Enter your Email"></input>
            </div>
            <div className="input_div_second">
              <label>Password</label>
              <input type="text" placeholder="Enter your Password"></input>
            </div>
            <p className="forgot">forgot password?</p>
            <div className="input_div_second">
              <button className="next_button" onClick={() => setNext(1)}>
                Login
              </button>
            </div>
            <p
              style={{ textAlign: "center", marginTop: "60px" }}
              className="forgot"
            >
              OR
            </p>
            <div className="input_div_second">
              <button
                className="login_button_routing"
                onClick={() => setNext(1)}
              >
                <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689710171/Google_Logo_cloikl.svg"></img>{" "}
                Continue with Google
              </button>
              <button className="login_button_routing">
                don't have an account? signup
              </button>
            </div>
          </>
        </div>
        <div className="signup_student_right">
          <h1>Teacher</h1>
          <p>Login to manage your classes and connect with students</p>
          <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689705302/affan_ahmed_Generate_an_illustration_of_a_student_performing_in_fc527afc-4b25-4cb5-9545-66f48d80efdc_top_right_1_vyit6m.png"></img>
        </div>
      </div>
    </>
  );
}

export default LoginTeacher;
