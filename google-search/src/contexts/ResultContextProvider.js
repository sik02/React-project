import React, { createContext, useContext, useState } from "react";



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
            },
            // data: '{"query":"abc","gl":"US","hl":"en_US","device":"desktop","duration":"","autocorrect":0,"page":1,"uule":"abc","pages":1}'
        });

        const data2 = await response.json();
        console.log(data2);
        // setResults(data);
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);