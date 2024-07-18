import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthRequired from './components/AuthRequired';
import Home from './components/Home';
import ShowDetail from './components/ShowDetails';
//import SeasonDetail from './components/SeasonDetail';
import Login from './components/Login';
import Favorites from './components/Favorites';
import Header from './components/Header';
import PodcastList from './components/PodcastList';
import Footer from './components/Footer';
import Genre from './components/Genre';

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (podcast) => {
    if (!favorites.some(fav => fav.id === podcast.id)) {
      setFavorites([...favorites, podcast]);
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route element={<AuthRequired />}>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<ShowDetail />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} />} />
          <Route path="/podcasts" element={<PodcastList />} />
          <Route path="/genre/:genreId" element={<Genre />} />
        </Route>
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
