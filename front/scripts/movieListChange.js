/////////////////  I N - H T M L   C O M P O N E N T   V I E W   //////////////////////

// <div className="movie" style="background-image: url(imgURL);">
//     <div className="textInfo">
//          <span class="ageRating">ageRating</span>
//         <span className="movieName">Name(Year)</span>
//         <span className="movieRate">(grade) stars</span>
//     </div>
// </div>


//////////////////   A D D   N E W   M O V I E   T O   L I S T   /////////////////////////
const movieList = document.querySelector("div.movieList");

function createListAdder(list) {
    return (movieId, movieName, movieAgeRating, movieYear, movieGrade) => {
        let newMovie = document.createElement("div");
        newMovie.classList.add("movie");
        newMovie.style.backgroundImage = `url(/front/assets/fightClub.jpg)`;
        newMovie.setAttribute("dataMovieId", movieId.toString());

        let textContainer = document.createElement("div");
        textContainer.classList.add("textInfo");

        let movieAgeRatingSpan = document.createElement("span");
        movieAgeRatingSpan.classList.add("ageRating");
        movieAgeRatingSpan.innerText = `${movieAgeRating}+`;

        let movieNameSpan = document.createElement("span");
        movieNameSpan.classList.add("movieName");
        movieNameSpan.innerText = `${movieName} (${movieYear})`;

        let movieRateSpan = document.createElement("span");
        movieRateSpan.classList.add("movieRate");
        let rateText = `(${movieGrade}) `;
        for(let i = 0; i < Math.round(movieGrade); i++) {
            rateText += "★";
        }
        movieRateSpan.innerText = rateText;

        textContainer.appendChild(movieAgeRatingSpan);
        textContainer.appendChild(movieNameSpan);
        textContainer.appendChild(movieRateSpan);

        newMovie.appendChild(textContainer);

        list.appendChild(newMovie);
    }
}

const addMovie = createListAdder(movieList);

//////////////////////////////////////   C L E A R    M O V I E   L I S T   //////////////////////////////////////

function createListCleaner(list) {
    return () => list.innerHTML = "";
}

const clearMovieList = createListCleaner(movieList);

export default [addMovie, clearMovieList];