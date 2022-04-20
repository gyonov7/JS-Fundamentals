function telNumber (input){
let pattern = /(?:\s|^)\+359( |-|)2\1\d{3}\1\d{4}\b/g;

let matched = pattern.exec(input[0]);

let result = [];

while(matched!=null){

    result.push(matched[0].trim());
    
    matched=pattern.exec(input[0]);

}
console.log(result.join(', '));
}


telNumber(["+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"]);
