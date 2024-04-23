function convert() {
    let celsiusInput = document.getElementById("celsius").value;
    let fehrenheit = (celsiusInput * 9/5) + 32;
    document.getElementById("result").innerHTML = `${celsiusInput}C is equal to ${fehrenheit} F`;
}