function fullName(input) {
  
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

let match = input.match(pattern);
console.log(match.join(' '));
}

fullName("Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov, Ivan	Ivanov");
