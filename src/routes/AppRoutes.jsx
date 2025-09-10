import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import View from "./View";

const AppRoutes = ({ refreshToken, setRefreshToken, tokenExchanged, setTokenExchanged, logout }) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HeroSection refreshToken={refreshToken} setRefreshToken={setRefreshToken} logout={logout} />} />
        <Route path='/view' element={<View refreshToken={refreshToken} setRefreshToken={setRefreshToken} tokenExchanged={tokenExchanged} setTokenExchanged={setTokenExchanged} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

export default AppRoutes;