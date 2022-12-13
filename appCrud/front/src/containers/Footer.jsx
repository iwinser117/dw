import React from 'react';
import Paginacion from '../components/Paginacion'
import useGetInfo from "../hooks/useGetInfo";
const API = "https://rickandmortyapi.com/api/character";

const Footer = () => {
    const pagina = useGetInfo(API)
    return (
        
        <>
        <h2>{pagina.pages}</h2>
        {/* <div>
        {pagina.map((item, index) =>(
            <Paginacion key={index} item={item} />
        ))}
        </div> */}
            
        </>
    );
}

export default Footer;