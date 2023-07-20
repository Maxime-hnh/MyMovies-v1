const apiKey = '733849af665437d209d039fca8dfd13a';
const searchParams = new URLSearchParams(window.location.search);
const searchQuery = searchParams.get('search');
const moviesContainer = document.querySelector('.movies')

fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&page=1&language=fr-FRA`)
    .then(response => response.json())
    .then(moviesData => {

        const moviesDataResult = moviesData.results.slice(0, 10)

        moviesDataResult.forEach(movie => {
            const containerEl = document.createElement('div')
            containerEl.classList.add('container-movie')

            // AFFICHE DU FILM
            const posterEl = document.createElement('img')
            posterEl.classList.add('poster-movie')
            posterEl.src = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null
            posterEl.alt = 'Affiche non disponible'
            containerEl.appendChild(posterEl)

            // CONTAINER INFO 
            const infoContainer = document.createElement('div')
            infoContainer.classList.add('info-container')
            containerEl.appendChild(infoContainer)

            //TITRE DU FILM
            const titleEl = document.createElement('h2')
            titleEl.textContent = movie.title
            infoContainer.appendChild(titleEl)

            // DATE DE SORTIE
            const releaseDateContainer = document.createElement('div')
            releaseDateContainer.classList.add('releaseDate-Container')
            releaseDateContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="44" viewBox="0 96 960 960" width="44" fill="#ffffff80"><path d="M180 976q-24 0-42-18t-18-42V296q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600V486H180v430Zm0-490h600V296H180v130Zm0 0V296v130Z"/></svg>'
            const releaseDateEl = document.createElement('p')
            const formattedReleaseDate = new Date(movie.release_date).toLocaleDateString('fr-FR', {year: 'numeric', month: 'numeric', day: 'numeric'});
            releaseDateEl.textContent = formattedReleaseDate;
            releaseDateContainer.appendChild(releaseDateEl)
            infoContainer.appendChild(releaseDateContainer)

            //NOTE DU FILM
            const noteContainerEl = document.createElement('div')
            noteContainerEl.classList.add('movie-note')
            const noteEl = document.createElement('p')
            noteContainerEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 96 960 960" width="60" fill="orange"><path d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"/></svg>'
            noteEl.textContent = movie.vote_average ? movie.vote_average.toFixed(1) : null
            noteContainerEl.appendChild(noteEl)
            infoContainer.appendChild(noteContainerEl)

            //
            moviesContainer.appendChild(containerEl)

            // EVENT CLICK 
            posterEl.addEventListener('click', () => {
                const movieId = movie.id;
                window.location.replace(`./detailsOnClick.html?id=${movieId}`);
            })
        })
    })
    .catch(error => {
        console.error('Erreur de recherche de film', error)
    })

const backButton = document.querySelector('.back-button')
backButton.addEventListener('click', () => {
    window.location.href='../index.html'
});

window.onload = () => {
    const newPage = document.querySelector('.transition');
    newPage.classList.add('active');
}