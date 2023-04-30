import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import star_logo from "../../images/star_logo.png";
import wars_logo from "../../images/wars_logo.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="holder">
      <header className="header">
        <div className="header-content flex items-center text-cente">
          <div className="header_logo" onClick={() => navigate("/")}>
            <img className="header_img" src={star_logo} alt="star" />
            <img className="header_img" src={wars_logo} alt="wars" />
          </div>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
