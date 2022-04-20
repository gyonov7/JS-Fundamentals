function sortingByTwoCriteria(array) {

array.sort((c,d)=>c.localeCompare(d));
console.log(array.sort((a,b)=>a.length-b.length).join('\n'));

}
// Deny
// omen
// test
// Default



sortingByTwoCriteria(['alpha', 'beta', 'gamma']);
console.log('----------');
sortingByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log('----------');
sortingByTwoCriteria(["test", "Deny", "omen", "Default"]);
console.log('----------');
