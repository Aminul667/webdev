const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const countriesContainer = document.getElementById("all-countries");

  countries.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : "No Country"}</p>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
    `;
    countriesContainer.appendChild(countryDiv);
  });
};

const loadCountryDetails = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCountryDetail(data[0]));
};

const showCountryDetail = (country) => {
  const detailContainer = document.getElementById("detail-container");
  detailContainer.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <img src="${country.flags.png}">

  `;
};

loadCountries();
