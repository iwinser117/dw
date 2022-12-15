import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import React from 'react'
import Nav from '../containers/Nav';
import Card from '../containers/Card';
import Footer from '../containers/Footer';
import BtnArriba from '../components/BtnArriba';
const Home = () => {
    return (
        <>
        <Nav />
        <Card />
        <BtnArriba/>
        <Footer/>
        </>
    );
}

export default Home;