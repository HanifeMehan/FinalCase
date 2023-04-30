import React from "react";
import { useGlobalContext } from "../../context";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import StarshipList from "../../components/Starships/StarshipsList";
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
          <StarshipList />
          <Footer />
        </main>
      )}
    </main>
  );
};

export default Home;
