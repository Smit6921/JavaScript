// Use of TextContent

document.getElementById("h1").textContent = "Hii How Are You ?"


// Use of InnerHtml

document.getElementById("para").innerHTML = "This is Paragraph" // Also We can Use a particular tag. 
// For Example:- document.getElementById("para").innerHTML = "<h1> This is Paragraph </h1>"


// Use CSS in the JavaScript code :-

document.getElementById("para").style.color = "red"

document.getElementById("para").style.fontSize = "40px" // In general css if we want to apply font size so, we are define as a "font-size" but in javaScript we have to write "fontSize".
// Here "fontSize" is called "Camel Case"