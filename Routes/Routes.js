import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../components/home/home";

import AdminDashboard from "../components/dashboard/admin/Dashboard";
import TeacherDashboard from "../components/dashboard/teacher/Dashboard";
import StudentDashboard from "../components/dashboard/student/Dashboard";
import SignupStudent from "../components/signupStudent/SignupStudent";
import SignupTeacher from "../components/signupTeacher/SignupTeacher";
import LoginStudent from "../components/loginStudent/LoginStudent";
import LoginTeacher from "../components/loginTeacher/LoginTeacher";

const Main_Routes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signupStudent" element={<SignupStudent />} />
      <Route exact path="/signupTeacher" element={<SignupTeacher />} />
      <Route exact path="/loginstudent" element={<LoginStudent />} />
      <Route exact path="/loginteacher" element={<LoginTeacher />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/studentdashboard" element={<StudentDashboard />} />
      <Route path="/teacherdashboard" element={<TeacherDashboard />} />
    </Routes>
  );
};

export default Main_Routes;
