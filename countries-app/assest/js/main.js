const countriesContainer = document.getElementById("countries");
const searchInput = document.getElementById("searchInput");
const regionSelect = document.getElementById("regionSelect");

const ALL_URL =
  "https://restcountries.com/v3.1/all?fields=name,cca2,capital,region,population,flags";

// Load Home
fetchCountries(ALL_URL);

function fetchCountries(url) {
  countriesContainer.innerHTML = "Loading...";
  fetch(url)
    .then(res => res.json())
    .then(data => renderCountries(data))
    .catch(() => countriesContainer.innerHTML = "No data found");
}

function renderCountries(countries) {
  countriesContainer.innerHTML = "";
  countries.forEach(country => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${country.flags.png}" alt="">
      <div class="card-body">
        <h3>${country.name.common}</h3>
        <p><b>Capital:</b> ${country.capital || "-"}</p>
        <p><b>Region:</b> ${country.region}</p>
        <p><b>Population:</b> ${country.population.toLocaleString()}</p>
      </div>
    `;

    card.onclick = () => {
      window.location.href = `details.html?name=${country.name.common}`;
    };

    countriesContainer.appendChild(card);
  });
}

// Search
searchInput.addEventListener("input", e => {
  const value = e.target.value.trim();
  if (value) {
    fetchCountries(`https://restcountries.com/v3.1/name/${value}`);
  } else {
    fetchCountries(ALL_URL);
  }
});

searchInput.addEventListener("input", e => {
  const value = e.target.value.trim().toLowerCase();

  if (value === "armenia" || value === "ermenistan") {
    countriesContainer.innerHTML =
      "<h2>Bu ölkə haqqında məlumat yoxdur</h2>";
    return;
  }

  if (value) {
    fetchCountries(`https://restcountries.com/v3.1/name/${value}`);
  } else {
    fetchCountries(ALL_URL);
  }
});

// Filter
regionSelect.addEventListener("change", e => {
  const region = e.target.value;
  if (region) {
    fetchCountries(`https://restcountries.com/v3.1/region/${region}`);
  } else {
    fetchCountries(ALL_URL);
  }
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
