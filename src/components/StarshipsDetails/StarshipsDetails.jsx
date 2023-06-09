import React, { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_image.gif";
import "./StarshipsDetails.css";
import { Box } from "@mui/system";
import { useGlobalContext } from "../../context";
const URL = "https://swapi.dev/api/starships/";

const StarshipsDetails = ({ id, closeModal }) => {
  const [loading, setLoading] = useState(false);

  const { starShips   } = useGlobalContext();
  const starship = starShips.find(ship => ship.id === id);

  if (loading) {
    return <Loading />;
  }

  return (
    <Box className="starshipScreenModal">
      <div className="starshipFilterContainer">
        <div className="starship-details">
          <div className="starship-details-content grid">
            <div onClick={closeModal}>
              <AiFillCloseCircle className="modalCloseIcon" />
            </div>
            <div className="starship-details-item starshipDetailName">
              <span className="starshipNameList">{starship?.name}</span>
            </div>
            <div className="starship-details-img">
              <img src={coverImg} alt="cover_img" />
            </div>
            <div className="starship-details-info">
              <div className="starship-details-item starshiptxtList">
                <span className="font-bold">Model: </span>
                <span>{starship?.model}</span>
              </div>
              <div className="starship-details-item starshiptxtList">
                <span className="font-bold	">Passengers: </span>
                <span>{starship?.passengers}</span>
              </div>
              <div className="starship-details-item starshiptxtList">
                <span className="font-bold">Max Atmosfering Speed: </span>
                <span>{starship?.max_atmosphering_speed}</span>
              </div>
              <div className="starship-details-item starshiptxtList">
                <span className="font-bold">Manufacturer: </span>
                <span>{starship?.manufacturer}</span>
              </div>
              <div className="starship-details-item starshiptxtList">
                <span className="font-bold">Crew: </span>
                <span>{starship?.crew}</span>
              </div>
              <div className="starship-details-item starshiptxtList">
                <span className="font-bold">Cargo Capacity : </span>
                <span>{starship?.cargo_capacity}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default StarshipsDetails;
