import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import React from 'react'
import Nav from '../containers/Nav';
import Header from '../containers/Header';
import Card from '../containers/Card';
import Footer from '../containers/Footer';
const Home = () => {
    return (
        <>
        <Nav />
        <Header />
        <Card />
        <Footer/>
        </>
    );
}

export default Home;