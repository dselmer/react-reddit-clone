import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";

export default function DisplayCard() {
  return (
    <>
      <div className="card-container ">
        <div></div>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://placehold.jp/150x150.png"
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
