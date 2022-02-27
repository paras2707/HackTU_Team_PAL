import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";

const NewEntry = (props) => {
  return (
    <Card style={{ width: "auto" }} className="m-3" bg="light">
      <Card.Body style={{ padding: "1rem 2rem" }}>
        <div className="d-flex align-items-center mb-2">
          <div className="avatar" />
          <span className="text-muted" style={{ marginRight: "10px" }}>
            Write Something...
          </span>
          <i className="fa-solid fa-pen text-muted" />
        </div>
      </Card.Body>
      <div
        className="d-flex justify-content-between align-items-center mt-4"
        style={{ backgroundColor: "#D2F0FF69", height: "55px" }}
      >
        <div className="text-muted m-4" style={{ fontSize: "1.2rem" }}>
          <i className="fa-solid fa-image" />
          <span style={{ marginLeft: "5px" }}>Photo</span>
        </div>
        <div className="text-muted m-4" style={{ fontSize: "1.2rem" }}>
          <i className="fa-solid fa-video" />
          <span style={{ marginLeft: "5px" }}>Video</span>
        </div>
        <div className="text-muted m-4" style={{ fontSize: "1.2rem" }}>
          <i class="fa-solid fa-calendar-days" />
          <span style={{ marginLeft: "5px" }}>Event</span>
        </div>
        <div className="text-muted m-4">
          <i className="fa-solid fa-newspaper" />
          <span style={{ marginLeft: "5px" }}>Article</span>
        </div>
      </div>
    </Card>
  );
};

export default NewEntry;
