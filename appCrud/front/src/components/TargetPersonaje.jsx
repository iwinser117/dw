import React,{useState} from 'react';
import ReactDOM from 'react-dom'

const TargetPersonaje = ( {character} ) => {
    /* const { id, status, name, image } = character; */
    return (
        <div className='modal-dialog text-center border border-1 rounded-circle'>
            <p>Nombre: {character.name}<br /> 
            Origen: {character.origin.name} <br />
            Location: {character.location.name}</p>
        
            <img src={character.image} className="rounded-circle"  alt="" />
        </div>

        
    );
}

export default TargetPersonaje;