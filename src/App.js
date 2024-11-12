import NavBar from "./routes/NavBar";
import Authentication from "./routes/Authentication";
import View from "./routes/View";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('strava_token'));
  const [tokenExchanged, setTokenExchanged] = useState(false);

  return (
    <div className='App'>
      <BrowserRouter>
        <AppRoutes refreshToken={refreshToken} setRefreshToken={setRefreshToken} tokenExchanged={tokenExchanged} setTokenExchanged={setTokenExchanged} />
      </BrowserRouter>
    </div>
  );
};

const AppRoutes = ({refreshToken, setRefreshToken, tokenExchanged, setTokenExchanged}) => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Authentication refreshToken={refreshToken} setRefreshToken={setRefreshToken} />} />
        <Route path='/view' element={<View refreshToken={refreshToken} setRefreshToken={setRefreshToken} tokenExchanged={tokenExchanged} setTokenExchanged={setTokenExchanged} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

export default App;
