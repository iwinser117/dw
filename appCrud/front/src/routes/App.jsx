import React from "react";
import { Switch, Route } from "react-router-dom";
import Card from "../containers/Card";
import Nav from "../containers/Nav";
import Header from "../containers/Header";
import BtnArriba from "../components/BtnArriba";
import Paginacion from "../components/Paginacion";
import Footer from "../containers/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Card />
      <BtnArriba />
      <Footer/>
      <Paginacion/>
    </>
  );
};

export default App;
