// ClassName

const changeColor = () => {
    let aa = document.getElementById("para")
    aa.className = "xyz abc"
    // console.log(aa)
}



// ClassList (Add Class, Remove Class, Toggle Class, item, contains)

// Add Class Example

const changeColor1 = () => {
    let aa = document.getElementById("para1")
    aa.classList.add("xyz", "abc")
}


// Remove Class Example

const changeColor2 = () => {
    let aa = document.getElementById("para2")
    aa.classList.add("xyz", "abc")
}

const removeClass = () => {
    let aa = document.getElementById("para2")
    aa.classList.remove("abc")
}


// Toggle Class Example

const changeColor3 = () => {
    let aa = document.getElementById("para3")
    aa.classList.toggle("xyz")
    aa.classList.toggle("abc")
}