const Test = () => {
    fetch("https://data.covid19india.org/v4/min/data.min.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        document.getElementById("confirmed").innerHTML = data.AN.delta21_14.confirmed;
        document.getElementById("tested").innerHTML = data.AN.delta.tested;
        document.getElementById("vaccinated1").innerHTML = data.AN.delta.vaccinated1;
        document.getElementById("vaccinated2").innerHTML = data.AN.delta.vaccinated2;
        document.getElementById("confirmed1").innerHTML = data.AN.delta7.confirmed;
        document.getElementById("recovered").innerHTML = data.AN.delta7.recovered;
        document.getElementById("tested1").innerHTML = data.AN.delta7.tested;
        document.getElementById("vaccinated1-1").innerHTML = data.AN.delta7.vaccinated1;
        document.getElementById("vaccinated2-1").innerHTML = data.AN.delta7.vaccinated2;
    })
    .catch((err) => console.log(err));
}