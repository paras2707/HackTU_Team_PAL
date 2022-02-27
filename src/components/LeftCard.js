import React from "react";
import { Card, ListGroup, Form } from "react-bootstrap";

const LeftCard = () => {
  return (
    <Card style={{ width: "auto", marginTop: "4.5rem", marginLeft: "1rem" }}>
      <ListGroup variant="flush">
        <ListGroup.Item style={{ fontSize: "1.2rem", padding: "1rem" }}>
          My Account
        </ListGroup.Item>
        <ListGroup.Item style={{ fontSize: "1.2rem", padding: "1rem" }}>
          Groups
        </ListGroup.Item>
        <ListGroup.Item style={{ fontSize: "1.2rem", padding: "1rem" }}>
          People | Follow
        </ListGroup.Item>
        <ListGroup.Item style={{ fontSize: "1.2rem", padding: "1rem" }}>
          Events
        </ListGroup.Item>
        <ListGroup.Item style={{ fontSize: "1.2rem", padding: "1rem" }}>
          Contacts
        </ListGroup.Item>
        <ListGroup.Item style={{ fontSize: "1.2rem", padding: "1rem" }}>
          Hashtags
        </ListGroup.Item>
        <ListGroup.Item style={{ fontSize: "1.2rem", padding: "1rem" }}>
          Newsletters
        </ListGroup.Item>
        <ListGroup.Item style={{ fontSize: "1.2rem", padding: "1rem" }}>
          <h4>Add personal contacts</h4>
          <br />
          <p>
            We’ll periodically import and store your contacts to help you and
            others connect. You choose who to connect to and who to invite
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Form>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default LeftCard;
