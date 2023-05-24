import React from "react";
import { useGlobalContext } from "../../context";
import Starships from "./Starships";
import Loading from "../Loader/Loader";
import "./StarshipsList.css";

const StarshipList = () => {
  const {
    starShips,
    loading,
    resultTitle,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGlobalContext();

  //Veriler alınana kadarki süreç içim loading eklendi
  if (loading) return <Loading />;

  return (
    <section className="starshiplist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="starshiplist-content grid">
          {starShips.map((item, index) => {
            return <Starships key={index} item={item} />;
          })}
        </div>
        <div className="flex justify-center items-center">
          <button
            className="loadMoreBtn"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading more starships..."
              : hasNextPage
              ? "Load more starships..."
              : "All starships loaded"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default StarshipList;
