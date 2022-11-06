const API_KEY= "ad8056ff46e699b3096f6dc95e91784d";
const nameContaniner= document.querySelector("#weather span:first-child");
const weatherContainer= document.querySelector("#weather span:last-child");

function onGeoOk(position){
    const lng= position.coords.longitude;
    const lat= position.coords.latitude;
    // console.log(position);
    // console.log(`you live in ${lat} and ${lng}.`)
    const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            nameContaniner.innerText= (data.name).toLowerCase();
            weatherContainer.innerText= `${(data.weather[0].main).toLowerCase()} ${data.main.temp}`;
        });

}

function onGeoErro(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErro);

