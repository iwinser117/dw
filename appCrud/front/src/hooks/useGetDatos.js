import { useEffect, useState } from "react";
import axios from "axios";
import Paginacion from "../components/Paginacion";
const useGetDatos = (API) => {
  const [datoUn, setDatoUn] = useState([]);
  const [pagina, setPagina] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const response = await axios(API);
      setDatoUn(response.data.results);
      setPagina(response.data.info);
      /* setPagina(response.data.info) */
    };
    loadData();
  }, [API]);
  return pagina, datoUn; 
};

export default useGetDatos;
