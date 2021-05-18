import { useEffect, useState } from 'react';
import axios from 'axios'


export const useFetchData = () => {
    const [state, setState] = useState({ error: null, data: null, loading: true });
    const [url, setUrl] = useState('');

    useEffect(() => {
        axios.get(url)
            .then((data) => {
                console.log(data)
                setState({ error: null, data:data, loading: false });
            })
            .catch((error) => {
                console.log("ERROR==>", error);
                setState({ error, data: null, loading: false });
                alert("cors issue");
            });
    }, [url])
    return function(val){
        setUrl(val)
        return state
    }
}