import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EntryCard from "./EntryCard";
import LeftCard from "./LeftCard";
import NewEntry from "./NewEntry";
import RightCard from "./RightCard";

const Entry = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <LeftCard />
        </Col>
        <Col xs={6} style={{ marginTop: "3.5rem" }}>
          <NewEntry />
          <EntryCard text="idea 1 title" />
          <EntryCard text="idea 2 title" />
          <EntryCard text="idea 3 title" />
          <EntryCard text="idea 4 title" />
          <EntryCard text="idea 5 title" />
        </Col>
        <Col>
          <RightCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Entry;
