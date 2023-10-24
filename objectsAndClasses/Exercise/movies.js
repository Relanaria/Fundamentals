function movies(arr) {
  let movies = [];

  class kino {
    constructor(name, director, date) {
      this.name = name.trim();
      this.director = director;
      this.date = date;
    }
  }

  for (const element of arr) {
    let command = element.split(" ");
    let index = command.indexOf("directedBy");
    let index2 = command.indexOf("onDate");

    if (command[0] === "addMovie") {
      let movieName = command.slice(1).join(" ");
      movies.push(new kino(movieName, undefined, undefined));
    }else if (command[index] === "directedBy") {
      let nameOfMovie = command.splice(0, index).join(" ");
      index = command.indexOf("directedBy");
      movies.forEach((element) => {
        if (element.name === nameOfMovie) {
          element.director = command.slice(index + 1).join(" ");
        }
      });
    }else if (command[index2] === "onDate") {
      let nameOfMovie = command.splice(0, index2).join(" ");
      index = command.indexOf("directedBy");
      movies.forEach((element) => {
        if (element.name === nameOfMovie) {
          element.date = command[command.length - 1];
        }
      });
    }
  }

  movies.forEach((key) => {
    if (
      key.name !== undefined &&
      key.date !== undefined &&
      key.director !== undefined
    ) {
      console.log(JSON.stringify(movies));
    }
  });
}

movies([
  'addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  'Batman onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen'
  ])
  ;
