import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Loading from './Loading';
import { useResultContext } from '../contexts/ResultContextProvider';

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults('/search?q=JavaScript Mastery&num=40')
    // https://www.google.com/news/search?q=abc
    // getResults('')
  }, []);

  if(isLoading){
    return <Loading />
  }

  switch(location.pathname){
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {/* {results?.results?.map(({ link, title }) => (
            
          ))} */}
        </div>
      )
    case '/images':
      return 'SEARCH';
    default:
      return 'ERROR!';
  }
}

export default Results