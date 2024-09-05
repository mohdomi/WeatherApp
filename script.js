const APIkey = "1ca657633d990d7ccc920426c89f7476";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
let cityName = document.querySelector('.searchbox input');
let searchBtn = document.querySelector('.searchbox button');
let weatherIcon = document.querySelector('.weather-icon');



async function WeatherData(city){

    let response = await fetch (URL+`&appid=${APIkey}&q=${city}`);

    let Data = await response.json();

    console.log(Data);

    document.querySelector('.city').innerHTML = Data.name;
    document.querySelector('.temp').innerHTML = `${Math.round(Data.main.temp)}°C`;
    document.querySelector('.humidity').innerHTML = `${Data.main.humidity}%`;
    document.querySelector('.wind').innerHTML = `${Data.wind.speed}km/h`;

    if(Data.weather[0].main == 'Rain'){
        weatherIcon.src = "images/rain.png";
    }else if(Data.weather[0].main == 'Clear'){
        weatherIcon.src = "images/clear.png";
    }
    else if(Data.weather[0].main == 'Clouds'){
        weatherIcon.src = "images/clouds.png";
    }
    else if (Data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "images/drizzle.png";
    }
    else if (Data.weather[0].main == 'Mist'){
        weatherIcon.src = "images/mist.png";
    }
    else if (Data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = 'block'; 



}

searchBtn.addEventListener('click' , ()=>{
    WeatherData(cityName.value);
})
