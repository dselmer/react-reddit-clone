import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../App.css";
import { PiArrowFatUpLight } from "react-icons/pi";
import { PiArrowFatDownLight } from "react-icons/pi";
import FooterContainer from "../../Containers/FooterContainer/FooterContainer";
import SideViewContainer from "../../Containers/SideViewContainer/SideViewContainer";
export default function DisplayCard() {
  return (
    <>
      <div className="card-container">
        <Row xs={1} md={2} className="g-4 row-container">
          {Array.from({ length: 4 }).map((_, idx) => (
            <>
              <Col key={idx}>
                <Card className="g-4 card">
                  <div className=" flex-container">
                    <div className="cta-container">
                      <PiArrowFatUpLight className="icon icons" />
                      <h6>15.2K</h6>
                      <PiArrowFatDownLight className="icon icons" />
                    </div>
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Img
                        variant="top"
                        src="https://placehold.jp/1050x1050.png"
                        className="img"
                      />
                    </Card.Body>
                  </div>
                  <FooterContainer />
                </Card>
              </Col>
            </>
          ))}
        </Row>
        <SideViewContainer />
      </div>
    </>
  );
}
