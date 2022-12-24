import React, { useEffect, useState } from "react";
import "./styles/Banner.css";
import BtnSlider from "../layouts/BtnSlider";
import requests from "../apiRequests/requests";
import axios from '../apiRequests/axios'

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [bannerMovies, setBannerMovies] = useState([]);
  console.log(bannerMovies)

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await axios.get(requests.fetchTrending);
      setBannerMovies(res.data.results);
    };
    fetchMovie();
  }, []);

  const nextSlide = () => {
    if (slideIndex !== bannerMovies.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === bannerMovies.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(bannerMovies.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {bannerMovies.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img className="banner__movie" src={`${baseUrl}${bannerMovies[slideIndex]?.poster_path}`} />
            <p className="movie__title">{bannerMovies[slideIndex].title}</p>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
          key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}


export default Banner