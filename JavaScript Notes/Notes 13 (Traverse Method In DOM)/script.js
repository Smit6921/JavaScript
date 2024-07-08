
// Parent Node

let parent = document.getElementById("inner").parentNode
console.log(parent)


// Parent Element

let parent1 = document.getElementById("inner").parentElement
console.log(parent1)


// Children , ChildNodes

let child1 = document.getElementById("outer").children
console.log(child1)

let child2 = document.getElementById("outer").childNodes
console.log(child2)


// Children Element Count

let child3 = document.getElementById("outer").childElementCount
console.log(child3)


// FirstChild , FirstChildElement

let Firstchild = document.getElementById("outer").firstChild
console.log(Firstchild)


let firstEleChild = document.getElementById("outer").firstElementChild
console.log(firstEleChild)


// LastChild , LastElementChild

let lastchild = document.getElementById("inner").lastChild
console.log(lastchild)

let lastEleChild = document.getElementById("inner").lastElementChild
console.log(lastEleChild)


// NextSibling , NextElementSibling

let sib = document.getElementById("box1").nextSibling
console.log(sib)


let sibEle = document.getElementById("box1").nextElementSibling
console.log(sibEle)


// PreviousSibling , PreviousElementSibling

let lastSib = document.getElementById("box2").previousSibling
console.log(lastSib)

let lastEleSib = document.getElementById("box2").previousElementSibling
console.log(lastEleSib)


// Create Element (Create Tags like h1 , p , form etc)

let element = document.createElement("h1")
console.log(element)  // h1 tag is created which is shown in console.


// Create Text Node (Create Content)

let ele1 = document.createTextNode("This is Content !!!")
console.log(ele1) // Content is created which is shown in console.


// Create Comment

let comm = document.createComment("This is Commnet !!!")
console.log(comm) // Comment is created which is shown in console.


// Append Child (It is use to "Merge" Content & Tag)

let ele = document.createElement("p")

let content = document.createTextNode("This is Content of Append Child !!!")

ele.appendChild(content)
// console.log(ele)

ele.style.color = "red"

let target = document.getElementById("box")

target.appendChild(ele)

//AppendChild have a Disadvantage, it is always put the content at the bottom of the targeted element that's why we must use "InsertBefore" so our content put at the start of the Element.

// Use "InsertBefore" Insted of AppendChild

let child = target.childNodes[0]
target.insertBefore(ele , target.childNodes[0])


// InsertAdjacentElement

let tag = document.createElement("h2")
let text = document.createTextNode("This is h2 Tag !")

tag.appendChild(text)

let Ele1 = document.getElementById("test")
Ele1.insertAdjacentElement("afterbegin" , tag) // Here afterbegin is a Placement of our Element.

// Theere Are Four Types of Placement :-
// 1. afterend
// 2. afterbegin
// 3. beforebegin
// 4. beforeend


// InsertAdjacentHTML

let text1 = "<h2>This is H2 Tag !!</h2>"

let abc = document.getElementById("abc")

abc.insertAdjacentHTML("beforeend" , text1)

// InsertAdjacentText

let text2 = "This is just Text"

abc.insertAdjacentText("afterbegin" , text2)


// Replace Child

let ele3 = document.createElement("li")
let text3 = document.createTextNode("Orange")

ele3.appendChild(text3)

let target3 = document.getElementById("list")

let child4 = target3.children[2]

target3.replaceChild(ele3 , child4)


// Remove Child

let ele4 = document.createElement("li")
let text4 = document.createTextNode("Orange")

ele4.appendChild(text4)

let target4 = document.getElementById("list1")

let child5 = target4.children[2]

target4.removeChild(child5)


// Also There are three methods which gives output in "TRUE or FALSE"
// 1. Contains 
// 2. hasAttributes
// 3. hasChildNodes
