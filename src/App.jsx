import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from 'reactstrap';
import AppRoutes from "./routes/AppRoutes.jsx";
import NavBar from "./routes/NavBar.jsx";
//import './App.css';

const App = () => {

  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('strava_token'));
  const [tokenExchanged, setTokenExchanged] = useState(false);
  const logout = () => {
    localStorage.removeItem("strava_token");
    setRefreshToken(null);
  };

  const handleAuth = () => {
    const clientId = import.meta.env.VITE_STRAVA_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_STRAVA_REDIRECT_URI;
    const authUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=read_all,activity:write,activity:read_all&state=someRandomState`;

    window.location.href = authUrl;
  };

  return (
    <div data-testid="app-root">
      <Router>
        <NavBar refreshToken={refreshToken} logout={logout} handleAuth={handleAuth} />
        <Container fluid className='App'>
          <AppRoutes
            handleAuth={handleAuth}
            refreshToken={refreshToken} 
            setRefreshToken={setRefreshToken} 
            tokenExchanged={tokenExchanged} 
            setTokenExchanged={setTokenExchanged} 
            logout={logout}
          />
        </Container>
      </Router>
    </div>
  );
};

export default App;
