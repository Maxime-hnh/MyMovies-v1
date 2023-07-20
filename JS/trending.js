//START API TRENDING//
fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&language=fr-FRA`)
    .then(response => response.json())
    .then(data => {
        const trendingMovies = data.results.slice(0, 20);
        const trendingContainer = document.querySelector('#trending-container')
        
        trendingMovies.forEach(movie => {
            const trendingPoster = document.createElement('img')
            trendingPoster.classList.add('poster-movie')
            trendingPoster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            trendingPoster.alt = `${movie.title} affiche`;
            trendingContainer.appendChild(trendingPoster)
            ///////

            trendingPoster.addEventListener('click', () => {
                const movieId = movie.id;
                window.location.replace(`./Pages/detailsOnClick.html?id=${movieId}`);
            })
        });
    })
    .catch(error => console.log(error));
//END API TRENDING//