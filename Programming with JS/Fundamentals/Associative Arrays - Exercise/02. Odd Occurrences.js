function oddApp(input) {
  let result = {};
  let entries = input.split(" ");
  for (let curr of entries) {
    let currEl = curr.toLocaleLowerCase();
    if(result.hasOwnProperty(currEl)==false){
    result[currEl] = 0;
    }
    result[currEl]+=1; 
  }
  let oddValuesArray = Object.entries(result);
  let finalResult = [];
  for(let [key,value]of oddValuesArray){
      if(value%2==1){
          finalResult.push(key);
      }
  }
  console.log(finalResult.join(' '));
}

oddApp("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddApp('Cake IS SWEET is Soft CAKE sweet Food');
