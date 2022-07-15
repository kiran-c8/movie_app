import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { trending } from '../../Constants/urls'
import { imageUrl } from '../../Constants/constants'
import Marquee from "react-fast-marquee";
import './Banner.css'
function Banner() {


    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        axios.get(trending).then((response) => {
            setMovies(response.data.results)
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <>

            <div className='carousel-container'>
                <div className='carousel-wrapper'>
                    <Marquee play={true} pauseOnHover speed={100} gradient={false}>
                        {
                            movies.map((movie) => {
                                return (
                                    <div className="carousel" onClick={() => navigate(`/details?movieId=${movie.id}`)}>
                                        <div className="content">
                                            <h1 className="movie-title">{movies ? movie.name : ""}{movies ? movie.original_title : ""}</h1>
                                            <p className='media-type'>{movie.media_type}</p>
                                            <p className='movie-description'>{movies ? movie.overview : ""}</p>
                                        </div>
                                        <div className='image'>
                                            <img src={`${imageUrl + movie.backdrop_path}`} alt='img' className='poster' />
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </Marquee>

                </div>
            </div>

        </>

    )
}

export default Banner