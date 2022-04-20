function wall(input) {
  let moreWorkNeeded = true;
let counter=0;
let initialInput =input.slice();
let workedToday;
let workedTodayToPrint=[];
  while (moreWorkNeeded) {
     workedToday=[];
    let filtered = input.filter((x) => x < 30);
    if (filtered.length === 0) {
        moreWorkNeeded = false;
        break;
      }
    if (filtered.length === initialInput.length) {
        workedToday.push(initialInput.length*195) ;
    }else{
        workedToday.push(filtered.length*195);
    }
    
    let mappedWithOne= filtered.map(x=>x+1);



    input=mappedWithOne;
    workedTodayToPrint.push( ...workedToday);
    
    counter++;
    
}
console.log(workedTodayToPrint.join(', '));
  let cubicSum =0;
for (let index = 0; index < workedTodayToPrint.length; index++) {
    cubicSum+= Number(workedTodayToPrint[index]);
    
    
}
console.log(cubicSum*1900 + " pesos");
}
wall([17]);
