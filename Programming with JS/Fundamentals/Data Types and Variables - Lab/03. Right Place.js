function rightPlace(word, char, result) {
  let res = "";

  for (let i = 0; i < word.length; i++) {
    let current = word[i];
    if (current == "_") {
      current = char;
    }
    res+=current;
  }

  
  console.log(res==result?"Matched" : "Not Matched");
}

rightPlace("Str_ng", "I", "Strong");
//rightPlace('Str_ng', 'i', 'String');
