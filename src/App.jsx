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

  return (
    <div data-testid="app-root">
      <Router>
        <NavBar refreshToken={refreshToken} logout={logout} />
        <Container fluid className='App'>
          <AppRoutes
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
