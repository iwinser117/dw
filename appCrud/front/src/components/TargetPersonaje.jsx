import React, { useState } from "react";
import ReactDOM from "react-dom";

const TargetPersonaje = ({ character }) => {
  /* const { id, status, name, image } = character; */
  return (
    <div className="modal-dialog text-center border border-1 rounded-circle">
      <p>
        {character.name}
        <br />
        {character.origin.name} <br />
        {character.location.name}
      </p>

      <img src={character.image} className="rounded-circle" alt="" />
    </div>
  );
};

export default TargetPersonaje;
