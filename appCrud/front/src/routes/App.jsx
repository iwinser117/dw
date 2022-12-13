import React from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Card from "../containers/Card";
import Nav from "../containers/Nav";
import Header from "../containers/Header";
import BtnArriba from "../components/BtnArriba";
import Paginacion from "../components/Paginacion";
import Footer from "../containers/Footer";
import Location from "../containers/Location";
import TargetLocation from "../components/TargetLocation";
const App = () => {
  return (
    <>
       
      <Nav />
      <Location/>
      <Header />
      
      
      <Card />
      
      <BtnArriba />
      <Footer/>
      
    </>
  );
};

export default App;
