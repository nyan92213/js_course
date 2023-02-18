"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');

const personalMovieDatabase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('Какуюоценку поставите этому фильму?', ''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('Какуюоценку поставите этому фильму?', '');

personalMovieDatabase.movies[a] = b;
personalMovieDatabase.movies[c] = d;

console.log(personalMovieDatabase);




