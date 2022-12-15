import React, { useEffect, useState } from "react";
import axios from "axios";
import useGetDatos from "../hooks/useGetDatos";

const API = "https://rickandmortyapi.com/api/character";

const Paginacion = () => {
  const [pagina , setPagina] = useState({});
  const {next, prev, pages } = pagina
  useEffect(() => {
    const loadData = async () => {
      const response = await axios(API);
      /* setDatoUn(response.data.results); */
      setPagina(response.data.info)
    };
    loadData();

  }, []);
  
  return (
    
    <div>
      <nav aria-label="Page navigation example">
{/*         {pagina.map((info) => {})} */}
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" aria-disabled="true">
              Prev
            </a>
          </li>
          
          <li className="page-item">
            <a className="page-link" >
              {next}+111
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
