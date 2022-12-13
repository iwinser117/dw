import React from 'react';
import Paginacion from '../components/Paginacion'
import useGetInfo from "../hooks/useGetInfo";
const API = "https://rickandmortyapi.com/api/character";

const Footer = () => {
    const pagina = useGetInfo(API)
    return (
        
        <>
        <div>
        {pagina.map((page) =>(
            <Paginacion character={page} />
        ))}
        </div>
            
        </>
    );
}

export default Footer;