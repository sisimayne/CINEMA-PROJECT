document.addEventListener('DOMContentLoaded', () => {
    const movieDetailsContainer = document.getElementById('movie-details');
    const movieId = new URLSearchParams(window.location.search).get('id');
  
    async function getMovieDetails(id) {
      const response = await fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&i=${id}`);
      const data = await response.json();
      return data;
    }
  
    async function displayMovieDetails() {
      const movie = await getMovieDetails(movieId);
      movieDetailsContainer.innerHTML = `
        <div class="movie-card">
          <img src="${movie.Poster}" alt="${movie.Title}">
          <h3>${movie.Title}</h3>
          <p>${movie.Plot}</p>
        </div>
      `;
    }
  
    displayMovieDetails();
  });
  