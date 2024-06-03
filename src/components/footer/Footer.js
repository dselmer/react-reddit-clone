import React from "react";
import styles from "../footer/styles.css";
import { CiChat2 } from "react-icons/ci";

export default function Footer() {
  return (
    <div className="footer-container">
      <h6>testing </h6>
      <h6>testing </h6>
      <div className="icon-container">
        <CiChat2 className="icons" />
        <h6>4.7k</h6>
      </div>
    </div>
  );
}
