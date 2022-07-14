import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { imageUrl } from '../../Constants/constants'
import './Rowpost.css'
const Rowpost = (props) => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        }).catch(err => {
            console.log(err);
        })
    }, [props])

    return (
        <>
            <h1 className='row-post-heading'>{props.title}</h1>
            <div className='row-post'>
                <div className="card-wrapper">
                    {
                        movies.map(movie => {
                            return (
                                <div className='card' onClick={() => navigate(`/details?movieId=${movie.id}`)}>
                                    <div className="front">
                                        <img src={`${imageUrl + movie.poster_path}`} alt='img' />
                                    </div>
                                    <div className="back" >
                                        <div className="back-content">
                                            <h3 style={{ marginBottom: '5px', marginTop: '20px'}}>{movies ? movie.name : ""}{movies ? movie.original_title : ""}</h3>
                                            <p style={{ color: '#fff',opacity:'1'}}>{movies ? movie.overview : ""}</p>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Rowpost