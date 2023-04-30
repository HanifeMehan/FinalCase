import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="errorContainer">
      <div>
        <div class="starsec"></div>
        <div class="starthird"></div>
        <div class="starfourth"></div>
        <div class="starfifth"></div>
      </div>

      <div class="lamp__wrap">
        <div class="lamp">
          <div class="cable"></div>
          <div class="cover"></div>
          <div class="in-cover">
            <div class="bulb"></div>
          </div>
          <div class="light"></div>
        </div>
      </div>
      <section class="error">
        <div class="error__content">
          <div class="error__message message">
            <h1 class="message__title">404 Error</h1>
            <p class="message__text">Page Not Found</p>
          </div>
          <div class="error__nav e-nav">
            <div onClick={() => navigate("/")} class="e-nav__link"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Error;
