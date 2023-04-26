import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';
import Home from './pages/Home/Home';
import StarshipList from "./components/Starships/StarshipsList"
import StarshipsDetails from './components/StarshipsDetails/StarshipsDetails';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route index  path = "/starship" element = {<StarshipList />} />
          <Route path = "/starship/:id" element = {<StarshipsDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

