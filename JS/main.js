const apiKey = '733849af665437d209d039fca8dfd13a';
const searchInput = document.querySelector(".search-movie");


searchInput.addEventListener('search', () => {
    const searchQuery = searchInput.value;
        window.location.replace(`./Pages/resultSearch.html?query=${searchQuery}`);
})

const searchButton = document.querySelector('#search-button')
 
searchButton.addEventListener('click', () => {
    searchInput.style.opacity = '1'
    searchInput.style.width = '80vw'
    searchInput.style.transform = 'scaleX(1)'
    searchInput.focus();
    searchButton.style.opacity = '0'

})

searchInput.addEventListener('blur', () => {
    searchInput.style.transform = 'scaleX(0)'

    searchInput.style.transition = 'transform 0.2s ease-in-out'
    searchButton.style.opacity = '1'
    searchButton.style.transition = 'opacity 0.3s ease'
})

