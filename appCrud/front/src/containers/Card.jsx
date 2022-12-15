import React, { useState, useEffect } from "react";
import useGetCharacter from "../hooks/useGetDatos";
import TargetPersonaje from "../components/TargetPersonaje";
import BtnArriba from "../components/BtnArriba";


const Card = () => {
 
  
  return (
    <>
    <React.StrictMode>
    <section className="container row justify-content-around d-flex sect-per">
      <h1 className="title-pers">Personajes</h1>
      {/* {personaje.map((character) => (
        <TargetPersonaje key={character.id} character={character} />
      ))} */}
      
      </section>
      </React.StrictMode>
    </>
  );
};

export default Card;


