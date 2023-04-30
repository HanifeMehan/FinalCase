import React from "react";
import { useGlobalContext } from "../../context";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Starship from "../../components/Starships/StarshipsList";
import Error from "../../components/Error/Error";
const Home = () => {
  const { error } = useGlobalContext();
  return (
    <main>
      {error && <Error />}
      {error ? (
        <Error />
      ) : (
        <main>
          <Header />
          <Starship />
          <Footer />
        </main>
      )}
    </main>
  );
};

export default Home;
