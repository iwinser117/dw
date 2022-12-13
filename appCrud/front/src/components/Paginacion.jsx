import React , {useState, useEffect} from "react";
import axios from "axios";
const API = "https://rickandmortyapi.com/api/character/";
const Paginacion = () => {
  const {next, prev, pages } = pagina
    /* const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1); */
  
    const loadData = async () => {
      const response = await axios(API);
      const pagina = response.data.info;
      return  pagina;
    };
    loadData();
  return (
    <>
    
    {pagina.map(
      (item, index) => (
        <div key={index}>
          <span>{item.next}</span>
          <span>{item.count}</span>
        </div>
      )
    )}
    
    </>
  );
};

export default Paginacion;
