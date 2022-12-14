import React from "react";
import { NavLink } from "react-router-dom";
/* import ok from '../assets/ok.ico' */
const Nav = () => {
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
          <NavLink to={"/personajes"} className="nav-link text-white">Pesonajes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/locaciones"} className="nav-link text-white">Ubicaciones</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Episodios
          </a>
          <ul className="dropdown-menu">
            {/* esto sera un componente que me liste los episodios */}
            <li><a className="dropdown-item" href="#">lista de episodios</a></li>
            
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
