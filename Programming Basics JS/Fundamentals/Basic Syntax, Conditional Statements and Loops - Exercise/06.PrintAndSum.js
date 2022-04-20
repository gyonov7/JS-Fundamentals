function printAndSum(startNum, endNum) {
    let line = "";
    let sum = 0;

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        line+=i+" ";

    }

    console.log(line);
    console.log(`Sum: ${sum}`);


}

printAndSum(5, 10);
