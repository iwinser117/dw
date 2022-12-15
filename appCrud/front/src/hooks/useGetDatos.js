import { useEffect, useState } from "react";
import axios from "axios";


const useGetDatos = (API) => {
  const [datoUn, setDatoUn] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios(API);
      setDatoUn(response.data.results);
      /* setPagina(response.data.info) */
    };
    loadData();
  }, []);
  return  datoUn ;
};

export default useGetDatos;
