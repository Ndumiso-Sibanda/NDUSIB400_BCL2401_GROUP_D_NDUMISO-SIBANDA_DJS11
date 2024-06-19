import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Header';
import ShowDetail from './components/SeasonDetail';
import SeasonDetail from './components/SeasonDetail';
import Favorites from './components/Favorites';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/show/:showId" exact element={<ShowDetail/>} />
        <Route path="/show/:showId/season/:seasonId" exact element={<SeasonDetail/>} />
        <Route path="/favorites" exact element={<Favorites/>} />
      </Routes>
    </Router>
  );
};

export default App;
