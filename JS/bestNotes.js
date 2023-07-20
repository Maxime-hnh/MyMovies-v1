//START API BESTNOTES//
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=fr-FRA`)
    .then(response => response.json())
    .then(data => {
        const bestMovies = data.results.slice(0, 20);
        const bestContainer = document.querySelector('#best-container')

        bestMovies.forEach(movie => {
            const bestPoster = document.createElement('img')
            bestPoster.classList.add('poster-movie')
            bestPoster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            bestPoster.alt = `${movie.title} affiche`;
            bestContainer.appendChild(bestPoster)
            //////
            bestPoster.addEventListener('click', () => {
                const movieId = movie.id;
                window.location.replace(`./Pages/detailsOnClick.html?id=${movieId}`);
            })
        });
    })
    .catch(error => console.log(error));
// END API BESTNOTES//