// Do not show the API keys on the JS files

const API_KEYS = `0efc0449a9fb3cb74afb9c1e33581121`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEYS}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = data => {
    const temperature = document.getElementById('temperature');
    console.log(data.main.temp);
    temperature.innerText = data.main.temp;
}

loadTemperature('dhaka');