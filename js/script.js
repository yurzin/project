const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const moviesDB = {
    number : numberOfFilms,
    movies : {},
    actor : {}
};

const likeFilms = prompt("Ваш любимый фильм?", "");
const likeActor = prompt("Ваш любимый актер?", "");

moviesDB.movies = likeFilms;
moviesDB.actor = likeActor;

document.querySelector(".film").innerHTML = moviesDB.movies;
document.querySelector(".actor").innerHTML = moviesDB.actor;
document.querySelector(".count").innerHTML = moviesDB.number;
