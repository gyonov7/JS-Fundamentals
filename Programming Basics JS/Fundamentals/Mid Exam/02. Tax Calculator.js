function taxCalculator(input) {
  let tokens = input.join(">>").split(">>");
  let tax = 0;
  let totalTax=0;
  while (tokens.length>0) {
    let currToken = tokens.shift().split(" ");

    for (let index = 0; index < currToken.length; index++) {
      let carType = currToken.shift();
      let yearsOfUse = Number(currToken.shift());
      let km = Number(currToken.shift());
     
        if (carType =='family') {
            tax = Math.floor(km/3000)*12+(50-yearsOfUse*5);
            console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
        }else if (carType =='heavyDuty') {
            tax = Math.floor(km/9000)*14+(80-yearsOfUse*8);
            console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
        }else if (carType =='sports') {
            tax = Math.floor(km/2000)*18+(100-yearsOfUse*9);
            console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
        }else{
            console.log('Invalid car type.');
        }
totalTax+=tax;
tax=0;
    }
  }

  console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);
}

taxCalculator(["family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410"]);
