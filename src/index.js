const startApp = () => {
    const searchForm = document.querySelector("form");
  
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the form from refreshing the page
      const searchInput = document.querySelector("input#searchByID");
  
      // Fetch data for the movie with the specified ID
      fetch(`http://localhost:3000/movies/${searchInput.value}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Movie not found'); // Handle case when movie ID is not found
          }
          return response.json();
        })
        .then((movieData) => {
          // Display the movie details on the page
          const movieTitle = document.querySelector("section#movieDetails h4");
          const movieSummary = document.querySelector("section#movieDetails p");
  
          movieTitle.innerText = movieData.title;
          movieSummary.innerText = movieData.summary;
        })
        .catch((error) => {
          console.error(error);
          const movieTitle = document.querySelector("section#movieDetails h4");
          const movieSummary = document.querySelector("section#movieDetails p");
  
          movieTitle.innerText = "Movie not found";
          movieSummary.innerText = "";
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", startApp);
  