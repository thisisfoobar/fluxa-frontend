import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Authentication from "./Authentication";
import View from "./View";

const AppRoutes = ({ refreshToken, setRefreshToken, tokenExchanged, setTokenExchanged }) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Authentication refreshToken={refreshToken} setRefreshToken={setRefreshToken} />} />
        <Route path='/view' element={<View refreshToken={refreshToken} setRefreshToken={setRefreshToken} tokenExchanged={tokenExchanged} setTokenExchanged={setTokenExchanged} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

export default AppRoutes;