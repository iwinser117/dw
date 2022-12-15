import React, { useState } from "react";
import ReactDOM from 'react-dom'
const ListEpisodios = ({ep}) => {
  return (
    
        <li className="dropdown-item ">{ep.name}</li>
    
  );
};

export default ListEpisodios;
