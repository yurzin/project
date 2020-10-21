const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const moviesDB = {
    number : numberOfFilms,
    movies : {},
    actor : {}
};

const likeFilms = prompt("Ваш любимый фильм?", "");
const likeActor = prompt("Ваш любимый актер?", "");

moviesDB.movies.a = likeFilms;
moviesDB.actor.b = likeActor;

document.querySelector(".film").innerHTML = moviesDB.movies.a;
document.querySelector(".actor").innerHTML = moviesDB.actor.b;
document.querySelector(".count").innerHTML = moviesDB.number;
