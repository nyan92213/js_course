/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.getElementsByClassName('promo__adv')[0].remove();

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'), 
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

genre.textContent = 'Драма';

document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")'

// poster.style.backgroundImage = 'url("img/bg.jpg")'

// intItems.forEach(function (item) {
//     intItems[item].textContent = movieDB.movies[item];
// });

movieDB.movies.sort();

movieList.innerHTML = "";

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item"> ${i + 1}. ${film}
        <div class="delete"></div>
    </li>
    `;
})

// const intItems = document.querySelectorAll('.promo__interactive-item');

// for (let i = 0; i < intItems.length; i++) {
//     intItems[i].textContent = `${i + 1}. ${movieDB.movies[i]}`;
//     // console.log(intItems[i], movieDB.movies[i]);
// }
