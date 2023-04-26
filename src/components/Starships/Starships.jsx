import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StarshipsList.css";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import StarshipsDetails from "../StarshipsDetails/StarshipsDetails";
const StarShip = ({
  id,
  name,
  model,
  manufacturer,
  cost_in_credits,
  hyperdrive_rating,
  page
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();

  return (
    <div className="book-item flex flex-column flex-sb" onClick={handleOpen}>
      {/* Kitap detay bilgilerini listelemek için modal oluşturuldu */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <StarshipsDetails page={page} />
        </Box>
      </Modal>
      {/* <div className="book-item-img">
        <img src={cover_img} alt="cover" />
      </div> */}
      <div className="book-item-info text-center">
        <div className="book-item-info-item title fw-7 fs-18">
          <span>{name}</span>
        </div>

        <div className="book-item-info-item edition-count fs-15">
          <span className="text-capitalize fw-7">Total Editions: </span>
          <span>{hyperdrive_rating}</span>
        </div>

        <div className="book-item-info-item publish-year fs-15">
          <span className="text-capitalize fw-7">First Publish Year: </span>
          <span>{model}</span>
        </div>
      </div>
    </div>
  );
};

export default StarShip;
