import { useEffect, useState } from "react";
import Row from "./Row";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BsSuitHeartFill } from "react-icons/bs";
import {AiFillLike} from 'react-icons/ai'
import Actors from "./Actors";

const API_KEY = "9c52cc6fe0b05b5e813aa331c7039d73";
const baseUrl = "https://image.tmdb.org/t/p/original/";

const MovieDescription = ({
  movie,
  country,
  genres,
  id,
  favoriteMovie,
  setFavoriteMovie,
  movieIndex,
}) => {
  const [activeBtn, setActiveBtn] = useState("description");
  const [showStatus, setShowStatus] = useState(false);

  const selectBtn = (e) => {
    setActiveBtn(e.target.value);
  };
  useEffect(() => {
    setActiveBtn("description");
  }, [id]);

  const addToFavList = (itm) => {
    const favorites = Object.assign([], favoriteMovie);
    const index = favorites.findIndex((f) => f.id === itm.id);

    if (index === -1) {
      favorites.push(itm);
      itm.video = true;
    } else {
      favorites.splice(index, 1);
      itm.video = false;
    }

    /// is added or not checking
    if (itm.video) {
      setShowStatus(true);
      setTimeout(() => setShowStatus(false), 2000);
    } else {
      setShowStatus(false);
    }

    setFavoriteMovie(favorites);
  };

  return (
    <>
        <div className={`${showStatus && "show_status"} hide_status`}>
          <AiFillLike size={30}/>
        </div>
      <div className="movies__files">
        <span>
          ფილმის ფაილები{" "}
          <MdOutlineArrowDropDown className="down__arrow--files" />
        </span>
      </div>
      <div className="description__card">
        <div className="btns__select">
          <button
            value="description"
            onClick={(e) => selectBtn(e)}
            className={`btn--1 ${activeBtn === "description" && "active__btn"}`}
          >
            აღწერა
          </button>
          <button
            value="similar"
            onClick={(e) => selectBtn(e)}
            className={`btn--2 ${activeBtn === "similar" && "active__btn"}`}
          >
            მსგავსი
          </button>
          <button
            value="actors"
            onClick={(e) => selectBtn(e)}
            className={`btn--2 ${activeBtn === "actors" && "active__btn"}`}
          >
            მსახიობები
          </button>
        </div>
        {activeBtn === "description" ? (
          <>
            <div className="img__details">
              <img
                src={`${baseUrl}${movie.poster_path}`}
                className="img__details--img"
              />
              <div className="movie__details--info">
                <p>
                  გამოშვების წელი: <span>{movie.release_date}</span>
                </p>
                <p>
                  ქვეყანა: <span>{country}</span>
                </p>
                <p>
                  ჟანრი:
                  {genres.length ? (
                    genres.map((genre) => (
                      <span key={genre.id}>{genre.name},</span>
                    ))
                  ) : (
                    <span>not found</span>
                  )}
                </p>
                <p>
                  ხანგრძლივობა: <span>{movie.runtime}min</span>
                </p>
                <p>
                  ბიუჯეტი: <span>${movie.budget}</span>
                </p>
                <p>
                  შემოსავალი: <span>${movie.revenue}</span>
                </p>
                <p>
                  IMDB: <span>{movie.vote_average}</span>
                </p>
                <BsSuitHeartFill
                  onClick={() => addToFavList(movie)}
                  className={`${
                    favoriteMovie[movieIndex]?.video && "heart__icon"
                  } default__bg`}
                  size={25}
                />
              </div>
            </div>
            <div className="movie__description">
              <p>{movie.overview}</p>
            </div>
          </>
        ) : activeBtn === "similar" ? (
          <>
            <Row
              noArrow={true}
              fetchUrl={`/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`}
            />
          </>
        ) : (
          <Actors />
        )}
      </div>
    </>
  );
};

export default MovieDescription;
