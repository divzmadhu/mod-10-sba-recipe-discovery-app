import { useState, useEffect } from "react";

// Custom hook to store and retrieve data from browser Local Storage.
export default function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);

        return storedValue !== null
            ? JSON.parse(storedValue)
            : initialValue;
    });

    // Save the updated value in Local Storage whenever it changes.
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}