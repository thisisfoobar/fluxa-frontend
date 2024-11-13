import React from 'react';
import { Button } from 'reactstrap';
import '../App.css';

const Authentication = () => {
  const handleAuth = () => {
    const clientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_STRAVA_REDIRECT_URI;
    const authUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}/&scope=read_all,activity:write,activity:read_all&state=someRandomState`;

    window.location.href = authUrl;
  };

  return (
    <div className="authentication-container">
      <div className="top-content">
        <h1>Welcome To Silly Emoji Titles</h1>
        <p>With this fun little app, you no longer will have boring titles. When you upload an activity it will change to a random Emoji!</p>
      </div>
      <div className="middle-content">
        <h2>Strava Authorization</h2>
        <Button color="primary" onClick={handleAuth}>Connect to Strava</Button>
      </div>
    </div>
  );
}

export default Authentication;