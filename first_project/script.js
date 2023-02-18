"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');

const personalMovieDatabase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

films: for (let i = 0; i < 2; i++) {
    const filmName = prompt('Один из последних просмотренных фильмов', ''),
          filmRaiting = +prompt('Какуюоценку поставите этому фильму?', '');

    if (filmName != null && filmRaiting != null && filmName != '' && filmRaiting != '' && filmName.length < 50) {
        personalMovieDatabase.movies[filmName] = filmRaiting;
        console.log('correct');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDatabase.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDatabase.count < 30 && personalMovieDatabase >= 10) {
    console.log('Вы классический зритель');
} else if (personalMovieDatabase.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
};

console.log(personalMovieDatabase);
