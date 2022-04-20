function repeat (string, count){
let resArr = [];

    for (let index = 0; index < count; index++) {
        for (let i = 0; i < string.length; i++) {
            resArr.push(string[i]);
            
        }
       
    }
   return resArr.join("");
}

console.log(repeat("String", 2));
