////////////////////   S E L E C T E D   M O V I E   S T Y L I N G   ////////////////////
function addOnMovieClickEvents() {
    const movies = document.querySelectorAll(".movie");
    const selectBackgrounds = document.querySelectorAll(".textInfo");
    const selectedIcons = document.querySelectorAll(".selectedIcon");

    movies.forEach( (movie, index) => {
        movie.addEventListener("click", (e) => {
            if (!e.target.classList.contains("movieName")) {
                setMovieStyles(movie, selectBackgrounds.item(index), selectedIcons.item(index));
                setIdsToSessionStorage();
            }
        })
    })
}

function setMovieStyles(movie, selectBackground, selectIcon) {
    selectIcon.classList.toggle("visible");
    selectBackground.classList.toggle("selected");
    movie.toggleAttribute("isFavorite");
}

/////////////////////   G E T   S E L E C T E D   M O V I E S   //////////////////////////
function getSelectedMovies() {
    const movies = document.querySelectorAll(".movie");
    const arrayToSend = [];

    movies.forEach(movie => {
        if(movie.hasAttribute("isFavorite")) {
            arrayToSend.push(parseInt(movie.getAttribute("dataMovieId")));
        }
    })
    return arrayToSend;
}

////////////////////   S E T   S E L E C T E D   M O V I E S   /////////////////////////////////
function selectAllSelectedMovies() {
    if(getIdsFromSessionStorage().length) {
        const movies = document.querySelectorAll(".movie");
        const selectBackgrounds = document.querySelectorAll(".textInfo");
        const selectedIcons = document.querySelectorAll(".selectedIcon");

        movies.forEach((movie, index) => {
            if(getIdsFromSessionStorage().includes(parseInt(movie.getAttribute("dataMovieId")))) {
                setMovieStyles(movie, selectBackgrounds.item(index), selectedIcons.item(index));
            }
        })
    }
}

//////////////////////   S E T / G E T   S E L E C T E D   M O V I E   I D S   ////////////////////////////
function setIdsToSessionStorage() {
   window.sessionStorage.setItem("selectedMovies", JSON.stringify(getSelectedMovies()));
}
function getIdsFromSessionStorage() {
    return JSON.parse(window.sessionStorage.getItem("selectedMovies"));
}

export default [addOnMovieClickEvents, selectAllSelectedMovies];