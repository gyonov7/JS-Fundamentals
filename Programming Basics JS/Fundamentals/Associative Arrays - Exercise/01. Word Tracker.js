function wordsTracker(input) {
  let words = input.shift().split(" ");
  let result = new Map();

  for (let word of words) {
     result.set(word,0)
  }
  for(let word of input){
      if(result.has(word)){
          let existing = result.get(word);
          result.set(word,existing+=1);
      }
  }
  let sorted = Array.from(result).sort((a,b)=> b[1]-a[1]);
  console.log(sorted);
  for(let [word,value]of sorted){
      console.log(word, '-',value);
  }
}


wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
