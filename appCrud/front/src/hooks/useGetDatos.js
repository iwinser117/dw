import { useEffect, useState } from "react";
import axios from "axios";

const useGetDatos = (API) => {
  const [datoUn, setDatoUn] = useState([]);
  const [pagina, setPagina] = useState();

  useEffect(() => {
    const loadData = async () => {
      const response = await axios(API);
      setDatoUn(response.data.results);
      setPagina(response.data.info);
    };
    loadData();
  }, []);
  return pagina, datoUn;
};

export default useGetDatos;
