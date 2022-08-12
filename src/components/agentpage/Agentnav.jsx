import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FcElectroDevices } from "react-icons/fc";
import "./Agentpg.css";
const Agentnav = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <FcElectroDevices style={{ fontSize: "40px" }} />
            chat2fly
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  style={{ width: "230px", height: "36px" }}
                />
              </Form>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About us</Nav.Link>
              <Nav.Link href="#action2">Packages</Nav.Link>
              <Nav.Link href="#action2">Support</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
            </Nav>

            <div>
              {" "}
              <img
                src={require("../images/agentprofile.jpeg")}
                style={{ width: "40px", height: "40px", borderRadius: "50px" }}
              />{" "}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Agentnav;
