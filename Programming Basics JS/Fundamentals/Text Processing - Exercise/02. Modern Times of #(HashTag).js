function hashTag(input) {
  let text = input.split(" ");
  for (let  element of text) {
    let hasNumber = false;
    if (element.includes("#") && element.length > 1) {
      for (let char of element) {
        if(char.charCodeAt()>=48 && char.charCodeAt()<=57) {
          hasNumber =true;
          break;
        }
      }
      if(hasNumber){
        continue;
      }else{
        console.log(element.substring(1));
      }
      
    }
   
  }
}

hashTag("Nowadays everyone uses # to tag a #special #speci213al word in #socialMedia");
