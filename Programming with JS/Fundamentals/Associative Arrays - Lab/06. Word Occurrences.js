function words(input) {
  let result = {};

  for (let word of input) {
    if (result.hasOwnProperty(word) == false) {
      result[word] = 1;
    } else {
    //   let existing = result.get(word);
    //   result.set(word, (existing += 1));
    result[word]+=1; 
    }
  }
  let entries = Object.entries(result).sort((a,b)=> b[1]-a[1]);
  for(let [word,qty] of entries){
      console.log(`${word} -> ${qty} times`);
  }


}

words([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
