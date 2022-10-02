import React, { createContext, useContext, useState } from "React";

const ResultContext = createContext();
const baseUrl = 'https://google-search-5.p.rapidapi.com/google/organic-search';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '36dd2fe836mshb5f0d3d08bb744fp188682jsn0f9c72f43fb2',
                'X-RapidAPI-Host': 'google-search-5.p.rapidapi.com'
            }
        });

        const data = await response.json();
        setResults(data);
    }
}