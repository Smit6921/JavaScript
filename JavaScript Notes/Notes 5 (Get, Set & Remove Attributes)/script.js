// To Get Attributes


document.getElementById("h1").textContent = "Hi How Are You ?"

let get = document.getElementById("h1").getAttribute("class")
console.log(get)


// To Set Attributes

document.getElementById("para").innerHTML = "This is my paragraph"
let set = document.getElementById("para").setAttribute("class", "abc")
console.log(set)
// Also We can apply directly class in Set. Here is the example :-
// let set = document.getElementById("para").setAttribute("style", "color : red")


// To Remove Attributes

const abc = () => {
    document.getElementById("para").setAttribute("style", "color : blue")  
}

const xyz = () => {
    document.getElementById("para").removeAttribute("style")
}