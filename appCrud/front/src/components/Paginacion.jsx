import React, { useEffect, useState } from "react";
import axios from "axios";
import useGetDatos from "../hooks/useGetDatos";

const API = "https://rickandmortyapi.com/api/character";

const Paginacion = () => {
  const [pagina , setPagina] = useState();
  useEffect(() => {
    const loadData = async () => {
      const response = await axios(API);
      /* setDatoUn(response.data.results); */
      setPagina(response.data.info)
    };
    loadData();
    
  }, []);
  

console.log(pagina);
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" aria-disabled="true">
              Prev
            </a>
          </li>
          
          <li className="page-item">
            <a className="page-link" >
              {}+111
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" >
              next
            </a>
          </li>
         
        </ul>
      </nav>
    </div>
  );
};

export default Paginacion;
