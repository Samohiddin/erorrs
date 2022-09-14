"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function rememberMyFilms() {
    let i = 0;

    while (i < 1) {
        const a = prompt("Один из последних просмотренных фильмов?", ''); 
    const b = +prompt("На сколько оцените его?", '');
     i++;
        if (a !== '' && b !== '' && a !== null && b !== null && a.length > 5) {
            personalMovieDB.movies[a] = b; 
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersenalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30 ) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersenalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat); 

function writeYourGenres(numGenrs) {
       for (let i = 1; i <=3; i++) {
        let sayOne = prompt(`Ваш любимый жанр под номером ${i}`, '').trim();
             if (sayOne !== '' && sayOne !== null) {
               
                personalMovieDB.genres[i - 1] = sayOne;
           }
           else {
               console.log('ERROR');
               i--;
           }
       }
}

writeYourGenres();


// console.log(personalMovieDB);