import { useEffect, useState, useRef } from "react";
import axios from "../apiRequests/axios";
import "./styles/Row.css";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, show, setSelectedOpt, selectedOpt, countrySide, noArrow }) => {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate()

  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
      return response;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className={`row ${countrySide && "change__bg"}  ${show && "date__row"}`}>
      <div className="row__title__icons">
        <h2>{title}</h2>

        <div className={`row__icons--arrow ${noArrow && 'hide__arrows'}`}>
          <button onClick={() => scroll(-300)}>
            <MdArrowBackIosNew className="row__icon" />
          </button>
          <button>
            <MdArrowForwardIos
              onClick={() => scroll(300)}
              className="row__icon"
            />
          </button>
        </div>
      </div>
      <div className={`date__choose--btn hide ${show && "show"}`}>
        <h2>ტოპ ფილმები</h2>
        <button onClick={() => setSelectedOpt("day")} className={`${selectedOpt === "day" && 'active__btn'}`}>დღის</button>
        <button onClick={() => setSelectedOpt("week")} className={`${selectedOpt === "week" && 'active__btn'}`}>კვირის</button>
        <button onClick={() => setSelectedOpt("month")} className={`${selectedOpt === "month" && 'active__btn'}`}>თვის</button>
      </div>
      
      <div className="row__posters" ref={ref}>
        {movies.map((movie) => (
          <img
          onClick={() => navigate(`/movie/${movie.id}`)}
            key={movie.id}
            className="row__poster"
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
