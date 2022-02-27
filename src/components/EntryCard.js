import React, { useState } from "react";
import { Card, Button, Collapse, Form } from "react-bootstrap";

const EntryCard = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <Card style={{ width: "auto" }} className="m-3" bg="light">
      <Card.Body style={{ padding: "1rem 2rem" }}>
        <Card.Title>{props.text}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Idea Subtitle</Card.Subtitle>
        <Card.Text>The description of the idea is mentioned here.</Card.Text>
        <Button size="sm" style={{ marginRight: "10px" }}>
          <i className="fa-solid fa-arrow-up" />
        </Button>
        <Button size="sm" style={{ marginRight: "10px" }}>
          <i className="fa-solid fa-arrow-down" />
        </Button>
        <Button
          size="sm"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Comment
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text" className="mt-3">
            <Form.Control as="textarea" rows={3} />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default EntryCard;
