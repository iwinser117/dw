
import React from 'react'
import { useState, useEffect } from "react";
import TargetLocation from "../components/TargetLocation";




const Location = () => {
  
  return (
    <>
    
    <section className="container-fluid row justify-content-around d-flex sect-per">
      <h1>Ubicaciones</h1>
      {/* {location.map((dat) => (
        <TargetLocation key={dat.id} dat={dat} />
      ))} */}
      </section>
      {/* {location.map(dat => console.log(dat.id))} */}
    </>
  );
};

export default Location;
