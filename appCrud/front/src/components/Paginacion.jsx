import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

//usando otra pagina aun no esta pero esta la ligica


const Paginacion = ({personaje}) => {
  
    <>
    {setTimeout((personaje) => {
      console.log(personaje);
    },2000)}
      <nav aria-label="Page navigation example position-relative">
        <ul className="pagination justify-content-center position-fixed  top-60 bottom-0 start-50  position-fixed  bottom-0  start-5 end-0 translate-middle-x">
          <li className="page-item">
            <a className="page-link">
              Prev
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  
};

export default Paginacion;
