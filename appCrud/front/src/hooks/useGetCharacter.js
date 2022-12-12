import { useEffect, useState } from "react";
import axios from "axios";

const useGetCharacter = (API) => {
  const [personaje, setPersonaje] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const loadData = async () => {
        const response = await axios(API);
        setPersonaje(response.data.results);
        
        setIsLoading(false);
      };
      loadData();   
},[])
    
  return personaje;
};

export default useGetCharacter;
