import React, { useState ,useEffect} from "react";
import "./signupteacher.scss";
import Nav2 from "../common/Nav2";
import Select from "react-select";
import Dropzone from "react-dropzone";
import  {fetchAllSubjects} from '../../Routes/apiCalls'



function SignupTeacher() {
  const [next, setNext] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isQTSVerified, setIsQTSVerified] = useState(false);
  const [isDBSVerified, setIsDBSVerified] = useState(false);
  const [experience, setExperience] = useState("");
  const [dbsFile, setDBSFile] = useState(null);
  const [qtsFile, setQTSFile] = useState(null);
  const [rate, setRate] = useState("");
  const [method, setMethod] = useState("");
  const [distance, setDistance] = useState("");
  const [freeTrial, setFreeTrial] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [subjectOptions, setSubjectOptions] = useState([]);

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const subjects = await fetchAllSubjects();
      const options = subjects.map(subject => ({ value: subject.id, label: subject.name+","+subject.qualificationName+","+subject.boardName }));
      setSubjectOptions(options);
    } catch (error) {
      console.error('Error fetching subjects:', error);
    }
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [HQ, setHQ] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleFileDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (file.size > 3 * 1024 * 1024) {
        alert("File size should be less than 3MB.");
        return;
      }
      if (file.type !== "image/png" && file.type !== "image/jpeg") {
        alert("File format should be PNG or JPEG.");
        return;
      }

      setSelectedFiles(acceptedFiles);
      setUploadedFileName(file.name);
    }
  };
  
  const handleFileDropVerify = (acceptedFiles, fileType) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (file.size > 3 * 1024 * 1024) {
        alert("File size should be less than 3MB.");
        return;
      }
      if (file.type !== "application/pdf") {
        alert("File format should be PDF.");
        return;
      }

      if (fileType === "dbs") {
        setDBSFile(file);
      } else if (fileType === "qts") {
        setQTSFile(file);
      }
      
      
    }
  };

  const experienceOptions = [];
  for (let i = 1; i <= 20; i++) {
    experienceOptions.push({ value: i, label: i.toString() });
  }
  

  const handleNextClick = () => {
    if (next ==0){
    if (!firstName || !lastName || !HQ) {
      alert("Please fill in all required fields");
      return;
    }
    if (selectedFiles.length === 0) {
      alert("Please upload a file");
      return;
    }
    setNext(1);
  }
  else if (next ==1){
    if (!selectedOption) {
      alert("Please select a main subject and other subjects.");
      return;
    }

    if (isQTSVerified && selectedFiles.filter(item => item.type === "qts").length === 0) {
      alert("Please upload QTS qualification document.");
      return;
    }

    if (isDBSVerified && selectedFiles.filter(item => item.type === "dbs").length === 0) {
      alert("Please upload DBS qualification document.");
      return;
    }

    if (!experience) {
      alert("Please select years of experience.");
      return;
    }

    setNext(2);
  }
  else if (next ==2){
    if (
      !rate ||
      !method ||
      (method !== "Online" && !distance) ||
      !freeTrial ||
      !address ||
      !zipCode
    ) {
      alert("Please fill in all the required fields.");
      return;
    }
  }
     // Proceed to the next page
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
            <div className="image-preview">
          {selectedFiles.length > 0 && (
            <img src={URL.createObjectURL(selectedFiles[0])} alt="Uploaded" />
          )}
        </div>
            <div className="input_div_second">
              <label>First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input_div_second">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input_div_second">
              <label>Highest Qualification Degree</label>
              <input
                type="text"
                placeholder="Enter your first name"
                value={HQ}
                onChange={(e) => setHQ(e.target.value)}
              />
            </div>
            <div>
      <div className="input_div_sec">
      
      <Dropzone onDrop={handleFileDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <div className="input_div_secones" {...getRootProps()}>
                      <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689708338/upload_a5t1d8.png"></img>

                      <p>Upload a File(s)</p>
                      <p>Image File size should be less than 3MB</p>

                      <input {...getInputProps()} />
                    </div>
                  )}
        </Dropzone>
        
      </div>
      <div className="input_div_second">
        
        {uploadedFileName && <p>Uploaded File: {uploadedFileName}</p>}
      </div>
    </div>
            <div className="input_div_second">
              <button className="next_button" onClick={handleNextClick}>
                Next
              </button>
              <button className="login_button_routing">
                Already have an account? Login
              </button>
            </div>
          </>
          ) : next === 1 ? (
            <>
              
              <div className="seperation_div">
        <div className="input_div_sec">
          <label>Have you acquired QTS?</label>
          <div className="qts_div">
            <label>Yes</label>
            <input
              type="radio"
              name="qts"
              onChange={() => setIsQTSVerified(true)}
            />
            <label>No</label>
            <input
              type="radio"
              name="qts"
              onChange={() => setIsQTSVerified(false)}
            />
          </div>
        </div>
        <Dropzone onDrop={(acceptedFiles) => handleFileDropVerify(acceptedFiles, "qts")}>
          {({ getRootProps, getInputProps }) => (
            <div className="input_div_secone" {...getRootProps()}>
              <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689708338/upload_a5t1d8.png"></img>
              <div>
                <p>QTS qualification document</p>
                <p>Drag and drop files here</p>
              </div>
              <input {...getInputProps()} />
            </div>
          )}
        </Dropzone>
      </div>

      <div className="seperation_div">
        <div className="input_div_sec">
          <label>Have you acquired DBS?</label>
          <div className="qts_div">
            <label>Yes</label>
            <input
              type="radio"
              name="dbs"
              onChange={() => setIsDBSVerified(true)}
            />
            <label>No</label>
            <input
              type="radio"
              name="dbs"
              onChange={() => setIsDBSVerified(false)}
            />
          </div>
        </div>
        <Dropzone onDrop={(acceptedFiles) => handleFileDropVerify(acceptedFiles, "dbs")}>
          {({ getRootProps, getInputProps }) => (
            <div className="input_div_secone" {...getRootProps()}>
              <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689708338/upload_a5t1d8.png"></img>
              <div>
                <p>DBS qualification document</p>
                <p>Drag and drop files here</p>
              </div>
              <input {...getInputProps()} />
            </div>
          )}
        </Dropzone>
      </div>
              <div className="input_div_second">
                <label>Main Subject</label>
                <Select
                  value={selectedOption}
                  onChange={setSelectedOption}
                  options={subjectOptions}
                />
              </div>
              <div className="input_div_second">
                <label>Other Subject</label>
                <Select
                  value={selectedOption}
                  onChange={setSelectedOption}
                  options={subjectOptions}
                  isMulti
                />
              </div>
              <div className="input_div_second">
        <label>Experience (number of years in Teaching)</label>
        <Select
          value={experience}
          onChange={setExperience}
          options={experienceOptions}
          placeholder="Select years of experience"
        />
      </div>
              <div className="input_div_second">
                <button className="next_button" onClick={() => setNext(2)}>
                  Next
                </button>
               
              </div>
            </>
          ) : next === 2 ? (
            <>
         <div className="input_div_first">
  <label>Rate Per Hour</label>
  <div className="rate-input">
    <input
      type="number"
      step="0.01"
      placeholder="Enter your rate"
      value={rate}
      onChange={(e) => setRate(e.target.value)}
    ></input>
    <span>$</span>
  </div>
</div>
      <div className="input_div_second">
        <label>Method</label>
        <div className="method-radio">
          <label>
            <input
              type="radio"
              name="method"
              value="Online"
              onChange={(e) => setMethod(e.target.value)}
            />
            Online
          </label>
          
          <label>
            <input
              type="radio"
              name="method"
              value="OnSite"
              onChange={(e) => setMethod(e.target.value)}
            />
            OnSite
          </label>
          <label>
            <input
              type="radio"
              name="method"
              value="Both"
              onChange={(e) => setMethod(e.target.value)}
            />
            Both
          </label>
        </div>
      </div>
      {method !== "Online" && method !== "" && (
        <div className="input_div_second">
          <label>Maximum Distance (miles)</label>
          <select
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          >
            <option value="">Select maximum distance</option>
            {Array.from({ length: 41 }, (_, i) => (
              <option key={i} value={i}>
                {i} miles
              </option>
            ))}
          </select>
        </div>
      )} 
             <div className="input_div_second">
        <label>Free trial</label>
        <select
          value={freeTrial}
          onChange={(e) => setFreeTrial(e.target.value)}
        >
          <option value="">Select option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="input_div_second">
        <label>Address</label>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
      </div>
      <div className="input_div_second">
        <label>Zip Code</label>
        <input
          type="text"
          placeholder="Enter your zip code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        ></input>
      </div>
              <div className="input_div_second">
                <button className="next_button" onClick={() => setNext(3)}>
                  Next
                </button>
              
              </div>
            </>
          ) : (
            <>
              <div className="input_div_first">
                <label>Current students</label>
                <input
                  type="text"
                  placeholder="Currewnt students you are working with"
                ></input>
              </div>
              <div className="input_div_second">
                <label>Popularity Rank</label>
                <input
                  type="text"
                  placeholder="Number of students recommended"
                ></input>
              </div>
              <div className="input_div_second">
                <label>Documents Relevant to Specified Qualifications</label>
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
                
              </div>
            </>
          )}
        </div>
        <div className="signup_student_right">
          <h1>Teacher</h1>
          <p>Inspire and educate the next generation as an esteemed educator</p>
          <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689705302/affan_ahmed_Generate_an_illustration_of_a_student_performing_in_fc527afc-4b25-4cb5-9545-66f48d80efdc_top_right_1_vyit6m.png"></img>
        </div>
      </div>
    </>
  );
}

export default SignupTeacher;
