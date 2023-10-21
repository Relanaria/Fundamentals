function cats(arr) {
  let cats = [];

  class cat {
    constructor(catName, catAge) {
      this.name = catName;
      this.age = catAge;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let catData = arr[i].split(" ");
    cats.push(new cat(catData[0], catData[1]));
  }

  for (const cat of cats) {
    cat.meow();

    //catData.forEach(cat => {cat.meow();})
  }
}

cats(["Candy 1", "Poppy 3", "Nyx 2"]);
