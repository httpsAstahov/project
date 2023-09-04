'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const lastFilm = prompt('Назовите один из последних просмотренных фильмов:', '');
const rate = +prompt('На сколько оцените его ?:', '');
const lastFilmSecond = prompt('Назовите один из последних просмотренных фильмов:', '');
const rateSecond = +prompt('На сколько оцените его ?:', '');

personalMovieDB.movies[lastFilm] = rate;
personalMovieDB.movies[lastFilmSecond] = rateSecond;

console.log(personalMovieDB);
