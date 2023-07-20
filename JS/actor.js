const apiKey = '733849af665437d209d039fca8dfd13a';

const searchParams = new URLSearchParams(window.location.search);
const actorId = searchParams.get('id');
//const previousPage = 
// Effectue une requête à l'API de The Movie Database pour récupérer les informations détaillées sur le film
fetch(`https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}&language=fr-FRA`)
    .then(response => response.json())
    .then(actorData => {

        fetch(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${apiKey}&language=fr-FRA`)
            .then(response => response.json())
            .then(movieData => {

            // PROFIL PATH
            const actorDetails = document.querySelector('.actor-details')
            const profilePath = document.createElement('img')
            profilePath.src = `https://image.tmdb.org/t/p/w185/${actorData.profile_path}`
            actorDetails.insertAdjacentElement('afterbegin', profilePath)

            //ACTOR NAME
            const actorNameData = actorData.name
            const titleNameEl = document.querySelector('h1')
            titleNameEl.textContent = actorNameData
            const actorNameEl = document.querySelector('.actor-name')
            actorNameEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 96 960 960" width="60" fill="white"><path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5T731 696q31 14 50 41t19 65v94H160Z"/></svg> 
            ${actorNameData}`

            // BIRTHDATE
            const birthdayData = actorData.birthday
            const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
            const formattedReleaseDate = new Date(birthdayData).toLocaleDateString('fr-FR', options);
            const birthdayEl = document.querySelector('.birthday')
            birthdayEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 96 960 960" width="60" fill="white"><path d="M160 976q-17 0-28.5-11.5T120 936V717q0-24.75 17.625-42.375T180 657h600q24.75 0 42.375 17.625T840 717v219q0 17-11.5 28.5T800 976H160Zm47-379V475q0-24.75 17.625-42.375T267 415h183v-64q-20-14-30.5-30.534T409 280.589q0-14.589 5.5-28.089Q420 239 430 229l50-53 50 53q10 10 16 23.5t6 28.089q0 23.343-11 39.877Q530 337 510 351v64h183q24.75 0 42.375 17.625T753 475v122H207Z"/></svg>
            ${formattedReleaseDate}`

            //BIRTHPLACE
            const birthplace = actorData.place_of_birth
            const birthplaceEl = document.querySelector('.birthplace')
            birthplaceEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 96 960 960" width="60" fill="white"><path d="M480.089 566Q509 566 529.5 545.411q20.5-20.588 20.5-49.5Q550 467 529.411 446.5q-20.588-20.5-49.5-20.5Q451 426 430.5 446.589q-20.5 20.588-20.5 49.5Q410 525 430.589 545.5q20.588 20.5 49.5 20.5ZM480 976Q319 839 239.5 721.5T160 504q0-150 96.5-239T480 176q127 0 223.5 89T800 504q0 100-79.5 217.5T480 976Z"/></svg>
            ${birthplace}`

            //BIOGRAPHY 
            const biographyEl = document.querySelector('.biography')
            const biographyTextEl = document.createElement('p')
            biographyTextEl.textContent = actorData.biography ? actorData.biography : 'Biographie non disponible'
            biographyEl.insertAdjacentElement('beforeend', biographyTextEl)

            //MOVIE
            const moviesContainer = document.querySelector('.movies-container')
            const moviesResults = movieData.cast
            // POSTER MOVIE
            moviesResults.forEach(movieResult => {
                const posterEl = document.createElement('img')
                posterEl.src = movieResult.poster_path ? `https://image.tmdb.org/t/p/w500${movieResult.poster_path}` : null
                posterEl.setAttribute('data-id', movieResult.id)
                posterEl.classList.add('poster')
                moviesContainer.appendChild(posterEl)
                // CLICKED MOVIE
                moviesContainer.addEventListener('click', (event) => {
                    const clickedElement = event.target.closest('.poster');
                    if (clickedElement) {
                        const movieId = clickedElement.getAttribute('data-id')
                        window.location.href = `./dRecommandation.html?id=${movieId}`;
                    }
                })
            })
        })
    })
    .catch(error => {
        console.error('Erreur de récupération des informations détaillées sur le film', error)
    });

window.onload = () => {
    const newPage = document.querySelector('.transition');
    newPage.classList.add('active');
};

const backButton = document.querySelector('.back-button')
const previousPage = searchParams.get('movieId');

backButton.addEventListener('click', () => {
    window.location.href = `./detailsOnClick.html?id=${previousPage}`;
});
