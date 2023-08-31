import React , { useState, useEffect }from "react";
import "./find.scss";
import Toast from "../common/Toast";
import { fetchAllSubjects } from "../../Routes/apiCalls"

function FindYourTutor() {
  const [subjectNames, setSubjectNames] = useState([]);

  useEffect(() => {
    const fetchSubjectNames = async () => {
      const subjects = await fetchAllSubjects();
      setSubjectNames(subjects);
    };

    fetchSubjectNames();
  }, []);
  return (
    <div className="find__main">
      <p className="find_title">Find your tutor</p>
      <select className="find_select_subject">
        <option selected disabled>
          Subject
        </option>
        {subjectNames.map((subject) => (
          <option key={subject.id} >{subject.name},{subject.qualificationName},{subject.boardName}</option>
        ))}
      </select>
      <select className="find_select_address">
        <option selected disabled>
          Address
        </option>
        <option>Address line 1</option>
        <option>Address line 2</option>
        <option>Address line 3</option>
        <option>Address line 4</option>
      </select>
      <div className="map_find">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
          width="750"
          height="450"
          style={{
            border: 0,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
            borderRadius: "10px",
          }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Toast
        image="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689696308/Component_1_m7iuee.png"
        name="Hellen Whilliams"
        subject="Lorem ipsum dolor sit amet"
      />
      <Toast
        image="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689696308/Component_1_m7iuee.png"
        name="Hellen Whilliams"
        subject="Lorem ipsum dolor sit amet"
      />
      <Toast
        image="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689696308/Component_1_m7iuee.png"
        name="Hellen Whilliams"
        subject="Lorem ipsum dolor sit amet"
      />
      <Toast
        image="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689696308/Component_1_m7iuee.png"
        name="Hellen Whilliams"
        subject="Lorem ipsum dolor sit amet"
      />
      <Toast
        image="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689696308/Component_1_m7iuee.png"
        name="Hellen Whilliams"
        subject="Lorem ipsum dolor sit amet"
      />
      <div className="find_stats_div">
        <div className="find_stat_inner">
          <div className="find_stat_round">
            <p>23K</p>
          </div>
          <p>Tutors</p>
        </div>
        <div className="find_stat_inner">
          <div className="find_stat_round">
            <p>23K</p>
          </div>
          <p>Subjects</p>
        </div>
        <div className="find_stat_inner">
          <div className="find_stat_round">
            <p>23K</p>
          </div>
          <p>Countries</p>
        </div>
        <div className="find_stat_inner">
          <div className="find_stat_round">
            <p>23K</p>
          </div>
          <p>Students</p>
        </div>
        <div className="find_stat_inner">
          <div className="find_stat_round">
            <p>23K</p>
          </div>
          <p>Tutors</p>
        </div>
      </div>
      <div className="find_heading_section">
        <div className="Heading_section_left">
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
            justo vitae mauris suscipit vehicula. Nulla facilisi. Phasellus urna
            nulla, tristique eget facilisis quis, rutrum non ligula. Nam tortor
            orci, tincidunt id tincidunt non, hendrerit ac mauris. Pellentesque
            ullamcorper placerat congue. Suspendisse.
          </p>
        </div>
        <div className="Heading_section_right">
          <div className="Heading_section_right1">
            <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689696308/Component_1_m7iuee.png"></img>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
              justo vitae.
            </p>
          </div>
          <div className="Heading_section_right2">
            <img src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689696308/Component_1_m7iuee.png"></img>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
              justo vitae.
            </p>
          </div>
        </div>
      </div>
      <div className="find_heading_section2">
        <div className="Heading_section_left_second">
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
            justo vitae mauris suscipit vehicula. Nulla facilisi. Phasellus urna
            nulla, tristique eget facilisis quis, rutrum non ligula.
          </p>
        </div>
        <div className="Heading_section_left_second22">
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
            justo vitae mauris suscipit vehicula. Nulla facilisi. Phasellus urna
            nulla, tristique eget facilisis quis, rutrum non ligula.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FindYourTutor;
