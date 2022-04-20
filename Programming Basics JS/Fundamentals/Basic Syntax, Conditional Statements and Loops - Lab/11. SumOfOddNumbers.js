function sumOfOddNumbers(num) {

    let sumOdd = 0;
    let counterOdd = num;
    for (let i = 1; i <= counterOdd; i++) {
        if (i % 2 != 0) {
            counterOdd++;
            console.log(i);
            i = Number(i);

        sumOdd+=i;
        }

    }
    console.log(`Sum: ${sumOdd}`)
}
sumOfOddNumbers(3);