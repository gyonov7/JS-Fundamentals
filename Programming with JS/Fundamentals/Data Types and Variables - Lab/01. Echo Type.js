function echoType(textInput) {
console.log(typeof textInput);
    if(typeof textInput=== 'string' || typeof textInput==='number' ){
console.log(textInput);
    }else{
        console.log('Parameter is not suitable for printing');
    }
}

echoType('Hello, JavaScript!');
echoType(18);
echoType(null);