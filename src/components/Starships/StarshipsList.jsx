import React from "react";
import { useGlobalContext } from "../../context";
import Starships from "./Starships";
import Loading from "../Loader/Loader";
import "./StarshipsList.css";

const StarshipList = () => {
  const { starShips, loading, resultTitle } = useGlobalContext();
  const shipList = starShips.map((ship) => {
    console.log(starShips.name)
    return {
      ...ship,
      // removing /works/ to get only id
      name: ship.name.replace("/starships/", ""),
      // cover_img: ship.id
      //   ? `https://covers.openlibrary.org/b/id/${ship.cover_id}-L.jpg`
      //   : coverImg,
    };
  });
  //Veriler alınana kadarki süreç içim loading eklendi
  if (loading) return <Loading />;

  return (
    <section className="starshiplist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="starshiplist-content grid">
          {shipList.slice(0, 30).map((item, index) => {
            return <Starships key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default StarshipList;
