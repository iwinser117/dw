import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Card from "../containers/Card";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Personajes from "../pages/Personajes";
import Lcal from "../pages/Lcal";
import NotFound from "../pages/NotFound";
const App = () => {
  return (
    <HashRouter>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/personajes"  element={<Personajes />} />
        <Route path="/locaciones" element={<Lcal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
