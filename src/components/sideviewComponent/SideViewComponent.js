import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./styles.css";

export default function SideViewComponent() {
  return (
    <div className="sideview-container-flex">
      <div className="subreddit-title-container">
        <h3 className="subreddit-title">Subreddits</h3>
      </div>
      <div className="profile-image-container">
        <Card.Img
          className="subreddit-profile-image"
          variant="top"
          src="https://placehold.jp/100x100.png"
        />
        <Card.Img
          className="subreddit-profile-image"
          variant="top"
          src="https://placehold.jp/100x100.png"
        />
        <Card.Img
          className="subreddit-profile-image"
          variant="top"
          src="https://placehold.jp/100x100.png"
        />
        <Card.Img
          className="subreddit-profile-image"
          variant="top"
          src="https://placehold.jp/100x100.png"
        />
      </div>
    </div>
  );
}
