"use strict";

const personalMovieDatabase = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDatabase.count = +prompt("Сколько фильмов Вы уже посмотрели?", '');
    
        while (personalMovieDatabase.count === '' || personalMovieDatabase.count === null || isNaN(personalMovieDatabase.count)) {
            personalMovieDatabase.count = +prompt("Сколько фильмов Вы уже посмотрели?", '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDatabase.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDatabase.count < 30 && personalMovieDatabase >= 10) {
            console.log('Вы классический зритель');
        } else if (personalMovieDatabase.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        };
    },
    showMyDB: function(privat) {
        if (!privat) {
            console.log(personalMovieDatabase);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {

        //     let genre = prompt(`Ваш любимый жанр под номером ${i}`, '')
        //     if (genre === '' || genre === null) {
        //         console.log('Вы ввели некорректные данные');
        //         i--;
        //     } else {
        //         personalMovieDatabase.genres[i - 1] = genre;
        //     }
        // };
        
        let genres = prompt("Введите жанры черех запятую", '')

            if (genres === '' || genres === null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieDatabase.genres = genres.split(', ');
                personalMovieDatabase.genres.sort();
            }
        };

        personalMovieDatabase.genres.forEach((element , i) => {
            console.log(`Любимый жанр № ${i+1} - это ${element}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDatabase.privat) {
            personalMovieDatabase.privat = false;
        } else {
            personalMovieDatabase.privat = true;
        }
    }
};

personalMovieDatabase.start();
personalMovieDatabase.showMyDB(personalMovieDatabase.privat);
personalMovieDatabase.rememberMyFilms();
personalMovieDatabase.detectPersonalLevel();
personalMovieDatabase.writeYourGenres();
personalMovieDatabase.toggleVisibleMyDB(personalMovieDatabase.privat);