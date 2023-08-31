import React, { useState } from "react";
import "./faq.scss";

function Faq() {
  const [faqs, setfaqs] = useState([
    {
      question: "How does online tutoring work?",
      answer:
        "Online tutoring involves live, interactive sessions between students and qualified tutors conducted through a virtual learning platform. Students can join the sessions from their own devices, such as laptops or tablets, and interact with tutors via video, audio, and chat features.",
      show: true,
    },
    {
      question: "How does online tutoring work?",
      answer:
        "Online tutoring involves live, interactive sessions between students and qualified tutors conducted through a virtual learning platform. Students can join the sessions from their own devices, such as laptops or tablets, and interact with tutors via video, audio, and chat features.",
      show: false,
    },
    {
      question: "How does online tutoring work?",
      answer:
        "Online tutoring involves live, interactive sessions between students and qualified tutors conducted through a virtual learning platform. Students can join the sessions from their own devices, such as laptops or tablets, and interact with tutors via video, audio, and chat features.",
      show: false,
    },
    {
      question: "How does online tutoring work?",
      answer:
        "Online tutoring involves live, interactive sessions between students and qualified tutors conducted through a virtual learning platform. Students can join the sessions from their own devices, such as laptops or tablets, and interact with tutors via video, audio, and chat features.",
      show: false,
    },
  ]);

  const handleShow = (index) => {
    let temp = [...faqs];
    temp[index].show = !temp[index].show;
    setfaqs(temp);
  };
  return (
    <div className="faq__main">
      <div className="faq_inner">
        <h1>FAQs</h1>
        {faqs?.map((faq, index) => {
          return (
            <div className="faq">
              <div className="faq__left">
                <p className="question">{faq?.question}</p>
                {faq.show && <p className="answer">{faq.answer}</p>}
              </div>
              <div className="faq__right">
                <div
                  className={faq?.show ? "button2" : "button"}
                  onClick={() => handleShow(index)}
                >
                  <img
                    src={
                      faq?.show
                        ? "https://res.cloudinary.com/dwxqg9so3/image/upload/v1689702572/Vector_205_gama2d.svg"
                        : "https://res.cloudinary.com/dwxqg9so3/image/upload/v1689702572/Vector_205_1_lowrjb.svg"
                    }
                  ></img>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
