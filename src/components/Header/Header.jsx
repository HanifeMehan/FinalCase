import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import star_logo from "../../images/star_logo.png";
import wars_logo from "../../images/wars_logo.png";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <div className="header-content flex flex-c text-center text-white">
          <div className="header_logo">
            <img className="header_img" src={star_logo} alt="star" />
            <img className="header_img"  src={wars_logo} alt="wars" />
          </div>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
