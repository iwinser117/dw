import { useEffect, useState } from "react";
import axios from "axios";

const API = 'https://rickandmortyapi.com/api'
const useGetCharacter = (API) => {
  const [personaje, setPersonaje] = useState([]);
  const [pagina, setPagina] = useState([]);
  const [capitulo, setCapitulo] = useState([]);
  const [location, setLocation] = useState([]);
  

  useEffect(() => {
    const loadData = async () => {
      const response = await axios(API);
      setPersonaje(response.data.character.results);
      setPagina(response.data.character.info)
      setCapitulo(response.data.episode.results)
      setLocation(response.data.location.results)
      setIsLoading(false);
    };
    loadData();
  }, []);
  return {
    personaje,
    pagina,
    capitulo,
    location
  }
  
};

export default useGetCharacter;
