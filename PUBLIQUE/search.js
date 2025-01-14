document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResultsContainer = document.getElementById('search-results');
  
    searchForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const query = searchInput.value;
      const movies = await searchMovies(query);
      displaySearchResults(movies);
    });
  
    async function searchMovies(query) {
      const response = await fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${query}`);
      const data = await response.json();
      return data.Search;
    }
  
    function displaySearchResults(movies) {
      searchResultsContainer.innerHTML = '';
      movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
          <img src="${movie.Poster}" alt="${movie.Title}">
          <h3>${movie.Title}</h3>
        `;
        searchResultsContainer.appendChild(movieCard);
      });
    }
  });
  