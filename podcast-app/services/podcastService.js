const BASE_URL = 'https://podcast-api.netlify.app';

export const fetchShows = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};

export const fetchShow = async (showId) => {
  const response = await fetch(`${BASE_URL}/id/${showId}`);
  const data = await response.json();
  return data;
};

export const fetchSeason = async (showId, seasonId) => {
  const response = await fetch(`${BASE_URL}/id/${showId}`);
  const data = await response.json();
  const season = data.seasons.find(season => season.id === seasonId);
  return season;
};

export const fetchGenre = async (genreId) => {
  const response = await fetch(`${BASE_URL}/genre/${genreId}`);
  const data = await response.json();
  return data;
};
