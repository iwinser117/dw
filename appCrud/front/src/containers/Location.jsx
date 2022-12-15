import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import TargetLocation from "../components/TargetLocation";
import useGetDatos from "../hooks/useGetDatos";

const API = "https://rickandmortyapi.com/api/location";
const Location = () => {

  const datoUn = useGetDatos(API)
  
  /* const [location, setLocation] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await axios(API);
      setLocation(response.data.results);
    };
    loadData();
  }); */
  return (
    <>
      <section className="container-fluid row justify-content-around d-flex sect-per">
        <h1>Ubicaciones</h1>
        {datoUn.map((dat) => (
          <TargetLocation key={dat.id} dat={dat} />
        ))}
      </section>
    </>
  );
};

export default Location;
