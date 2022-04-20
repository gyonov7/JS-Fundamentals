function triplesOfLatin(num) {
  num = Number(num);

  let result = "";

  for (let i = 0; i < num; i++) {
     
    
    for (let j = 0; j < num; j++) {
        
      for (let k = 0; k < num; k++) {
        letter1 = String.fromCharCode(97+i);
        letter2 = String.fromCharCode(97+j);
        letter3 = String.fromCharCode(97+k);

        console.log(`${letter1}${letter2}${letter3}`);
        
         

      }
      
    }
    
  }
  
}
triplesOfLatin("2");
