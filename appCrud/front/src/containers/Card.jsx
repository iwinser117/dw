import React, { useState, useEffect } from "react";
import useGetDatos from "../hooks/useGetDatos";

import TargetPersonaje from "../components/TargetPersonaje";

const API = "https://rickandmortyapi.com/api/character";

const Card = () => {
  const personaje = useGetDatos(API);
  /* const [personaje, setPersonaje] = useState([]);
  const [pagina, setPagina] = useState([]);
  useEffect (()=> {
    const loadData = async () => {
      const response = await axios(API)
      setPersonaje(response.data.results);
      setPagina(response.data.info)
    };
    loadData();
  }) */

  return (
    <React.StrictMode>
      <section className="container row justify-content-around d-flex sect-per">
        <h1 className="title-pers">Personajes</h1>
        {personaje.map((character, index) => (
          <TargetPersonaje key={index} character={character} />
        ))}
        {/* {personaje.map((character) => (
        <li key={character.id} character={character}  >{character.name}</li>
      ))} */}
      </section>
    </React.StrictMode>
  );
};

export default Card;
