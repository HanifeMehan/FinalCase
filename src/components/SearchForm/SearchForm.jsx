import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./SearchForm.css";

const SearchForm = () => {
  const { setSearchTerm, setResultPage } = useGlobalContext();
  const searchText = useRef("search");
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempSearchTerm = searchText.current.value.trim();

    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("");
      setResultPage("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);

    }

    navigate("/starship");
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="Starhip Name..."
                ref={searchText}
              />
              <button type="submit" className="flex flex-c">
                <FaSearch size={22} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
