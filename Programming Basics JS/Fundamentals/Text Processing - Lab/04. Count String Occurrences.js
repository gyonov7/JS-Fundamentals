function countOccurrences(text, word) {
    let splitted = text.split(' ');
    let counter=0;

    for(let currWord of splitted){

        if(currWord === word){
            counter++;
        }
    }
    console.log(counter);
}

countOccurrences("This is a word and it also is a sentence", "is");
