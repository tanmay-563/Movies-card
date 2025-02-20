import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from "./assets/search.svg"
import MovieCard from "./MovieCard";
const Api_Url = 'http://www.omdbapi.com/?apikey=d15f3ce2';

const App = () => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchmovies("Batman");
  }, []);
  const searchmovies = async (title) => {
    const response = await fetch(`${Api_Url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchmovies('spiderman');
  }, []);

  return (
    <div className="app">
      <h1>Movies By Tanmayyyyyy</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchmovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
