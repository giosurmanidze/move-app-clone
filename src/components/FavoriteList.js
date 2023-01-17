import "./styles/FavMovieCard.css";
import { Link } from "react-router-dom";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const FavoriteList = ({ favoriteMovie }) => {

  return (
    <div className="card__container">
      {favoriteMovie.length ? favoriteMovie.map((movie) => {
        return (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="card">
            <div >
              <img src={`${baseUrl}${movie.poster_path}`} />
              <p >{movie.title}</p>
            </div>
          </Link>
        );
      }) :<div className="empty">
          <h3>ფაორიტები ცარიელია </h3>
      </div>
    
    }
    </div>
  );
};

export default FavoriteList;
