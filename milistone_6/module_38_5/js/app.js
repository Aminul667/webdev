// Do not show the API keys on the JS files

const API_KEYS = `0efc0449a9fb3cb74afb9c1e33581121`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEYS}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = data => {
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    // city
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})

loadTemperature('dhaka');