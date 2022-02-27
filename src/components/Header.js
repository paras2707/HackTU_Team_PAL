import React, { useState } from "react";
import { Nav, Navbar, Button, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="primary" variant="dark" fixed="top">
      {/* <Navbar.Brand style={{ marginLeft: "17px", marginRight: "27px" }}>
        
      </Navbar.Brand> */}
      <Button
        variant="primary"
        style={{ marginLeft: "17px", marginRight: "27px" }}
        onClick={handleShow}
      >
        <i className="fa-solid fa-bars" />
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          My Account <hr />
          Settings <hr />
          Groups <hr />
          People | Follow <hr />
          <h2>Add personal contacts</h2>
          <br />
          <p>
            We’ll periodically import and store your contacts to help you and
            others connect. You choose who to connect to and who to invite
          </p>
          <input type="email" placeholder="xyz123@gmail.com"></input>
        </Offcanvas.Body>
      </Offcanvas>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
