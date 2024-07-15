const dogImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        console.log(data.message)
        let URL = data.message
        let image = document.getElementById("image")
        image.src = URL
    })
    .catch((err) => console.log(err))
}