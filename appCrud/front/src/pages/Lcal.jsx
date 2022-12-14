import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import React from 'react'
import Location from '../containers/Location'
import Nav from "../containers/Nav";
import BtnArriba from "../components/BtnArriba"

const Lcal = () => {
    return (
        <>
        <Nav/>
        <Location/>
        <BtnArriba/>
        </>
    );
}

export default Lcal;