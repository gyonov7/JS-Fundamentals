function replaceChars (input){
input = input.split('');
//console.log(input);
    let result= [];

    let currChar='';
    for(let index = 0; index < input.length; index++){
        let char = input[index];
        if(char==input[index+1]){
            currChar=char;
        }else{
            result.push(char);
            
        }
    }
    console.log(result.join(''));
}

replaceChars('aabbcdddeeedssaa');
