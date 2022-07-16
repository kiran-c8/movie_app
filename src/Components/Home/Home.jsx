import React from "react";
import Banner from "../Banner/Banner";
import Rowpost from "../Rowpost/Rowpost";
import {
  Documentaries,
  nowPlaying,
  topRated,
  trending,
  popular,
} from "../../Constants/urls";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Rowpost url={nowPlaying} title="Now Running" />
      <Rowpost url={trending} title="Trending" />
      <Rowpost url={popular} title="Popular" />
      <Rowpost url={topRated} title="Top rated" />
      <Rowpost url={Documentaries} title="Documentary" />
    </div>
  );
};

export default Home;
