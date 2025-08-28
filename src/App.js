import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from 'reactstrap';
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./routes/NavBar";
import { Navigation } from "./routes/Navigation";
import './App.css';

const App = () => {
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('strava_token'));
  const [tokenExchanged, setTokenExchanged] = useState(false);

  return (
    <div>
      <Router>
        <Navigation />
        <NavBar />
        <Container fluid className='App'>
          <AppRoutes
            refreshToken={refreshToken} 
            setRefreshToken={setRefreshToken} 
            tokenExchanged={tokenExchanged} 
            setTokenExchanged={setTokenExchanged} 
          />
        </Container>
      </Router>
    </div>
  );
};

export default App;
