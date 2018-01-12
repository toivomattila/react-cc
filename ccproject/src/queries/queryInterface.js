/*
  This is an interface for personalised queries of the supported streaming 
  services
  Currently only loads data from a local json file
*/
const movies = require("./movies.json")

function queryYle(){
    return movies[0];
}
function queryRuutu(){
    return movies[1];
}
function queryTV(){
    return movies[2];
}
function queryKatsomo(){
    return movies[3];
}
function queryMostWatched(){
    let movies = [];
      Array.prototype.push.apply(movies, queryTV().filter(movie => movie.Title.toLowerCase().indexOf("air") !== -1));
      Array.prototype.push.apply(movies, queryYle().filter(movie => movie.Title.toLowerCase().indexOf("air") !== -1));
      Array.prototype.push.apply(movies, queryKatsomo().filter(movie => movie.Title.toLowerCase().indexOf("air") !== -1));
      Array.prototype.push.apply(movies, queryRuutu().filter(movie => movie.Title.toLowerCase().indexOf("air") !== -1));
      return movies;
}

module.exports = {queryKatsomo,
                queryTV,
                queryRuutu,
                queryYle,
                queryMostWatched
};