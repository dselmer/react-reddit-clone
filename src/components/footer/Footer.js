import React from "react";
import styles from "../footer/styles.css";
import { CiChat2 } from "react-icons/ci";
import Card from "react-bootstrap/Card";

export default function Footer() {
  return (
    <div className="footer-container">
      <Card.Img
        variant="top"
        src="https://placehold.jp/5x5.png"
        className="footer-img"
      />
      <h6>17 hours ago</h6>
      <div className="icon-container">
        <CiChat2 className="icons" />
        <h6>4.7k</h6>
      </div>
    </div>
  );
}
