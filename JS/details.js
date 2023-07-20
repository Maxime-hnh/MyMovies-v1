const apiKey = '733849af665437d209d039fca8dfd13a';
const movieDetailsContainer = document.querySelector('.movie-details');
const containerPoster = document.querySelector('.container-poster')
const details = document.querySelector('.details')
const movieTitle = document.querySelector('.movie-title')


// Récupère l'ID du film à partir de l'URL de la page
const searchParams = new URLSearchParams(window.location.search);
const movieId = searchParams.get('id');

// Effectue une requête à l'API de The Movie Database pour récupérer les informations détaillées sur le film
fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=fr-FRA`)
    .then(response => response.json())
    .then(movieData => {

        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=fr-FRA`)
            .then(response => response.json())
            .then(creditsData => {

                const movieInfo = { ...movieData, ...creditsData };
                movieTitle.textContent = movieInfo.title;

                //AFFICHE BACKGROUND
                const backdropUrl = `https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`;
                movieDetailsContainer.style.backgroundImage = `url('${backdropUrl}')`;

                //AFFICHE DU FILM
                const moviePoster = document.createElement('img');
                moviePoster.classList.add('poster-movie')
                moviePoster.src = `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;
                moviePoster.alt = `${movieInfo.title} affiche`;
                containerPoster.insertBefore(moviePoster, containerPoster.firstChild)

                // DATE DE SORTIE
                const releaseDate = movieInfo.release_date
                const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
                const formattedReleaseDate = new Date(releaseDate).toLocaleDateString('fr-FR', options);
                const releaseDateElement = document.querySelector('.release-date')
                releaseDateElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="44" viewBox="0 96 960 960" width="44" fill="#ffffff80"><path d="M180 976q-24 0-42-18t-18-42V296q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600V486H180v430Zm0-490h600V296H180v130Zm0 0V296v130Z"/></svg>
                ${formattedReleaseDate}`;

                // GENRE DU FILM
                const genre = document.querySelector('.genre')
                genre.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="44" viewBox="0 96 960 960" width="44" fill="#ffffff80"><path d="M160 936V216h60v60h120v-60h280v60h120v-60h60v720h-60v-60H620v60H340v-60H220v60h-60Zm60-120h120V696H220v120Zm0-180h120V516H220v120Zm0-180h120V336H220v120Zm400 360h120V696H620v120Zm0-180h120V516H620v120Zm0-180h120V336H620v120ZM400 876h160V276H400v600Zm0-600h160-160Z"/></svg>
                ${movieInfo.genres[0].name}`

                //DUREE DU FILM
                const runtime = document.querySelector('.runtime')
                runtime.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="44" viewBox="0 96 960 960" width="44" fill="#ffffff80"><path d="m627 769 45-45-159-160V363h-60v225l174 181ZM480 976q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-82 31.5-155t86-127.5Q252 239 325 207.5T480 176q82 0 155 31.5t127.5 86Q817 348 848.5 421T880 576q0 82-31.5 155t-86 127.5Q708 913 635 944.5T480 976Zm0-400Zm0 340q140 0 240-100t100-240q0-140-100-240T480 236q-140 0-240 100T140 576q0 140 100 240t240 100Z"/></svg>
                ${movieInfo.runtime} mins`

                //NOTE DU FILM
                const movieNote = document.querySelector('.movie-note')
                const note = movieInfo.vote_average.toFixed(1)
                const noteElement = document.createElement('p')
                noteElement.textContent = note
                movieNote.appendChild(noteElement)

                //SYNOPSIS//
                const overview = document.querySelector('.overview')
                const overviewElement = document.createElement('p')
                overviewElement.classList.add('overview-container')
                overviewElement.textContent = movieInfo.overview
                overview.insertAdjacentElement('beforeend', overviewElement)

                //DATA ACTEURS
                const actorsData = movieInfo.cast.map(actorData => {
                    return {
                        name: actorData.name,
                        character: actorData.character,
                        profilePath: actorData.profile_path ? `https://image.tmdb.org/t/p/w185/${actorData.profile_path}` : null
                    }
                })
                const actorContainer = document.querySelector('.actor-container')
                const limitedActors = actorsData.slice(0, 10);
                limitedActors.forEach(actorData => {
                    const actor = document.createElement('div')
                    actor.classList.add('actor')
                    const nameElement = document.createElement('p');
                    nameElement.textContent = actorData.name;
                    const profilPathElement = document.createElement('img')
                    profilPathElement.classList.add('profil-path')
                    profilPathElement.src = actorData.profilePath
                    profilPathElement.alt = 'Photo non disponible'
                    actorContainer.appendChild(actor)
                    actor.appendChild(profilPathElement)
                    actor.appendChild(nameElement)
                })

            })
    })

    .catch(error => {
        console.error('Erreur de récupération des informations détaillées sur le film', error)
    });

//API LIEN BANDE ANNONCE
fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=fr-FRA`)
    .then(response => response.json())
    .then(data => {
        const movieDetails = document.querySelector('.movie-details')
        const videoKey = data.results[0].key
        const playElement = document.createElement('a')
        playElement.href = `https://www.youtube.com/watch?v=${videoKey}`
        const playButton = `<svg xmlns="http://www.w3.org/2000/svg" height="120" viewBox="0 96 960 960" width="120" fill="pink"><path d="m383 746 267-170-267-170v340Zm97 230q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z"/></svg>`
        movieDetails.appendChild(playElement)
        playElement.insertAdjacentHTML('afterbegin', playButton)
        playElement.classList.add('play-button')
    })
    .catch(error => {
        console.error('Erreur de récupération des informations détaillées sur le film', error)
    });

// API IMAGES DU FILM
fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}&language=fr-FRA&include_image_language=fr,null`)
    .then(response => response.json())
    .then(imagesData => {
        const images = imagesData.backdrops.slice(2, 20)
        const imagesMovie = document.querySelector('.images-container')
        images.forEach(image => {
            const imageElement = document.createElement('img')
            imageElement.classList.add('img-movie')
            imageElement.src = image.file_path ? `https://image.tmdb.org/t/p/w500${image.file_path}` : null
            imagesMovie.appendChild(imageElement)
        })
    })
    .catch(error => {
        console.error('Erreur de récupération des informations détaillées sur le film', error)
    });

fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(recommendationsData => {
        const recommendationMovies = recommendationsData.results
        recommendationMovies.forEach(recommendationMovie => {
            const recommendation = document.querySelector('.recommendations-container')
            const rElement = document.createElement('img')
            rElement.classList.add('poster-recommendations')
            rElement.src = recommendationMovie.poster_path ? `https://image.tmdb.org/t/p/w500${recommendationMovie.poster_path}` : null
            rElement.alt = 'Affiche non disponible'
            rElement.setAttribute('data-id', recommendationMovie.id)
            recommendation.appendChild(rElement)

            recommendation.addEventListener('click', (event) => {
                const clickedElement = event.target.closest('.poster-recommendations');
                if (clickedElement) {
                    const movieId2 = clickedElement.getAttribute('data-id')
                    window.location.href = `./detailsOnClick.html?id=${movieId2}`;
                }
            })
        })
    })
    .catch(error => {
        console.error('Erreur de récupération des informations détaillées sur le film', error)
    });

const backButton = document.querySelector('.back-button')
backButton.addEventListener('click', () => {
    history.back()
});


window.onload = () => {
    const newPage = document.querySelector('.transition');
    newPage.classList.add('active');
};



