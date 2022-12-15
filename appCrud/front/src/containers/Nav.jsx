import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useGetDatos from "../hooks/useGetDatos";
import ListEpisodios from "../components/ListEpisodios";

const API = "https://rickandmortyapi.com/api/episode";

const Nav = () => {

  const capitulo = useGetDatos(API)
  /* const [capitulo, setCapitulo] = useState([]);
  

  useEffect (()=> {
    const loadData = async () => {
      const response = await axios(API)
      setCapitulo(response.data.results);
      
    };
    loadData();
  }) */

  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-gradient" id="ancla">
  <div className="container-fluid " >
    {/* <img src={} className="navbar-brand text-white" alt="" /> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <NavLink to={'/'} className="nav-link active text-white" aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/personajes"} className="nav-link text-white">Personajes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/locaciones"} className="nav-link text-white">Ubicaciones</NavLink>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Episodios
        </a>
        <ul className="dropdown-menu ">
          {/* <ListEpisodios/> */}
        {capitulo.map(ep => (
          
        <ListEpisodios  key={ep.id} ep={ep} />
        
      ))}
      
          {/* <li><a className="dropdown-item" href="#">jioo</a></li> */}
          
        </ul>
      </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
};

export default Nav;
