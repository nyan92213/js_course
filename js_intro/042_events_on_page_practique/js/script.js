'use strict';

document.addEventListener('DOMContentLoaded', () =>{

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    }
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'), 
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          addBtn = addForm.querySelector('button'),
          favoriteFilm = addForm.querySelector('[type="checkbox"]');
    
    const makeChanges = () => {
        genre.textContent = 'Драма';
        document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")';
    }
    
    const sortArr = (arr) => {
        arr.sort();
    }

    function UpdMovieList(film) {
        movieDB.movies.push(film);
        sortArr(movieDB.movies);
        if (favoriteFilm.checked) {
            console.log('Добавляем любимый фильм');
        }
        movieListRefactor(movieDB.movies, movieList);
    }
    
    function movieListRefactor(films, parent) {
        parent.innerHTML = ""

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item"> ${i+1}. ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) =>{
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                movieListRefactor(films, parent);
            })
        })
    }
    
    addBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let newFilmName = addInput.value;
        if (newFilmName) {
            if (newFilmName.length > 21) {
                newFilmName = `${newFilmName.substring(0, 22)}...`;
            }
            UpdMovieList(newFilmName); 
            addForm.reset();
        }
    });

    const start = () => {
        deleteAdv(adv);
        movieListRefactor(movieDB.movies, movieList);
        makeChanges();
    }

    start();
});

