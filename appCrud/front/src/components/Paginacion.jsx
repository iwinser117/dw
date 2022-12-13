import React , {useState, useEffect} from "react";
import useGetInfo from "../hooks/useGetInfo";
const API = "https://rickandmortyapi.com/api/character";

const Paginacion = () => {
  const pagina = useGetInfo(API)
    /* const loadData = async () => {
      const response = await axios(API);
      const pagina = response.data.info;
      return  pagina;
    };
    loadData(); */
  return (
    <>
      
        <div >
          <span>{pagina.next}</span>
          <span>{pagina.count}</span>
        </div>
      
    
    </>
  );
};

export default Paginacion;
