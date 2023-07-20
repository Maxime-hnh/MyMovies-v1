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
        const nowPlayingArrow = document.querySelector('#nowPlaying-arrow')
        nowPlayingArrow.addEventListener('click', () => {
            window.location.replace('./Pages/allMovies.html?category=nowPlaying');
        })
    })
    .catch(error => console.log(error));
//END API NOW PLAYING// 

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
        })
        const trendingArrow = document.querySelector('#trending-arrow')
        trendingArrow.addEventListener('click', () => {
            window.location.replace('./Pages/allMovies.html?category=trending');
        })
    })
    .catch(error => console.log(error));
//END API TRENDING//

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
        })
        const bestNotesArrow = document.querySelector('#bestNotes-arrow')
        bestNotesArrow.addEventListener('click', () => {
            window.location.replace('./Pages/allMovies.html?category=bestNotes');
        })
    })
    .catch(error => console.log(error));
// END API BESTNOTES//

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
        })
        const popularArrow = document.querySelector('#popular-arrow')
        popularArrow.addEventListener('click', () => {
            window.location.replace('./Pages/allMovies.html?category=popular');
        })
    })
    .catch(error => console.log(error));
// END API POPULAR//
