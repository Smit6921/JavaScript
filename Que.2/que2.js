function variableSwap() 
{
    let a = prompt("Enter the value of variable a:");
    let b = prompt("Enter the value of variable b:");
    
    console.log("Before swapping:");
    console.log("a =", a);
    console.log("b =", b);
    
    let temp = a;
    a = b;
    b = temp;
    
    console.log("After swapping:");
    console.log("a =", a);
    console.log("b =", b);
}

variableSwap();