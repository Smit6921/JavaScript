const fetchData = () => {
    const xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText
        } else if(this.readyState == 4 && this.status == 404) {
            console.log("Can not fetch data")
        } 
    }

    xhttp.open("GET" , "readme.txt" , true)
    xhttp.send()
}