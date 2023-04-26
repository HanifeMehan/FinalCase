import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <div className="header-content flex flex-c text-center text-white">
          <p className="header-text fs-18 fw-3">Book Search Using React</p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
