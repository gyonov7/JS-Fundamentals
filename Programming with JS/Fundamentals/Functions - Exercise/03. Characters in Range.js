function charactersInRange(char1, char2) {

    let starChar = Math.min(char1.charCodeAt(0),char2.charCodeAt(0));
    let endChar = Math.max(char1.charCodeAt(0),char2.charCodeAt(0));
let charInArr =[];
    for (let index = starChar +1; index < endChar; index++) {
        let currChar =charInArr.push(String.fromCharCode(index));
        
    }
    console.log(charInArr.join(" "));
}

charactersInRange("a", "d");
