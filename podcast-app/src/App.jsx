import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ShowDetail from './components/ShowDetails';
import SeasonDetail from './components/SeasonDetail';
import Favorites from './components/Favorites';
import Header from './components/Header';
import PodcastList from './components/PodcastList';
import Footer from './components/Footer';
import Genre from './components/Genre';



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/show/:id" element={<ShowDetail />} />
        <Route path="/show/:showId/season/:seasonId" exact element={<SeasonDetail />} />
        <Route path="/favorites" exact element={<Favorites />} />
        <Route path="/podcasts" element={<PodcastList />} />
        <Route path="/genre/:genreId" element={<Genre />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
