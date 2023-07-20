//START API NOW PLAYING// 
const apiKey = '733849af665437d209d039fca8dfd13a';
let page = 1;
const maxPage = 5;
let allResults = [];
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get('category');

if (category === 'nowPlaying') {
    function fetchMovies(page) {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=fr-FR&page=${page}`)
            .then(response => response.json())
            .then(data => {
                allResults = allResults.concat(data.results);
                page++;
                const allMoviesData = data.results
                const allMoviesContainer = document.querySelector('#allMovies-container')

                allMoviesData.forEach(movie => {
                    const moviePoster = document.createElement('img')
                    moviePoster.classList.add('poster-movie')
                    moviePoster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    moviePoster.alt = `${movie.tile} affiche`
                    allMoviesContainer.appendChild(moviePoster)
                    /////////////////////

                    moviePoster.addEventListener('click', () => {
                        const movieId = movie.id;
                        window.location.replace(`./detailsOnClick.html?id=${movieId}`);
                    })
                })
                if (page < maxPage) {
                    fetchMovies(page + 1);
                }
            })

            .catch(error => {
                console.error('Erreur de recherche de film', error)
                page++;
            })
    }
    fetchMovies(page)
}

if (category === 'trending') {
    function fetchMovies(page) {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&language=fr-FRA&page=${page}`)
            .then(response => response.json())
            .then(data => {
                allResults = allResults.concat(data.results);
                page++;
                const allMoviesData = data.results
                const allMoviesContainer = document.querySelector('#allMovies-container')

                allMoviesData.forEach(movie => {
                    const moviePoster = document.createElement('img')
                    moviePoster.classList.add('poster-movie')
                    moviePoster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    moviePoster.alt = `${movie.tile} affiche`
                    allMoviesContainer.appendChild(moviePoster)
                    /////////////////////

                    moviePoster.addEventListener('click', () => {
                        const movieId = movie.id;
                        window.location.replace(`./detailsOnClick.html?id=${movieId}`);
                    })
                })
                if (page < maxPage) {
                    fetchMovies(page + 1);
                }
            })

            .catch(error => {
                console.error('Erreur de recherche de film', error)
                page++;
            })
    }
    fetchMovies(page)
}

if (category === 'bestNotes') {
    function fetchMovies(page) {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=fr-FRA&page=${page}`)
            .then(response => response.json())
            .then(data => {
                allResults = allResults.concat(data.results);
                page++;
                const allMoviesData = data.results
                const allMoviesContainer = document.querySelector('#allMovies-container')

                allMoviesData.forEach(movie => {
                    const moviePoster = document.createElement('img')
                    moviePoster.classList.add('poster-movie')
                    moviePoster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    moviePoster.alt = `${movie.tile} affiche`
                    allMoviesContainer.appendChild(moviePoster)
                    /////////////////////

                    moviePoster.addEventListener('click', () => {
                        const movieId = movie.id;
                        window.location.replace(`./detailsOnClick.html?id=${movieId}`);
                    })
                })
                if (page < maxPage) {
                    fetchMovies(page + 1);
                }
            })

            .catch(error => {
                console.error('Erreur de recherche de film', error)
                page++;
            })
    }
    fetchMovies(page)
}

if (category === 'popular') {
    function fetchMovies(page) {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=Fr-FRA&page=${page}`)
            .then(response => response.json())
            .then(data => {
                allResults = allResults.concat(data.results);
                page++;
                const allMoviesData = data.results
                const allMoviesContainer = document.querySelector('#allMovies-container')

                allMoviesData.forEach(movie => {
                    const moviePoster = document.createElement('img')
                    moviePoster.classList.add('poster-movie')
                    moviePoster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    moviePoster.alt = `${movie.tile} affiche`
                    allMoviesContainer.appendChild(moviePoster)
                    /////////////////////

                    moviePoster.addEventListener('click', () => {
                        const movieId = movie.id;
                        window.location.replace(`./detailsOnClick.html?id=${movieId}`);
                    })
                })
                if (page < maxPage) {
                    fetchMovies(page + 1);
                }
            })

            .catch(error => {
                console.error('Erreur de recherche de film', error)
                page++;
            })
    }
    fetchMovies(page)
}

window.onload = () => {
    const newPage = document.querySelector('.transition');
    newPage.classList.add('active');
};
