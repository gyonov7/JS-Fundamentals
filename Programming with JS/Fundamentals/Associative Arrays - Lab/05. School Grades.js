function school(input) {
  let result = new Map();

  for (let line of input) {
    let lines = line.split(" ");
    let student = lines.shift();
    let grades = lines.map(Number);
    let sum = 0;

    if (result.has(student) == false) {
      result.set(student, []);
    }
    let existing = result.get(student);
    for (let grade of grades) {
      existing.push(grade);
    }
  }
 

  let sorted = Array.from(result).sort((a, b) => a[0].localeCompare(b[0]));
  
  for (let [name, grades] of sorted) {
    let av = 0;
    for (let grade of grades) {
      av += grade;
    }
    av /= grades.length;

    console.log(`${name}: ${av.toFixed(2)}`);
  }
}

school([
  "Lilly 4 6 6 5",
  "Tim 5 6",
  "Tammy 2 4 3",
  "Tim 6 6",
  "Tammy 4",
  "Amy 4 4 4 4 4 6 6 6",
]);
console.log("---");
school(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
