function commonEl(arr1, arr2) {

    for (let index = 0; index < arr1.length; index++) {
        let el1 = arr1[index];
        for (let index2 = 0; index2 < arr2.length; index2++) {
            let el2 = arr2[index2];
            if (el1 === el2) {
                console.log(el1);
            }
        }
    }


}
commonEl(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
