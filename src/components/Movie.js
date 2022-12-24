import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "../apiRequests/axios";
import "./styles/MovieDescription.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import MovieDescription from "./MovieDescription";
import Loader from "./Loader";

const API_KEY = "9c52cc6fe0b05b5e813aa331c7039d73";

const Movie = () => {
  const [videoKey, setVideoKey] = useState("");
  const [movie, setMovie] = useState({});
  const [country, setCountry] = useState("");
  const [genres, setGenres] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchTrailer = () => {
      const response = axios
        .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((res) => {
          setVideoKey(res.data.results[0]?.key);
        });
      return response;
    };

    const fetchMovieDetails = async () => {
      const response = await axios.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      setMovie(response.data);
      setCountry(response.data.production_countries[0]?.iso_3166_1);
      if (response.data.genres.length) {
        setGenres(response.data.genres);
      }
    };

    fetchMovieDetails();
    fetchTrailer();
  }, [id]);

  return (
    <Fragment>
      <div className="title__dot">
        <p>{movie.title}</p>
        <BiDotsVerticalRounded className="three__dots" />
      </div>

      <iframe
        key={videoKey}
        src={`https://www.youtube-nocookie.com/embed/${videoKey}`}
        style={{ width: "100%", height: "25vh", border: "none" }}
      ></iframe>
      <MovieDescription
        id={id}
        genres={genres}
        country={country}
        movie={movie}
      />
    </Fragment>
  );
};
export default Movie;
