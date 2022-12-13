import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import TargetLocation from "../components/TargetLocation";
import useGetLocation from "../hooks/useGetLocation";

const APILOCAL = "https://rickandmortyapi.com/api/location";

const Location = () => {
  const location = useGetLocation(APILOCAL);
  return (
    <>
    <section >
      <h1>Locaciones</h1>
      {location.map((dat) => (
        <TargetLocation key={dat.id} dat={dat} />
      ))}
      </section>
      {/* {location.map(dat => console.log(dat.id))} */}
    </>
  );
};

export default Location;
