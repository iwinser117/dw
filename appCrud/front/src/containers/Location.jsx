import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import TargetLocation from "../components/TargetLocation";


const API = "https://rickandmortyapi.com/api/location";
const Location = () => {

  return (
    <>
      <section className="container-fluid row justify-content-around d-flex sect-per">
        <h1>Ubicaciones</h1>
        <TargetLocation/>
        {/* {datoUn.map((dat) => (
          <TargetLocation key={dat.id} dat={dat} />
        ))} */}
      </section>
    </>
  );
};

export default Location;
