import { useEffect, useState } from "react";
import axios from "axios";

const useGetCapitulo = (APIEPISODE) => {
    const [capitulo, setCapitulo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadEpisode = async ()=> {
            const response = await axios.get(APIEPISODE);
            setCapitulo(response.data.results);
            setIsLoading(false);
        };
        loadEpisode();
},[]);
return capitulo;
}

export default useGetCapitulo;