function variableSwap() 
{
    let a = prompt("Enter the value of a:");
    let b = prompt("Enter the value of b:");
    
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