import React, { useState } from "react";
import "./signupstudent.scss";
import Navbar from "../common/navbar";
import Nav2 from "../common/Nav2";
import Select from "react-select";
import Dropzone from "react-dropzone";

function SignupStudent() {
  const [next, setNext] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedQualification, setSelectedQualification] = useState(null); // Added state for selected qualification

  // Define the key-value pair for qualifications and their related subjects
  const qualificationSubjects = {
    "GCSE": [
      { value: "Applied Art and Design", label: "Applied Art and Design (8201; 8202; 8203; 8204; 8205; 8206)" },
      { value: "Bengali", label: "Bengali (8638)" },
      { value: "Biology", label: "Biology (8461)" },
      { value: "Business", label: "Business (8132)" },
      { value: "Chemistry", label: "Chemistry (8462)" },
      { value: "Chinese", label: "Chinese (Spoken Mandarin) - 8673" },
      { value: "Citizenship Studies", label: "Citizenship Studies (8100)" },
      { value: "Combined Science: Synergy", label: "Combined Science: Synergy (8465)" },
      { value: "Combined Science: Triology", label: "Combined Science: Triology (8464)" },
      { value: "Computer Science", label: "Computer Science (8525)" },
      { value: "Dance", label: "Dance (8236)" },
      { value: "Economics", label: "Economics (8136)" },
      { value: "Engineering", label: "Engineering (8852)" },
      { value: "English Language", label: "English Language (8700)" },
      { value: "English Literature", label: "English Literature (8702)" },
      { value: "Food Preparation and Nutrition", label: "Food Preparation and Nutrition (8702)" },
      { value: "French (New)", label: "French (8652) - New" },
      { value: "French", label: "French (8658)" },
      { value: "Geography", label: "Geography (8035)" },
      { value: "German (New)", label: "German (8662) - New" },
      { value: "German", label: "German (8668)" },
      { value: "History", label: "History (8145)" },
      { value: "Italian", label: "Italian (8633)" },
      { value: "Mathematics", label: "Mathematics (8300)" },
      { value: "Mathematics", label: "Mathematics" },
      { value: "Media Studies", label: "Media Studies (8572)" },
      { value: "Modern Hebrew", label: "Modern Hebrew (8678)" },
      { value: "Music", label: "Music (8271)" },
      { value: "Panjabi", label: "Panjabi (8683)" },
      { value: "Physical Education", label: "Physical Education (8582)" },
      { value: "Physics", label: "Physics (8643)" },
      { value: "Polish", label: "Polish (8688)" },
      { value: "Psychology", label: "Psychology (8182)" },
      { value: "Religious Studies A", label: "Religious Studies A (8062)" },
      { value: "Religious Studies B", label: "Religious Studies B (8063)" },
      { value: "Religious Studies: Short course", label: "Religious Studies: Short course (8061)" },
      { value: "Sociology", label: "Sociology (8192)" },
      { value: "Spanish (New)", label: "Spanish (8692) New" },
      { value: "Statistics", label: "Statistics (8382)" },
      { value: "Urdu", label: "Urdu (8648)" },
    ],
    "AS Level": [
      { value: "Biology", label: "Biology (7401)" },
      { value: "Business", label: "Business (7131)" },
      { value: "Computer Science", label: "Computer Science (7516)" },
      { value: "Economics", label: "Economics (7135)" },
      { value: "English Language", label: "English Language (7701)" },
      { value: "English Literature A", label: "English Literature A (7711)" },
      { value: "English Literature B", label: "English Literature B (7716)" },
      { value: "French", label: "French (7651)" },
      { value: "Further Mathematics", label: "Further Mathematics (7366)" },
      { value: "Geography", label: "Geography (7036)" },
      { value: "German", label: "German (7661)" },
      { value: "History", label: "History (7041)" },
      { value: "Mathematics", label: "Mathematics (7356)" },
      { value: "Physics", label: "Physics (7407)" },
      { value: "Psychology", label: "Psychology (7181)" },
      { value: "Religious Studies", label: "Religious Studies (7061)" },
      { value: "Sociology", label: "Sociology (7191)" },
      { value: "Spanish", label: "Spanish (7691)" },
    ],
    "A-Levels": [
      { value: "Accounting", label: "Accounting (7127)" },
      { value: "Art and Design", label: "Art and Design (7201; 7202; 7203; 7204; 7205; 7206)" },
      { value: "Bengali (Listening, Reading and Writing)", label: "Bengali (Listening, Reading and Writing) (7637)" },
      { value: "Biblical Hebrew", label: "Biblical Hebrew (7677)" },
      { value: "Biology", label: "Biology (7402)" },
      { value: "Business", label: "Business (7132)" },
      { value: "Chemistry", label: "Chemistry (7405)" },
      { value: "Computer Science", label: "Computer Science (7517)" },
      { value: "Dance", label: "Dance (7237)" },
      { value: "Design and Technology: Fashion and Textiles", label: "Design and Technology: Fashion and Textiles (7562)" },
      { value: "Design and Technology: Product Design", label: "Design and Technology: Product Design (7552)" },
      { value: "Drama and Theatre", label: "Drama and Theatre (7262)" },
      { value: "Economics", label: "Economics (7136)" },
      { value: "English Language", label: "English Language (7702)" },
      { value: "English Language and Literature", label: "English Language and Literature (7707)" },
      { value: "English Literature A", label: "English Literature A (7712)" },
      { value: "English Literature B", label: "English Literature B (7717)" },
      { value: "Environmental Science", label: "Environmental Science (7447)" },
      { value: "French", label: "French (7652)" },
      { value: "Further Mathematics", label: "Further Mathematics (7367)" },
      { value: "Geography", label: "Geography (7037)" },
      { value: "German", label: "German (7662)" },
      { value: "History", label: "History (7042)" },
      { value: "Law", label: "Law (7162)" },
      { value: "Mathematics", label: "Mathematics (7357)" },
      { value: "Media Studies", label: "Media Studies (7572)" },
      { value: "Modern Hebrew (Listening, Reading, Writing)", label: "Modern Hebrew (Listening, Reading, Writing) (7672)" },
      { value: "Music", label: "Music (7272)" },
      { value: "Panjabi (Listening, Reading, Writing)", label: "Panjabi (Listening, Reading, Writing) (7682)" },
      { value: "Philosophy", label: "Philosophy (7172)" },
      { value: "Physical Education", label: "Physical Education (7582)" },
      { value: "Physics", label: "Physics (7408)" },
      { value: "Polish (Listening, Reading, Writing)", label: "Polish (Listening, Reading, Writing) (7687)" },
      { value: "Politics", label: "Politics (7408)" },
      { value: "Psychology", label: "Psychology (7182)" },
      { value: "Religious Studies", label: "Religious Studies (7062)" },
      { value: "Sociology", label: "Sociology (7192)" },
      { value: "Spanish", label: "Spanish (7692)" },
    ],
    "Applied General":[

    ],
    "AQA Certificate Mathematics":[

    ],
    "Entry Level Certificates":[

    ],
    

    // Add more qualifications and their subjects here
  };

  // Function to update subjects based on the selected qualification
  const handleQualificationChange = (selectedQualification) => {
    setSelectedQualification(selectedQualification);
    setSelectedOption(null); // Reset the selected subjects when the qualification changes
  };  



  return (
    <>
      <Nav2 />
      <div className="signup_student_main">
        <div className="signup_student_left">
          <h1>Sign Up</h1>
          <div
            className={next === 0 ? "line" : next === 1 ? "line2" : "line3"}
          ></div>
          {next === 0 ? (
            <>
              <div className="input_div_first">
                <label>First Name</label>
                <input type="text" placeholder="Enter your first name"></input>
              </div>
              <div className="input_div_second">
                <label>Last Name</label>
                <input type="text" placeholder="Enter your last name"></input>
              </div>
              <div className="input_div_second">
                <label>Address</label>
                <input type="text" placeholder="Enter your address"></input>
              </div>
              <div className="input_div_second">
                <button className="next_button" onClick={() => setNext(1)}>
                  Next
                </button>
                <button className="login_button_routing">
                  Already has account? login
                </button>
              </div>
            </>
          ) : next === 1 ? (
            <>
            <div className="input_div_first">
                <label>Qualification</label>
                <Select
                  value={selectedQualification}
                  onChange={handleQualificationChange}
                  options={[
                    { value: "GCSE", label: "GCSE" },
                    { value: "AS Level", label: "AS Level" },
                    { value: "A-Levels", label: "A-Levels" },
                    { value: "Applied General", label: "Applied General" },
                    { value: "AQA Certificate Mathematics", label: "AQA Certificate Mathematics" },
                    { value: "Entry Level Certificates", label: "Entry Level Certificate" },
                    
                    // Add more qualification options here
                  ]}
                />
              </div>
              <div className="input_div_first">
                <label>Subjects</label>
                <Select
                  value={selectedOption}
                  onChange={setSelectedOption}
                  options={
                    selectedQualification
                      ? qualificationSubjects[selectedQualification.value]
                      : []
                  }
                  isMulti
                />
              </div>
              <div className="input_div_second">
                <label>Lesson Mode</label>
                <input type="text" placeholder="Enter your lesson mode"></input>
              </div>
              <div className="input_div_second">
                <button className="next_button" onClick={() => setNext(2)}>
                  Next
                </button>
                <button className="login_button_routing">
                  Already has account? login
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="input_div_first">
                <label>Mobile Number</label>
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                ></input>
              </div>
              <div className="input_div_second">
                <label>Postal Code</label>
                <input type="text" placeholder="Enter your postal code"></input>
              </div>
              <div className="input_div_second">
                <label>Upload File</label>
                <Dropzone
                  onDrop={(acceptedFiles) => console.log(acceptedFiles)}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div className="input_div_secones" {...getRootProps()}>
                      <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689708338/upload_a5t1d8.png"></img>

                      <p>Upload a File(s)</p>
                      <p>Drag and drop files here</p>

                      <input {...getInputProps()} />
                    </div>
                  )}
                </Dropzone>
              </div>
              <div className="input_div_second">
                <button className="next_button">Create Account</button>
                <button className="login_button_routing">
                  Already has account? login
                </button>
              </div>
            </>
          )}
        </div>
        <div className="signup_student_right">
          <h1>Student</h1>
          <p>
            Create your account and embark on a journey of knowledge and growth
          </p>
          <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689705302/affan_ahmed_Generate_an_illustration_of_a_student_performing_in_fc527afc-4b25-4cb5-9545-66f48d80efdc_top_right_1_vyit6m.png"></img>
        </div>
      </div>
    </>
  );
}

export default SignupStudent;
