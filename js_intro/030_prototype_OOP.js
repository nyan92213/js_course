"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello");
    }
};


// Устаревшее объявление
// const john = {
//     health: 100,
// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

// john.sayHello()

const john = Object.create(soldier);

john.sayHello()


const personalMovieDatabase = {
    count: [],
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');
        }
        personalMovieDatabase.count = numberOfFilms;
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const filmName = prompt('Один из последних просмотренных фильмов', '').trim(),
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
        for (let i = 1; i <= 3; i++) {
            GoTo: personalMovieDatabase.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '').trim();
            if (personalMovieDatabase.genres === '') {
                i--;
            }
        };
        let k = 1;
        personalMovieDatabase.genres.forEach((element) => console.log(`Любимый жанр № ${k} - это ${element}`));
        k++;
    },
    toggleVisibleMyDB: function(toggle) {
        if (toggle) {
            personalMovieDatabase.privat = !toggle;
        }
    }
};

personalMovieDatabase.start();
personalMovieDatabase.showMyDB(personalMovieDatabase.privat);
personalMovieDatabase.rememberMyFilms();
personalMovieDatabase.detectPersonalLevel();
personalMovieDatabase.writeYourGenres();
personalMovieDatabase.toggleVisibleMyDB(personalMovieDatabase.privat);


