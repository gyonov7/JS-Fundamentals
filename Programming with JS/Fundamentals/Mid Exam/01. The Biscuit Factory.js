function biscuitFactory(input) {
  let biscuitsPerDayPerWorker = Number(input.shift());
  let workers = Number(input.shift());
  let otherFactorySum = Number(input.shift());

  let myFactorySum = 0;

  for (let index = 1; index <= 30; index++) {
    if (index%3==0) {
        myFactorySum += Math.floor((biscuitsPerDayPerWorker * workers)*0.75);
    }else{
    myFactorySum += biscuitsPerDayPerWorker * workers;
    }
  }
  console.log(`You have produced ${myFactorySum} biscuits for the past month.`);

  if (myFactorySum >otherFactorySum) {
    console.log(`You produce ${((myFactorySum/otherFactorySum-1)*100).toFixed(2)} percent more biscuits.`);
  }else{
    console.log(`You produce ${((1-myFactorySum/otherFactorySum)*100).toFixed(2)} percent less biscuits.`);
  }
}

biscuitFactory((["163",
"16",
"67020"])

);
