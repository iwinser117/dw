import React from 'react';

const Busqueda = () => {
    return (
        <form className="d-flex justify-content-center" role="search">
        <input className="form-control  w-50 " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    );
}

export default Busqueda;