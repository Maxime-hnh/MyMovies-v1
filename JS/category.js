const apiKey = '733849af665437d209d039fca8dfd13a';

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })