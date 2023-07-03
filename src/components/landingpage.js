import React from 'react';
import { Link } from 'react-router-dom';
import './landingpage.css'; 

export default function LandingPage() {
  return (
    <div className="landing-container">
      <div className="image-container">
        <img src={'https://socialnetworking.solutions/wp-content/themes/handel-child/images/instaclone/banner-left.png'} alt="Landing" />
      </div>
      <div className="content-container">
        <h2>Welcome to InstaClone</h2>
        <Link to="/post">
          <button>Enter</button>
        </Link>
      </div>
    </div>
  );
}
