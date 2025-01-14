// filepath: /C:/Users/esthe/OneDrive/Documentos/CINEMA PROJECT/PUBLIQUE/search.bundle.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('search.bundle.js loaded');

    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const moviesContainer = document.getElementById('movies-container');

    // Fetch and display a default set of movies when the page loads
    fetchDefaultMovies();

    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const query = searchInput.value;
        const movies = await searchMovies(query);
        displayMovies(movies);
    });

    async function fetchDefaultMovies() {
        const defaultQuery = 'popular'; // You can change this to any default search term
        const movies = await searchMovies(defaultQuery);
        displayMovies(movies);
    }

    async function searchMovies(query) {
        const response = await fetch(`https://www.omdbapi.com/?apikey=aff6b636&s=${query}`);
        const data = await response.json();
        return data.Search;
    }

    function displayMovies(movies) {
        moviesContainer.innerHTML = '';
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.className = 'movie';
            movieElement.innerHTML = `
                <h2>${movie.Title}</h2>
                <p>${movie.Year}</p>
                <img src="${movie.Poster}" alt="${movie.Title}">
            `;
            moviesContainer.appendChild(movieElement);
        });
    }
});