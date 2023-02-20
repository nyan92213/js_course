"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');
    }
}

start();

const personalMovieDatabase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const filmName = prompt('Один из последних просмотренных фильмов', ''),
//               filmRaiting = +prompt('Какуюоценку поставите этому фильму?', '');
    
//         if (filmName != null && filmRaiting != null && filmName != '' && filmRaiting != '' && filmName.length < 50) {
//             personalMovieDatabase.movies[filmName] = filmRaiting;
//             console.log('correct');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms()

// function detectPersonalLevel() {
//     if (personalMovieDatabase.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDatabase.count < 30 && personalMovieDatabase >= 10) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDatabase.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     };
// }

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDatabase);
    }
}

showMyDB(personalMovieDatabase.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDatabase.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();