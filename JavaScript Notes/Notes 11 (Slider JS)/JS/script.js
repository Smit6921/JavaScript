let slideIndex = 0 
const slides = document.querySelectorAll(".slides img")

const totalSlides = slides.length
// console.log(totalSlides)
// console.log(slides)

const showSlides = (index) => {
    slides.forEach((slides) => {
        slides.style.display = "none"
    })
    slides[index].style.display = "block"
}
showSlides(slideIndex)


const prevSlide = () => {
    slideIndex = ((slideIndex -1 + totalSlides)) %totalSlides
    showSlides(slideIndex)
}

const nextSlide = () => {
    slideIndex = ((slideIndex + 1)) %totalSlides
    showSlides(slideIndex)
}


document.getElementById("prev").addEventListener('click', prevSlide)
document.getElementById("next").addEventListener('click', nextSlide)