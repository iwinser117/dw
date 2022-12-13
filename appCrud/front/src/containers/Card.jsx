import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useGetCharacter from "../hooks/useGetCharacter";
import TargetPersonaje from "../components/TargetPersonaje";


const API = "https://rickandmortyapi.com/api/character/";

const Card = () => {
  const personaje = useGetCharacter(API);
  
  return (
    <>
    <section className="container-fluid row justify-content-around d-flex">
      <h1>Personajes</h1>
      {personaje.map((character) => (
        <TargetPersonaje key={character.id} character={character} />
      ))}
      </section>
    </>
  );
};

export default Card;


