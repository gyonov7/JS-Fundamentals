function censoredFun (text,word){

// let censored = text.replace(word,'*'.repeat(word.length));
// console.log(censored);


console.log(text.
    split(word).
    join('*'.repeat(word.length)));
}

censoredFun('A small sentence small with some words', 'small');
