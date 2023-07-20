//START API NOW PLAYING// 
fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=fr-FR`)
    .then(response => response.json())
    .then(data => {
        const nowPlayingMovies = data.results.slice(0, 20)
        const nowPlayingContainer = document.querySelector('#nowPlaying-container')

        nowPlayingMovies.forEach(movie => {
            const nowPlayingPoster = document.createElement('img')
            nowPlayingPoster.classList.add('poster-movie')
            nowPlayingPoster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            nowPlayingPoster.alt = `${movie.tile} affiche`
            nowPlayingContainer.appendChild(nowPlayingPoster)
            /////////////////////
        
            nowPlayingPoster.addEventListener('click', () => {
                const movieId = movie.id;
                window.location.replace(`./Pages/detailsOnClick.html?id=${movieId}`);
            })
        })
    })
    .catch(error => console.log(error));