const submitForm = () => {

    let name = document.getElementById("name").value 

    let password = document.getElementById("password").value

    localStorage.setItem("name", name)

    localStorage.setItem("password", password)

    let arr = JSON.parse(localStorage.getItem("Data")) || []

    let obj = {
        name : name,
        password : password
    }

    arr.push(obj)

    localStorage.setItem("Data", JSON.stringify(arr)) 

event.target.reset()
}


const updateData = () => {
    let tabelData = document.getElementById("tabelData")

    let tr = ""

    let userData = JSON.parse(localStorage.getItem("Data"))

    userData.forEach ((item,index) => {
        tr += `
            <tr>
                <td>${index +1}</td>
                <td>${item.name}</td>
                <td>${item.password}</td>
                <td><button onClick = "editData (${index})">Edit</button><button onClick = "deleteData (${index})">Delete</button></td>
            </tr>
        `
    })
    tabelData.innerHTML = tr

}

const deleteData = (index) => {
    const userData = JSON.parse(localStorage.getItem("Data"))
    userData.splice(index , 1)
    localStorage.setItem("Data" , JSON.stringify(userData))
    updateData()
}

const editData = (index) => {
    const userData = JSON.parse(localStorage.getItem("Data"))
    let editedname = prompt("Enter Name", userData[index].name)
    let editedpassword = prompt("Enter Password", userData[index].password)

    userData[index] = {
        name : editedname,
        password : editedpassword
    }

    localStorage.setItem("Data", JSON.stringify(userData))

    updateData()
}

updateData()
