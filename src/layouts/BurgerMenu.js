import "./styles/Burger.css";
import { RxCross2 } from "react-icons/rx";
import logo from "../utils/icons/adjaranet-logo.svg";
import { ImFilm } from "react-icons/im";
import { FiYoutube } from "react-icons/fi";
import { RiMovie2Line, RiLightbulbLine } from "react-icons/ri";
import { TbMoodKid } from "react-icons/tb";
import { IoTvOutline } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { TfiStar } from "react-icons/tfi";
import { Link } from "react-router-dom";

const BurgerMenu = ({ setIsShow, cName }) => {
  const [show, setShow] = useState({
    dropdown1: false,
    dropdown2: false,
  });

  //outside click logic
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (!ref.current.contains(e.target)) {
      setIsShow(false);
    }
  };

  return (
    <div className={`burger ${cName}`} ref={ref}>
      <div className="burger__head">
        <RxCross2
          size={25}
          color="rgb(221, 221, 221)"
          onClick={() => setIsShow(false)}
        />
        <img src={logo} alt="logo" />
      </div>
      <div className="burger__pages--icons">
        <div className="burger__pages--icons--box">
          <a
            className="linkTo"
            href="https://react-icons.github.io/react-icons/"
          >
            <IoTvOutline className="burger__icon" />
            <span>TV</span>
          </a>
        </div>
        <div >
          <Link className="burger__pages--icons--box" to="/favorite" onClick={() => setIsShow(false)}>
            <TfiStar className="burger__icon" />
            <span>ფაორიტები</span>
          </Link>
        </div>
        <div className="burger__pages--icons--box box2">
          <ImFilm className="burger__icon" />
          <span
            onClick={() => setShow({ ...show, dropdown1: !show.dropdown1 })}
          >
            ფილმები
            <MdOutlineArrowDropDown className="burger__icon down__arrow" />
          </span>
        </div>
        <div
          className={`category ${
            show.dropdown1 ? "show__dropdown" : "hide__dropdown"
          }`}
        >
          <p>ყველა</p>
          <p>ქართულად</p>
          <p>ანიმაცია</p>
          <p>დოკუმენტური</p>
          <p>თრეილერები</p>
          <p>კოლექციები</p>
        </div>
        <div className="burger__pages--icons--box">
          <FiYoutube className="burger__icon" />
          <span
            onClick={() => setShow({ ...show, dropdown2: !show.dropdown2 })}
          >
            სერიალები
            <MdOutlineArrowDropDown className="burger__icon down__arrow" />
          </span>
        </div>
        <div
          className={`category ${
            show.dropdown2 ? "show__dropdown" : "hide__dropdown"
          }`}
        >
          <p>ყველა</p>
          <p>ქართულად</p>
          <p>თურქული</p>
        </div>
        <div className="burger__pages--icons--box">
          <a className="linkTo" href="http://cinemania.adjaranet.com/">
            <RiMovie2Line className="burger__icon" />
            <span>CINEMANIA</span>
          </a>
        </div>
        <div className="burger__pages--icons--box">
          <TbMoodKid className="burger__icon" />
          <span>საბავშვო</span>
        </div>
        <div className="burger__pages--icons--box">
          <RiLightbulbLine className="burger__icon" />
          <span>Day Mode</span>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
