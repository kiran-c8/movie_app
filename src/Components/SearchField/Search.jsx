import React, { useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { API_KEY } from '../../Constants/constants'
import './Search.css'
import List from '../MovieList/List'
import Home from '../Home/Home'
const Search = () => {
    const [searchParam, setSearchParam] = useState('');
    const [movies, setMovies] = useState([]);
    const [click,setClick] = useState(false);


    const handleClick = () => {
        setClick(true);
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchParam}&api_key=${API_KEY}`).then((response) => {
            setMovies(response.data.results)
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
        
            <div className="search-field">
                <input type='text' placeholder='Search Movie' className='input' onChange={(e) => setSearchParam(e.target.value)} />
                <FontAwesomeIcon icon={faSearch} className='search-icon fa-lg' onClick={handleClick} />
            </div>
                
            {click===false ? <Home/>:<List data={movies} /> }

        </>
    )
}

export default Search