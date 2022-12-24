import Header from "./components/Header";
import BurgerMenu from "./layouts/BurgerMenu";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Footer from "./components/Footer";

const App = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <BurgerMenu
        cName={isShow ? "showBurger" : "hideBurger"}
        setIsShow={setIsShow}
      />
      <Header setIsShow={setIsShow} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
