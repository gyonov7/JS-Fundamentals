function cats(inputArray) {
  let catsss = [];

  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      }
      meow(){
      console.log(`${this.name}, age ${this.age} says Meow`);
      }
    
  }

  for (let index = 0; index < inputArray.length; index++) {
    let catData = inputArray[index].split(" ");
    let name, age;
    [name, age] = [catData[0], catData[1]];
    catsss.push(new Cat(name, age));
  }

  for (let tokens of catsss) {
      tokens.meow()
  }

}

cats(["Mellow 2", "Tom 5"]);
