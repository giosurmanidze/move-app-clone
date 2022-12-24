import { HiMenu } from "react-icons/hi";
import logo from "../utils/icons/adjaranet-logo.svg";
import { BiSearch } from "react-icons/bi";
import "./styles/Header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ setIsShow }) => {
  const navigate = useNavigate()
  return (
    <div className="header">
      <HiMenu
        size={35}
        color="rgb(213, 221, 245)"
        onClick={() => setIsShow(true)}
      />

      <img onClick={() => navigate('/')} src={logo} />
      <BiSearch size={25} color="rgb(213, 221, 245)" />
    </div>
  );
};

export default Header;
