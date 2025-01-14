const apiKey = 'aff6b636';

async function searchMovies(query) {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`);
  const data = await response.json();
  return data.Search;
}

async function getMovieDetails(id) {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`);
  const data = await response.json();
  return data;
}
