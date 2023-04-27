import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_image.gif";
import "./StarshipsDetails.css";
import { Box } from "@mui/system";
import axios from "axios";
const URL = "https://swapi.dev/api/starships/";

const StarshipsDetails = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    async function getstarshipDetails() {
      setLoading(true);

      try {
        const response = await axios.get(`${URL}${id}`);
        const data = response.data;

        if (data) {
          const {
            name,
            model,
            passengers,
            max_atmosphering_speed,
            manufacturer,
            crew,
            cargo_capacity,
          } = data;

          const newstarship = {
            name,
            model,
            passengers,
            max_atmosphering_speed,
            manufacturer,
            crew,
            cargo_capacity,
          };

          setStarship(newstarship);
        } else {
          setStarship(null);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getstarshipDetails();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Box className="starshipScreenModal">
      <div className="starshipFilterContainer">
        <div className="starship-details">
          <div className="starship-details-content grid">
            <div className="starship-details-item starshipDetailName">
              <span className="fw-6 fs-24">{starship?.name}</span>
            </div>
            <div className="starship-details-img">
              <img src={coverImg} alt="cover img" />
            </div>
            <div className="starship-details-info">
              <div className="starship-details-item starshiptxt">
                <span className="fw-6">Model: </span>
                <span className="text-italic">{starship?.model}</span>
              </div>
              <div className="starship-details-item starshiptxt">
                <span className="fw-6">Passengers: </span>
                <span className="text-italic">{starship?.passengers}</span>
              </div>
              <div className="starship-details-item starshiptxt">
                <span className="fw-6">Max Atmosfering Speed: </span>
                <span className="text-italic">
                  {starship?.max_atmosphering_speed}
                </span>
              </div>
              <div className="starship-details-item starshiptxt">
                <span className="fw-6">Manufacturer: </span>
                <span className="text-italic">{starship?.manufacturer}</span>
              </div>
              <div className="starship-details-item starshiptxt">
                <span className="fw-6">Crew: </span>
                <span className="text-italic">{starship?.crew}</span>
              </div>
              <div className="starship-details-item starshiptxt">
                <span className="fw-6">Cargo Capacity : </span>
                <span className="text-italic">{starship?.cargo_capacity}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default StarshipsDetails;
