import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// #import "bootstrap/dist/css/bootstrap.min.css";

const Navbard = () => {
  return (
    <Navbar expand="lg" variant="light" style={{ backgroundColor: "#c3ddfd" }} className="fixed-top">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="https://res.cloudinary.com/dwxqg9so3/image/upload/v1689691058/Frame_19_zd9u72.svg"
            alt="Logo"
            style={{ width: "40px", height: "auto" }}
          />
          Onlearn
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link>Contact Us</Nav.Link>
            <NavDropdown title="Join" id="basic-nav-dropdown">
              <NavDropdown.Item href="/signupTeacher">
                Join as a Tutor
              </NavDropdown.Item>
              <NavDropdown.Item href="/signupStudent">
                Join as a Student
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbard;
