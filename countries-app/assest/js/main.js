const countriesList = document.getElementById("countriesList");
const searchInput = document.getElementById("searchInput");
const regionSelect = document.getElementById("regionSelect");
const themeToggle = document.getElementById("themeToggle");

const ALL_COUNTRIES_URL =
  "https://restcountries.com/v3.1/all?fields=name,cca2,capital,region,population,flags";


if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});


fetchCountries(ALL_COUNTRIES_URL);

function fetchCountries(url) {
  countriesList.innerHTML = "Loading...";
  fetch(url)
    .then(res => res.json())
    .then(data => renderCountries(data))
    .catch(() => {
      countriesList.innerHTML = "No country found";
    });
}



const regions = [
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
  "Antarctic"
];

function loadRegions() {
  regionSelect.innerHTML = `<option value="">Filter by Region</option>`;

  regions.forEach(region => {
    const option = document.createElement("option");
    option.value = region;
    option.textContent = region;
    regionSelect.appendChild(option);
  });
}

loadRegions();



function renderCountries(countries) {
  countriesList.innerHTML = "";

  countries.forEach(country => {
    const card = document.createElement("div");
    card.className = "country-card";

    card.innerHTML = `
      <img src="${country.flags.png}" alt="">
      <div class="country-info">
        <h3>${country.name.common}</h3>
        <p><b>Population:</b> ${country.population.toLocaleString()}</p>
        <p><b>Region:</b> ${country.region}</p>
        <p><b>Capital:</b> ${country.capital || "-"}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      window.location.href = `details.html?name=${country.name.common}`;
    });

    countriesList.appendChild(card);
  });
}


searchInput.addEventListener("input", e => {
  const value = e.target.value.trim();
  if (value) {
    fetchCountries(`https://restcountries.com/v3.1/name/${value}`);
  } else {
    fetchCountries(ALL_COUNTRIES_URL);
  }
});

regionSelect.addEventListener("change", e => {
  const region = e.target.value;
  if (region) {
    fetchCountries(`https://restcountries.com/v3.1/region/${region}`);
  } else {
    fetchCountries(ALL_COUNTRIES_URL);
  }
});