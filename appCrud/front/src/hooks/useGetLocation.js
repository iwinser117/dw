import { useEffect, useState } from "react";
import axios from "axios";


const useGetLocation  = (APILOCAL) => {
    const [location, setLocation] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadLocation = async ()=> {
            const response = await axios.get(APILOCAL);
            setLocation(response.data.results);
            setIsLoading(false);
        };
        loadLocation();
},[])

return location;
}



export default useGetLocation;