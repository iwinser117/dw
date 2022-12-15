import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../containers/Card";

const useGetDatos = (API) => {
  const [personaje, setPersonaje] = useState([]);
  const [pagina, setPagina] = useState([]);
  const [capitulo, setCapitulo] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios(API);
      setPersonaje(response.data.results);
      setPagina(response.data.info);
      setCapitulo(response.data.results);
      setLocation(response.data.results);
      
    };
    loadData();
  }, []);
  return pagina ,personaje, capitulo, location;
  
};

export default useGetDatos;
