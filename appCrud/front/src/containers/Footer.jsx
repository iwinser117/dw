import React from 'react';
import Paginacion from '../components/Paginacion'
import useGetInfo from "../hooks/useGetInfo";
const API = "https://rickandmortyapi.com/api/character";

const Footer = () => {
    const pagina = useGetInfo(API)
    return (
        
        <>
        <div className='text-center bg-primary d-block '>
            <p>hola este el es footer muy largo señores</p>
            <Paginacion/>
        </div>
        
        {/* <div>
        {pagina.map((item, index) =>(
            <Paginacion key={index} item={item} />
        ))}
        </div> */}
            
        </>
    );
}

export default Footer;