import React, { useState, useEffect } from "react";
import useGetInfo from "../hooks/useGetInfo";
import ReactPaginate from 'react-paginate';

//usando otra pagina aun no esta pero esta la ligica
const API = "https://rickandmortyapi.com/api/character/?page=19";

const Paginacion = () => {
  const pagina = useGetInfo(API);
  /* const loadData = async () => {
      const response = await axios(API);
      const pagina = response.data.info;
      return  pagina;
    };
    loadData(); */
  return (
    <>
      <nav aria-label="Page navigation example position-relative">
        <ul className="pagination justify-content-center position-fixed  top-60 bottom-0 start-50  position-fixed  bottom-0  start-5 end-0 translate-middle-x">
          <li className="page-item">
            <a className="page-link" href={pagina.prev}>
              Prev
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              {pagina.pages}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href={pagina.next}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Paginacion;
