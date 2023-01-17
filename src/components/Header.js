import { HiMenu } from "react-icons/hi";
import logo from "../utils/icons/adjaranet-logo.svg";
import { BiSearch } from "react-icons/bi";
import "./styles/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "../apiRequests/axios";

const API_KEY = "9c52cc6fe0b05b5e813aa331c7039d73";
const baseUrl = "https://image.tmdb.org/t/p/original/";

const Header = ({ setIsShow }) => {
  const [inputShow, setInputShow] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedMoviesList, setSearchedMoviesList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrailer = () => {
      const response = axios
        .get(
          `/search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`
        )
        .then((res) => {
          console.log(res.data.results);
          setSearchedMoviesList(res.data.results);
        });
      return response;
    };

    fetchTrailer();

    if (!searchText) {
      setSearchedMoviesList([]);
    }
  }, [searchText]);



  console.log(searchedMoviesList)
  return (
    <div className="header">
      {inputShow ? (
        <div className="main--div">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="ძიება..."
            className="search__field"
          />
          {searchedMoviesList.length > 0 && (
            <>
              <div className="search--bar" >
            <p className="result--count">შედეგი:{searchedMoviesList.length} ფილმი</p>
                {searchedMoviesList.map((movie) => {
                  return (
                    movie.poster_path && (
                      <Link to={`/movie/${movie.id}`} className="movie--card" onClick={() => {
                        setInputShow(false)
                      }}>
                          <img src={`${baseUrl}${movie.poster_path}`} />
                          <p>{movie.title}</p>
                        </Link>
                      )
                    
                    
                  );
                })}
              </div>
            </>
          )}
        </div>
      ) : (
        <>
          <HiMenu
            size={35}
            color="rgb(213, 221, 245)"
            onClick={() => setIsShow(true)}
          />

          <img onClick={() => navigate("/")} src={logo} />
        </>
      )}

      <BiSearch
        size={25}
        color="rgb(213, 221, 245)"
        onClick={() => setInputShow((prevState) => !prevState)}
      />
    </div>
  );
};

export default Header;
