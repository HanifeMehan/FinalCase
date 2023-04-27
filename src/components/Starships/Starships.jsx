import React, { useState } from "react";
import "./StarshipsList.css";
import { Modal } from "@mui/material";
import StarshipsDetails from "../StarshipsDetails/StarshipsDetails";
import coverImg from "../../images/cover_image.gif";

const StarShip = ({ id, name, model, hyperdrive_rating }) => {
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
        <StarshipsDetails id={id} />
      </Modal>
      <div className="starship-item flex flex-column flex-sb" onClick={handleOpen}>
        <div className="starship-item-img">
          <img src={coverImg} alt="cover" />
        </div>
        <div className="starship-item-info">
          <div className="starship-item-info-item starshipName text-center">
            <span>{name}</span>
          </div>
          <div className="starship-item-info-item  starshiptxt">
            <span className="text-capitalize ">Model: </span>
            <span>{model}</span>
          </div>
          <div className="starship-item-info-item starshiptxt">
            <span className="text-capitalize ">Total Editions: </span>
            <span>{hyperdrive_rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarShip;
