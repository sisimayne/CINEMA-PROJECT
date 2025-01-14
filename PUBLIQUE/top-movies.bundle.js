// filepath: /C:/Users/esthe/OneDrive/Documentos/CINEMA PROJECT/PUBLIQUE/top-movies.bundle.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('top-movies.bundle.js loaded');

    const topMoviesContainer = document.getElementById('top-movies-container');

    // Fetch and display the top ten movies when the page loads
    fetchTopMovies();

    async function fetchTopMovies() {
        const topMovies = await getTopMovies();
        displayMovies(topMovies);
    }

    async function getTopMovies() {
        const response = await fetch(`https://www.omdbapi.com/?apikey=aff6b636&s=top`);
        const data = await response.json();
        return data.Search.slice(0, 10); // Get the top 10 movies
    }

    function displayMovies(movies) {
        topMoviesContainer.innerHTML = '';
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.className = 'movie';
            movieElement.innerHTML = `
                <h2>${movie.Title}</h2>
                <p>${movie.Year}</p>
                <img src="${movie.Poster}" alt="${movie.Title}">
            `;
            topMoviesContainer.appendChild(movieElement);
        });
    }
});