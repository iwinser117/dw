import React, { useState, useEffect } from "react";
import Busqueda from "../components/Busqueda";
import TargetPersonaje from "../components/TargetPersonaje";
import Paginacion from "../components/Paginacion";


const Card = ({personajes = []}) => {

  return (
   
      <section className="container row justify-content-around d-flex sect-per">
        <h1 className="title-pers">Personajes</h1>
        {!personajes ? null  : <Busqueda/>}
        {/* <TargetPersonaje/> */}
        
        {personajes.map((character, index) => (
          <TargetPersonaje key={index} character={character} />
        ))}
      </section>
   
  );
};

export default Card;
