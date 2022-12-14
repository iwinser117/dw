import React, { useState } from "react";
import ReactDOM from "react-dom";

const TargetPersonaje = ({ character }) => {
  /* const { id, status, name, image } = character; */
  return (
    <div className="modal-dialog text-center border border-1 rounded-circle trg-person">
      <p>
        {character.name}
        <br />
        {character.origin.name} <br />
        {character.species}
      </p>

      <img src={character.image} className="rounded-circle img-trg-person" alt="" />
    </div>
  );
};

export default TargetPersonaje;
