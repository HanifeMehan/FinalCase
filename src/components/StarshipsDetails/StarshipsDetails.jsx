import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./StarshipsDetails.css";
import { Box } from "@mui/system";
import axios from "axios";
const URL = "https://swapi.dev/api/starships/";

const StarshipsDetails = ({ page }) => {
  const [loading, setLoading] = useState(false);
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    async function getBookDetails() {
      setLoading(true);

      try {
        const response = await axios.get(`${URL}${page}.json`);
        const data = response.data;

        if (data) {
          const {
            key,
            name,
            model,
            hyperdrive_rating,
            manufacturer,
            cost_in_credits,
            length,
            crew,
            passengers,
          } = data;

          const newBook = {
            name,
            // cover_img: covers
            //   ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
            //   : coverImg,
            model,
            hyperdrive_rating,
            manufacturer,
          };

          setStarship(newBook);
        } else {
          setStarship(null);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getBookDetails();
  }, [page]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Box className="homeScreenModal">
      <div className="homeFilterContainer">
        <section className="book-details">
          <div className="container">
            <div className="book-details-content grid">
              {/* <div className="book-details-img">
                <img src={book?.cover_img} alt="cover img" />
              </div> */}
              <div className="book-details-info">
                <div className="book-details-item title">
                  <span className="fw-6 fs-24">{starship?.name}</span>
                </div>
                <div className="book-details-item description">
                  <span>{starship?.hyperdrive_rating}</span>
                </div>
                <div className="book-details-item">
                  <span className="fw-6">Subject Places: </span>
                  <span className="text-italic">{starship?.model}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Box>
  );
};

export default StarshipsDetails;
