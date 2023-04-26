import axios from "axios";
import React, { useState, useContext, useEffect, useCallback } from "react";
const AppContext = React.createContext();
const BASE_URL = "https://swapi.dev/api/starships/";

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("search");
  const [starShips, setStarShips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultPage, setResultPage] = useState("");

  const fetchStarShips = useCallback(
    async (id) => {
      setLoading(true);
      try {
        if (id) {
          setLoading(false);
          return;
        }
        // const searchTerm = "Death Star";
        const response = await axios.get(`${BASE_URL}?search=${searchTerm}`);
        const data = response.data.results;
        console.log(data);
        if (data) {
          const newStarShip = data.slice(0, 20).map((ship) => {
            const {
              url,
              name,
              model,
              hyperdrive_rating,
              manufacturer,
              cost_in_credits,
              length,
              crew,
              passengers,
              page,
            } = ship;
            const id = url.match(/(\d+)/)[0];
            return {
              id: id,
              name: name,
              model: model,
              hyperdrive_rating: hyperdrive_rating,
              manufacturer: manufacturer,
              cost_in_credits: cost_in_credits,
              length: length,
              crew: crew,
              passengers: passengers,
              page :page
            };
          });

          setStarShips(newStarShip);

          if (newStarShip.length > 1) {
            setResultPage("");
          } else {
            setResultPage("No Search Result Found!");
          }
        } else {
          console.log(setStarShips.name)
          setStarShips([]);
          setResultPage("No Search Result Found!");
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
    [searchTerm]
  );

  useEffect(() => {
    console.log(starShips.name)

    fetchStarShips();
  }, [searchTerm, fetchStarShips]);
  return (
    <AppContext.Provider
      value={{
        loading,
        starShips,
        setSearchTerm,
        resultPage,
        setResultPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
