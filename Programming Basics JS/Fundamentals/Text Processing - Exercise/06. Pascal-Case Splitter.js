function replaceWords(input) {
  input = input.split("");
  let wordArr = [];
let sentence = [];
  for(let word of input){
    if(word.toLowerCase()=== word){
      wordArr.push(word);
    }else{
      sentence.push(wordArr);
      wordArr=[];
      wordArr.push(word);
    }
  }
  sentence.push(wordArr);

  let result = [];
  for(let word of sentence){
    result.push(word.join(''));
  }
  console.log(result.splice(1).join(', '));
}

replaceWords("SplitMeIfYouCanHaHaYouCantOrYouCan");
replaceWords('HoldTheDoor');
