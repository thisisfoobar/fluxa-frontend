import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useRef } from "react";

const View = ({ refreshToken, setRefreshToken, tokenExchanged, setTokenExchanged }) => {
  const navigate = useNavigate();
  const [urlParams] = useSearchParams();
  const code = urlParams.get("code");
  const tokenExchangeAttempted = useRef(false);

  //console.log("Component rendered");
  //console.log("Code:", code);

  const handleTokenExchange = async () => {
    //console.log("Token exchange", tokenExchanged);
    if (code && !tokenExchanged && !refreshToken && !tokenExchangeAttempted.current) {
      tokenExchangeAttempted.current = true;
      try {
        const response = await axios.get(`http://localhost:5000/auth/strava?code=${code}`);
        console.log("Authenticated:", response.data);
  
        localStorage.setItem("strava_token", response.data.access_token);
        setRefreshToken(response.data.access_token);
        setTokenExchanged(true);
      } catch (error) {
        console.error("Error during token exchange:", error);
      }
    }
  };

  useEffect(() => {
    console.log("useEffect triggered");
    if (code && !tokenExchanged && !refreshToken) {
      handleTokenExchange();
    }
  }, [code, tokenExchanged, refreshToken]);

  const clearToken = () => {
    localStorage.removeItem("strava_token");
    setRefreshToken(null);
    navigate("/");
  };

  return (
    <div>
      <h1>View</h1>
      <p>Refresh Token: {refreshToken}</p>
      <button onClick={clearToken}>Logout</button>
    </div>
  );
};

export default View;
