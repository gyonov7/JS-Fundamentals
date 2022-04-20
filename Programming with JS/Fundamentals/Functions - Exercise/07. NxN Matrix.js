function matrix(n) {
  
  for (let col = 1; col <= n; col++) {
    let result = [];
    for (let row = 1; row <= n; row++) {
      result.push(n);
    }
    console.log(result.join(' '));
  }
}
matrix(3);
console.log("----------");
matrix(7);
