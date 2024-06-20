import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowDetail from './components/ShowDetails';
import SeasonDetail from './components/SeasonDetail';
import Favorites from './components/Favorites';
import Header from './components/Header';
import PodcastList from './components/PodcastList';
import Footer from './components/Footer'; // Import the Footer component here

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/show/:showId" exact element={<ShowDetail />} />
        <Route path="/show/:showId/season/:seasonId" exact element={<SeasonDetail />} />
        <Route path="/favorites" exact element={<Favorites />} />
        <Route path="/podcast" exact element={<PodcastList />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
