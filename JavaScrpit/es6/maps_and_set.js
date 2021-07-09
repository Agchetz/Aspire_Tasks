//Map Object

// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};
// Create a new Map
const fruits = new Map();
// Add the Objects to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
// Display Object Type
document.querySelector("body").innerHTML = fruits;


// set Objects

const letters = new Set();
// Add some values (lito the Set
letters.add("a");
letters.add("b");
letters.add("c");
// Display set.size
document.getElementById("demo").innerHTML = letters.size;
