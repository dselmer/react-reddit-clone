import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./styles.css";

export default function SideViewComponent() {
  return (
    <div className="sideview-container-flex">
      <div className="subreddit-title-container">
        <h6 className="subreddit-title">Subreddits</h6>
      </div>
      <div className="profile-image-container">
        <div className="profile-details">
          <Card.Img
            className="subreddit-profile-image"
            variant="top"
            src="https://placehold.jp/100x100.png"
          />
          <span className="details">reddit profile name</span>
        </div>
        <div className="profile-details">
          <Card.Img
            className="subreddit-profile-image"
            variant="top"
            src="https://placehold.jp/100x100.png"
          />
          <span className="details">reddit profile name</span>
        </div>
        <div className="profile-details">
          <Card.Img
            className="subreddit-profile-image"
            variant="top"
            src="https://placehold.jp/100x100.png"
          />
          <span className="details">reddit profile name</span>
        </div>
        <div className="profile-details">
          <Card.Img
            className="subreddit-profile-image"
            variant="top"
            src="https://placehold.jp/100x100.png"
          />
          <span className="details">reddit profile name</span>
        </div>
        <div className="profile-details">
          <Card.Img
            className="subreddit-profile-image"
            variant="top"
            src="https://placehold.jp/100x100.png"
          />
          <span className="details">reddit profile name</span>
        </div>
        <div className="profile-details">
          <Card.Img
            className="subreddit-profile-image"
            variant="top"
            src="https://placehold.jp/100x100.png"
          />
          <span className="details">reddit profile name</span>
        </div>
      </div>
    </div>
  );
}
