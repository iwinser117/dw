import { useEffect, useState } from "react";
import axios from "axios";

const useGetInfo = (API) => {
  const [pagina, setPagina] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios(API);
      setPagina(response.data.info);
      setIsLoading(false);
    };
    loadData();
  }, []);
  return pagina;
};

export default useGetInfo;
