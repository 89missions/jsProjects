let input = document.querySelector('#n')

let search = document.querySelector('.button')

const apiKey = "9c3aa8f546ac2802d1979af23449580a";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed +'km/h';

}

search.addEventListener('click',()=>{
    checkweather(input.value)
})

;