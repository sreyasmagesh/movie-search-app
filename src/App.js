
import './App.css';
import React,{useEffect,useState} from 'react';
import MovieCard from './card';
import searchIcon from './search.svg'


const API_URL='http://www.omdbapi.com?apikey=12d06b1b';

const App = () => {
  const[movies,setMovies]=useState([]);
  const[searchTerm,setSearchTerm]=useState('');


  const Home = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
    console.log(data)
  }
   
  const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
    console.log(data)
  }
  const trendingMovies = async(year) =>{
    const response = await fetch(`${API_URL}&s=${year}`);
    const data = await response.json();
    setMovies(data.Search)
    console.log(data)
  }

  const Movies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
    console.log(data)
  }
 
  const Series = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
    console.log(data)
  }
  const Genre = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
    console.log(data)
  }

  
  useEffect(()=>{
    Home('movie')
  },[])

  return (
    <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
          <input 
            placeholder="Search for movies" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
          <img 
            src={searchIcon} 
            alt=""
            onClick={()=>searchMovies(searchTerm)}/>
        </div>
        <div>
        <button onClick={()=>Home("movie")}>Home</button>
          <button onClick={()=>trendingMovies("2022")}>Trending</button>
          <button onClick={()=>Movies("movies")}>Movies</button>
          <button onClick={()=>Series("series")}>Series</button>
            <select onChange={e=>Genre(e.target.value)}>
              <option>Comedy</option>
              <option>Action</option>
              <option>Horror</option>
              <option>Thriller</option>
            </select>
        </div>
        
        {
          movies?.length > 0
            ? (
              <div className='container'>
                {movies.map((movie) => (
                  <MovieCard movie={movie}/>
                ))}
              </div>
            ):(
              <div className='empty'>
                <h1>no movies found</h1>
              </div>
            )
        }
    </div>
  );
}

export default App;
