import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export default function DisplayCard() {
  return (
    <>
      <div className="card-container ">
        <Row xs={1} md={2} className="g-4 cta-container">
          {Array.from({ length: 4 }).map((_, idx) => (
            <>
              <Col key={idx}>
                <Card className="g-4">
                  <div className=" flex-container">
                    <div className="cta-container">
                      <FaArrowUp className="icon icons" />
                      <h6>15.2K</h6>
                      <FaArrowDown className="icon icons" />
                    </div>
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Img
                        variant="top"
                        src="https://placehold.jp/150x150.png"
                      />
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </div>
    </>
  );
}
