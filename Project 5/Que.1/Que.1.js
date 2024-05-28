let num = [10, 20, 30, 40, 50, 60, 70];
let sum = 0;

for (let i = 0; i < num.length; i++) 
{
    sum += num[i];
}

for (let i = 0; i < num.length; i++) 
{
    console.log(num[i]);
}

console.log("Sum of Numbers:", sum);