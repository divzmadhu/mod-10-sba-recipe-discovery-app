import { useState, useEffect } from "react";

export default function useFetch(url) {

    // Store API response
    const [data, setData] = useState(null);

    // Track loading status
    const [loading, setLoading] = useState(true);

    // Store error message
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) {
            setData(null);
            setLoading(false);
            setError(null);
            return;
        }

        async function fetchData() {

            setLoading(true);
            setError(null);

            try {
                // Send API request
                const response = await fetch(url);

                // Check if request was successful
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                // Convert response into JSON
                const result = await response.json();

                // Store received data
                setData(result);

            } catch (err) {

                // Handle errors
                setError(err.message);

            } finally {

                // Stop loading
                setLoading(false);
            }
        }

        fetchData();

    }, [url]);

    // Return values to the component
    return { data, loading, error };
}