import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Authentication = ({refreshToken, setRefreshToken}) => {
  const navigate = useNavigate();

  const handleAuth = () => {
    const clientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_STRAVA_REDIRECT_URI;
    const authUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}/&scope=read_all,activity:write,activity:read_all&state=someRandomState`;

    window.location.href = authUrl;
  };

  return (
    <div>
      <h1>Strava Authorization</h1>
      <button onClick={handleAuth}>Connect to Strava</button>
    </div>
  );
}

export default Authentication;