const nameMap = new Map([
    [1, 'Alice'],
    [2, 'Bob'], 
    [3, 'Charlie'],
]);

//console.log(nameMap); // Map(0) {}



// Iterating over a Map
for (let [key, value] of nameMap) {
    console.log(key, value);
}

nameMap.forEach((value, key) => console.log(key, value));