
  const searchText = document.querySelector(".search_text");
  
  searchText.addEventListener("keydown", (event) => {
    const {keyCode} = event;

    keyCode === 13 && searchMovie(event.target.value);
  })

  
  async function searchMovie(searchText){
    const request = await fetch(`http://www.omdbapi.com/?apikey=ddb3be95&s=${searchText}`);
    const data = await request.json();

    let movies = data.Search.map(movie => {
        return {
            title: movie.Title,
            description: `${movie.Year}/${movie.Type}`,
            imdbID: movie.imdbID,
            poster: movie.Poster,
            isFavourite: false
        }
    })

    prepareMovies(movies)
    
  }

  function prepareMovies(movies){
    movies.forEach((movie) => {
        let movieCard = document.createElement("movie-card");
        movieCard.setAttribute("title", movie.title);
        movieCard.setAttribute("poster", movie.poster)
        movieCard.setAttribute("isFavourite", movie.isFavourite)
        movieCard.innerHTML = movie.description;
        document.querySelector("#movies").append(movieCard);
    })
  }
