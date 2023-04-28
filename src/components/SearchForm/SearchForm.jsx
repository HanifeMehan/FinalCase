import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./SearchForm.css";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("search");
  const navigate = useNavigate();

  useEffect(() => {
    const tempSearchTerm = searchText.current.value.trim();

    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }
  }, [setResultTitle, setSearchTerm]);
  useEffect(() => searchText.current.focus(), []);


  const handleSubmit = (e) => {
    e.preventDefault();
    const tempSearchTerm = searchText.current.value.trim();

    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form onSubmit={handleSubmit}>
            <div className="search-form-elem items-center justify-center flex	 ">
              <div className="search-txt"> Name/Model</div>
              <input
                type="text"
                className="form-control"
                placeholder="Name/Model"
                ref={searchText}
              />
              <button type="submit" className=" search_btn flex items-center justify-center">
                Filter
              </button>
            </div>
            <div className="search-border-bottom"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
