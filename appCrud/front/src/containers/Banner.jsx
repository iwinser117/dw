import React from 'react'
import '../styles/index.css'

const Banner = () => {
    return (
        <div className="container-fluid  justify-content-around d-flex banner">
            <h2>Rick and Morty</h2>

            <p>
                bienvenidos a mi Web donde se consume la api de Rick and Morty
                ,<br/> Gracias por su visita. 
            </p>
        </div>
    );
}

export default Banner;