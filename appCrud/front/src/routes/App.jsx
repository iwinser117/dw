import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* import {BrowserRouter as  BrowserRouter,Route, Link, Routes} from 'react-router-dom';
 */
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Personajes from "../pages/Personajes";
import Lcal from "../pages/Lcal";
import NotFound from "../pages/NotFound";
const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/personajes" element={<Personajes />} />
        <Route exact path="/locaciones" element={<Lcal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
