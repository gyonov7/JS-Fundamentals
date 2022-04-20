function bombNumbers(area, bombSpecs) {
  let bomb = bombSpecs.shift();
  let force = bombSpecs.shift();

  let indexBomb = area.indexOf(bomb);
  
  while(indexBomb!==-1){
      let startExplosionIndex = Math.max(0,indexBomb-force);
      
      let endExplosionIndex = force*2+1;

      area.splice(startExplosionIndex,endExplosionIndex);
      indexBomb=area.indexOf(bomb);
  }

  area.map(Number);
  let sum = 0;
  for (const iterator of area) {
    sum += iterator;
  }
  console.log(sum);
}

bombNumbers([1, 4, 4, 2, 8, 9, 1],
[9, 3]);

