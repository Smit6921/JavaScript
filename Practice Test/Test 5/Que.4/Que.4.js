let data = [10, 20, 30, 40, 50, 60];

let index = data.indexOf(50);
console.log("Index of 50:", index);


let shiftedData = data.shift();
console.log("Shifted Element:", shiftedData);
console.log("After shift:", data);

data.unshift(1, 10);
console.log("After Unshift:", data);