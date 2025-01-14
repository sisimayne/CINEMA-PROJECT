document.addEventListener('DOMContentLoaded', () => {
    const trendingMoviesContainer = document.getElementById('trending-movies');
  
    // Exemple de films tendances
    const trendingMovies = [
      { title: 'Inception', poster: 'https://via.placeholder.com/150' },
      { title: 'Interstellar', poster: 'https://via.placeholder.com/150' },
      { title: 'The Dark Knight', poster: 'https://via.placeholder.com/150' }
    ];
  
    trendingMovies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      movieCard.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <h3>${movie.title}</h3>
      `;
      trendingMoviesContainer.appendChild(movieCard);
    });
  });

  