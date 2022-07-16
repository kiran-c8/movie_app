import { React, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { API_KEY, baseUrl } from "../../Constants/constants";
import { imageUrl } from "../../Constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "./Details.css";
import Loader from "../Loader/Loader";
const Details = () => {
  const navigate = useNavigate();
  const [movie, setMovies] = useState({});
  const [credits, setCredits] = useState([]);
  const [similarMovies, setSimilarmovies] = useState([]);
  const movieId = new URLSearchParams(useLocation().search).get("movieId");
  const loadData = () => {
    axios
      .get(`${baseUrl}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        `${baseUrl}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        setSimilarmovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        `${baseUrl}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        setCredits(response.data.cast.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setTimeout(loadData, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <div style={{ background: "#010003", height: "100%" }}>
      {Object.keys(movie).length !== 0 &&
      credits.length !== 0 &&
      similarMovies.length !== 0 ? (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url('${imageUrl + movie.backdrop_path}')`,
            }}
          ></div>

          {/* Movie details  */}
          <div className="movie-content">
            <div className="movie-content_poster">
              <div
                className="movie-content_poster__img"
                style={{
                  backgroundImage: `url('${imageUrl + movie.poster_path}')`,
                }}
              ></div>
            </div>
            <div className="movie-content_info">
              <h1 className="movie-content_info__title">{movie.title}</h1>
              <div className="movie-content_info__genre">
                {movie.genres &&
                  movie.genres.map((item) => {
                    return (
                      <span className="movie-content_info__genre__item">
                        {item ? item.name : ""}
                      </span>
                    );
                  })}
              </div>
              <p className="movie-content_info__overview">{movie.overview}</p>
              <div className="movie-content_info__rating">
                <span>IMDb RATING</span>
                <FontAwesomeIcon
                  icon={faStar}
                  className="star-icon"
                  color="#f5c518"
                />
                <span>{movie.vote_average}/10</span>
              </div>
              <div
                className="movie-content_button"
                onClick={() => navigate(`/details/video?movieId=${movie.id}`)}
              >
                <FontAwesomeIcon icon={faCirclePlay} className="play-icon" />
                <span>Watch Trailer</span>
              </div>

              <div className="cast-section">
                <div className="cast-section_header">
                  <h2>Cast</h2>
                  <div className="cast-section_card">
                    {credits.map((actor) => {
                      return (
                        <div className="cast-section_card__image">
                          <img
                            src={`${imageUrl + actor.profile_path}`}
                            alt=""
                            className="cast-section_card__image__poster"
                          />
                          <div className="image-overlay">
                            <h5>{actor.name}</h5>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Similar movies */}
          <div className="similar-movies-section">
            <h3 className="similar-movies-section_heading">Similar Movies</h3>
            <div className="similar-movies-container">
              {similarMovies.map((item) => {
                return (
                  <div className="similar-movies-container_image">
                    <img
                      src={`${imageUrl + item.poster_path}`}
                      alt=""
                      className="similar-movie_poster"
                    />
                    <div
                      className="similar-movies-container_image-overlay"
                      onClick={() => navigate(`/details?movieId=${item.id}`)}
                    >
                      <h5>{item.title}</h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Details;
