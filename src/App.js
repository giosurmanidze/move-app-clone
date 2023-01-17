import Header from "./components/Header";
import BurgerMenu from "./layouts/BurgerMenu";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Footer from "./components/Footer";
import FavoriteList from './components/FavoriteList'

const getMovie = () => {
  const data = localStorage.getItem('favMovies');
  if(data) {
    return JSON.parse(data)
  }else {
    return []
  }
}

const App = () => {
  const [favoriteMovie, setFavoriteMovie] = useState(getMovie);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    localStorage.setItem('favMovies',JSON.stringify(favoriteMovie))
  })

  return (
    <>
      <BurgerMenu
        cName={isShow ? "showBurger" : "hideBurger"}
        setIsShow={setIsShow}
      />
      <Header setIsShow={setIsShow} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<FavoriteList favoriteMovie={favoriteMovie}/>}/>
        <Route
          path="/movie/:id"
          element={
            <Movie
              favoriteMovie={favoriteMovie}
              setFavoriteMovie={setFavoriteMovie}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
