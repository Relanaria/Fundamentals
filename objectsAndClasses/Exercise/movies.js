function movies(arr) {
  let movies = [];

  class kino {
    constructor(name, director, date) {
      this.name = name;
      this.director = director;
      this.date = date;
    }
  }

  movies.push(new kino("kiro", "kirev", 5))

  for (const element of arr) {
    console.log(element.name);
  }
}

movies([
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
