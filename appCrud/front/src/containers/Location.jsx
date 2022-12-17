import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import TargetLocation from "../components/TargetLocation";
import Busqueda from "../components/Busqueda";


const Location = ({location}) => {

  return (
    <>
      <section className="container-fluid row justify-content-around d-flex sect-per">
        <h1 className="title-ubicacion">Ubicaciones</h1>
        {location ? <Busqueda/>  : null }
        {/* <TargetLocation/> */}
        {location.map((dat) => (
          <TargetLocation key={dat.id} dat={dat} />
        ))}
      </section>
    </>
  );
};

export default Location;
