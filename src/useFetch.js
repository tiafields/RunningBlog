import { useState, useEffect} from "react";

/* creating custom hook */
const useFetch = (url) => {

    /* updating state properties  */
    const [data, setData] = useState(null);
    const [isPending, setIsPending] =useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok) {
                        throw Error('could  not fetch data for that resource');
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);
    }, [url]);

    return {data, isPending, error}
}
export default useFetch;