import { useEffect, useState } from "react"

export default function useFecth(url) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fecthData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await response.json()
                setData(result);

            } catch (error) {
                setError(error)

            } finally {
                setLoading(false)

            }
        };
        fecthData();
    }, [url])

    return { data, loading, error };

}
