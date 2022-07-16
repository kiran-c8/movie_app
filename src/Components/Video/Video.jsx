import { React, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { API_KEY, baseUrl } from "../../Constants/constants";
import "./Video.css";
import Loader from "../Loader/Loader";
const Video = () => {
  const movieId = new URLSearchParams(useLocation().search).get("movieId");
  const [urlid, setUrlid] = useState("");
  useEffect(() => {
    axios
      .get(
        `${baseUrl}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlid(response.data.results[0]);
        }
      });
  }, [movieId]);

  return (
    <>
      {urlid !== "" ? (
        <div className="video-wrapper">
          <div className="youtube-container">
            <iframe
              title="trailer"
              id="ytplayer"
              type="text/html"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${urlid.key}?autoplay=1`}
              frameborder="0"
            ></iframe>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Video;
