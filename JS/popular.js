//START API POPULAR//
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=Fr-FRA`)
    .then(response => response.json())
    .then(data => {
        const popularMovie = data.results.slice(0, 20);
        const popularContainer = document.querySelector('#popular-container')

        popularMovie.forEach(movie => {
            const popularPoster = document.createElement('img')
            popularPoster.classList.add('poster-movie')
            popularPoster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            popularPoster.alt = `${movie.title} affiche`;
            popularContainer.appendChild(popularPoster)
            //////
            popularPoster.addEventListener('click', () => {
                const movieId = movie.id;
                window.location.replace(`./Pages/detailsOnClick.html?id=${movieId}`);
            })
        });
    })
    .catch(error => console.log(error));
// END API POPULAR//