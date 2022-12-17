import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Nav from "../containers/Nav";
import Card from "../containers/Card";
import Footer from "../containers/Footer";
import BtnArriba from "../components/BtnArriba";
import Paginacion from "../components/Paginacion";
const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [page, setPage] = useState({});

  const APIINICIAL = "https://rickandmortyapi.com/api/character";
  const fetchPersonajes = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
        setPage(data.info);
      });
  };
  /* onPrev, OnNext */
  const onPrev = () => {
    fetchPersonajes(page.prev);
  };
  const OnNext = () => {
    fetchPersonajes(page.next);
  };
  useEffect(() => {
    fetchPersonajes(APIINICIAL);
  }, []);
  return (
    <>
      <Nav />
      <Card personajes={personajes} />
      {/* {personajes.map((character, index) => (
          <Card key={index} character={character} />
        ))} */}
      <Paginacion
        prev={page.prev}
        next={page.next}
        /* pages={page.pages} */
        onPrev={onPrev}
        OnNext={OnNext}
      />
      <BtnArriba />
    </>
  );
};

export default Personajes;
