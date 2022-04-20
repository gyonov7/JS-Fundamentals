function stringSubstring(word, text) {
text = text.toLocaleLowerCase().split(' ');
word = word.toLocaleLowerCase();

for(let currWord of text){
    if(currWord==word){
        console.log(word);
        return;
    }
}
console.log(`${word} not found!`);
}
stringSubstring("hand", "JavaScript is hand the best hand programming language");
