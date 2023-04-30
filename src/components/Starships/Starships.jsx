import React, { useState } from "react";
import "./StarshipsList.css";
import { Modal } from "@mui/material";
import StarshipsDetails from "../StarshipsDetails/StarshipsDetails";
import coverImg from "../../images/cover_image.gif";
import { Box } from "@mui/system";
const StarShip = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* modal created to list starship detail information */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <StarshipsDetails id={item.id} closeModal={handleClose} />
        </Box>
      </Modal>
      <div
        className="starship-item flex items-center flex-col"
        onClick={handleOpen}
      >
        <div className="starship-item-img">
          <img src={coverImg} alt="cover_image" />
        </div>
        <div className="starship-item-info">
          <div className="starship-item-info-item starshipName text-center">
            <span>{item.name}</span>
          </div>
          <div className="starship-item-info-item  starshiptxt">
            <span className=" font-bold	">Model: </span>
            <span>{item.model}</span>
          </div>
          <div className="starship-item-info-item starshiptxt">
            <span className=" font-bold	">Total Editions: </span>
            <span>{item.hyperdrive_rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarShip;
