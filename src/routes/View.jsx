import React, { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from 'reactstrap';
import '../App.css';

const View = ({ refreshToken, setRefreshToken, tokenExchanged, setTokenExchanged }) => {
  const SERVER_URL = import.meta.env.NODE_ENV === 'production' ? import.meta.env.VITE_PRODUCTION_SERVER_URL : import.meta.env.VITE_LOCAL_SERVER_URL;

  const navigate = useNavigate();
  const [urlParams] = useSearchParams();
  const code = urlParams.get("code");
  const tokenExchangeAttempted = useRef(false);
  
  useEffect(() => {
    if (code === null) {
      navigate("/");
    }
  }, [code, navigate]);

  const handleTokenExchange = async () => {
    if (code && !tokenExchanged && !refreshToken && !tokenExchangeAttempted.current) {
      tokenExchangeAttempted.current = true;
      try {
        // const response = await axios.get(`${SERVER_URL}/auth/strava?code=${code}`);

        localStorage.setItem("strava_token", code);
        setRefreshToken(code);
        setTokenExchanged(true);

        // Clear URL parameters after successful token exchange
        navigate("/view", { replace: true });
      } catch (error) {
        console.error("Error during token exchange:", error);
      }
    }
  };

  useEffect(() => {
    if (code && !tokenExchanged && !refreshToken) {
      handleTokenExchange();
    }
  }, [code, tokenExchanged, refreshToken]);

  useEffect(() => {
    if (tokenExchanged && refreshToken) {
      navigate("/view", { replace: true });
    }
  }, [tokenExchanged, refreshToken, navigate]);

  const clearToken = () => {
    localStorage.removeItem("strava_token");
    setRefreshToken(null);
    navigate("/");
  };

  return (
    <div className="View">
      <p>You're set up, you don't need to do anything else. Log an activity and see the title update to a random silly emoji!</p>
      <div>
        <a href="https://www.strava.com" target="_blank" rel="noopener noreferrer">
          <Button color="primary">Go to Strava</Button>
        </a>
        <Button color="secondary" onClick={clearToken} style={{ marginLeft: '10px' }}>Logout</Button>
      </div>
    </div>
  );
};

export default View;