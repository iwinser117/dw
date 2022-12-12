import React from "react";
import { BrowserRouter, Switch, Route }  from "react-dom";
import Button from "../components/Button";
import TargetPersonaje from "../components/TargetPersonaje";
import Card from "../containers/Card";
import Nav from "../containers/Nav";

const App = () => {
  return (
    <>
      <Nav/>
      <h2>Bienvenidos a este consumo de api</h2>
      <Button />
      <Card/>
    </>
  );
};

export default App;
