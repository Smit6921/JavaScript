function rectArea(length, width) {
    return length * width;
}

function triArea(base, height) {
    return 0.5 * base * height;
}

function cirArea(radius) {
    return 3.15 * radius * radius;
}

console.log("Area of Rectangle with length 5 and width 3:", rectArea(5, 3));
console.log("Area of Triangle with base 4 and height 6:", triArea(4, 6));
console.log("Area of Circle with radius 2:", cirArea(2));
