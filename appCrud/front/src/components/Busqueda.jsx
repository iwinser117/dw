import React from "react";

const Busqueda = ({ search, searchInput, handleSearch }) => {
  return (
    <form className="d-flex justify-content-center" role="search">
      <input
        className="form-control  w-50 "
        type="search"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
        placeholder="¿Buscas a alguien?"
        aria-label="Search"
      />
    </form>
  );
};

export default Busqueda;
