import React, { useState } from "react";
import ReactDOM from "react-dom";
import StatusPerLive from "../components/StatusPerLive";
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
      {character.status === "Alive" ? (
        <StatusPerLive character={character} />
      ) : (
        <StatusPerLive
          character={character}
          style={{
            border: "solid 1px blue"
          }}
        />
      )}
    </div>
  );
};

export default TargetPersonaje;
