import React from 'react';
import Header from '../../components/Header/Header';
// import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Starship from "../../components/Starships/StarshipsList";
const Home = () => {
  return (
    <main>
        <Header />
        <Starship />
        <Footer />
    </main>
  )
}

export default Home
