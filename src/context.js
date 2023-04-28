import axios from "axios";
import { useInfiniteQuery } from "react-query";
import React, { useState, useContext, useEffect, useCallback } from "react";
const AppContext = React.createContext();
const BASE_URL = "https://swapi.dev/api/starships/";

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchStarShips = useCallback(
    async ({ pageParam = 1 }) => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}?search=${searchTerm}&page=${pageParam}`
        );
        const { count, next, results } = response.data;

        const newStarShip = results.map((ship) => {
          const {
            url,
            name,
            model,
            hyperdrive_rating,
            passengers,
            max_atmosphering_speed,
            manufacturer,
            crew,
            cargo_capacity,
          } = ship;
          const id = url.match(/(\d+)/)[0];
          return {
            id: id,
            name: name,
            model: model,
            hyperdrive_rating: hyperdrive_rating,
            passengers: passengers,
            max_atmosphering_speed: max_atmosphering_speed,
            manufacturer: manufacturer,
            crew: crew,
            cargo_capacity: cargo_capacity,
          };
        });

        if (newStarShip.length > 0) {
          setResultTitle("");
        } else {
          setResultTitle("No Search Result Found!");
        }

        setLoading(false);
        return { newStarShip, next };
      } catch (error) {
        console.log(error);
        setLoading(false);
        return { error };
      }
    },
    [searchTerm]
  );

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("starships", fetchStarShips, {
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.newStarShip.length === 0) {
        return null;
      } else {
        return lastPage.next;
      }
    },
  });

  const starShips = data
    ? data.pages.map((page) => page.newStarShip).flat()
    : [];

  useEffect(() => {
    if (error) {
      setResultTitle(`Error: ${error.message}`);
    } else if (data && starShips.length === 0) {
      setResultTitle("No Search Result Found!");
    }
  }, [error, data, starShips]);

  return (
    <AppContext.Provider
      value={{
        loading,
        starShips,
        setSearchTerm,
        resultTitle,
        setResultTitle,
        isFetching,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
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
