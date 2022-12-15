import React, { useEffect } from "react";
import Paginacion from "../components/Paginacion";
import useGetDatos from "../hooks/useGetDatos";

const API = "https://rickandmortyapi.com/api/character";
const Footer = () => {
  const pagina = useGetDatos(API);
  return (
    <>
      {pagina.map((index, value) => {
        <Paginacion key={index} value={value} />;
      })}
    </>
  );
};

export default Footer;
