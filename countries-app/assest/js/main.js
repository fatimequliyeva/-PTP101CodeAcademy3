const countriesList = document.getElementById("countriesList");  //olkelern gosderdiyi hisse
const searchInput = document.getElementById("searchInput"); //axdaris inputu
const regionSelect = document.getElementById("regionSelect"); //region secimi
const themeToggle = document.getElementById("themeToggle"); //darkmod duymesi
const modal = document.getElementById("alertModal"); //ermeniye cixacaq modal
const closeModalBtn = document.getElementById("closeModal"); //onuda baqlamaq ucun duymedi

function showModal() {  //modal ucun funksiyadi
  modal.style.display = "flex"; //modali gosderir
}

closeModalBtn.addEventListener("click", () => { //butona klik elave edirikki ona basanda 
  modal.style.display = "none";  //hemin modal gorunmesin
});

const ALL_COUNTRIES_URL =   //butun olkeleri getiren API dir 
  "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags";

if (localStorage.getItem("theme") === "dark") {  //dark modun yadda qalmasi ucun 
  document.body.classList.add("dark");  //eger dark secilibse dark qalacaq 
}

themeToggle.addEventListener("click", () => {  //klik edende ise reng deyisir 
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light" //secimi yadda saxalamaq lazmdi axi
  );
});

fetchCountries(ALL_COUNTRIES_URL);  //olkeleri getiren funksiyadi sehife acilan kimi isleyir

function fetchCountries(url) {  //apiden melumati alir
  countriesList.innerHTML = "Loading...";  //gozleme olarsa usere loading yazisi gelr bilsinki hele 
  fetch(url)  //apiye sorqu gonderir serverden melumat isdeyir
    .then(res => res.json())  //servrden gelen melumat json formatndadir jsni basa dusduyu formaya cevrir
    .then(data => renderCountries(data)) //apiden gelen olke melumati dataya dusur bu melumat rendere gonderilir 
    .catch(() => {
      countriesList.innerHTML = "No country found";  //sehv url olarsa intrnet olmazsa bu yazi olacaq 
    });
}

const regions = [  //region massivi yaradiriq cunki sonradan selectde baqlayacqyq 
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
  "Antarctic"
];

function loadRegions() { //funksiya yaradiriq ki bu funksiya regionlari selecte duzecek 
  regionSelect.innerHTML = `<option value="">Filter by Region</option>`;  
  regions.forEach(region => { //hemin regionu forice saliriq tek tek region adlarn tutur
    const option = document.createElement("option"); //yene elemnt yaradrq select ucun yeni secim 
    option.value = region;  //valuenin deyeri region adi olur 
    option.textContent = region;  //selectde usere goruneni yazir
    regionSelect.appendChild(option);  
  });
}
loadRegions(); //sehife acilan kimi yuklenir 

function renderCountries(countries) {  //olkeleri kart sekilinde gosderir 
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

    const nameLower = country.name.common.toLowerCase(); //olke adini kicik herfe cevirir

    if (nameLower === "armenia") {  //xususi sert
      card.addEventListener("click", showModal); //ermenistana basanda modal acilir
    } else {
      card.addEventListener("click", () => {
        window.location.href = `details.html?name=${country.name.common}`;
      });
    }

    countriesList.appendChild(card);
  });
}

// ================= DEBOUNCE SEARCH =================
let searchTimeout = null;

searchInput.addEventListener("input", e => {  //yazib bitirdikden sonra axtaris
  const value = e.target.value.trim();

  clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => {
    if (value) {
      fetchCountries(`https://restcountries.com/v3.1/name/${value}`);
    } else {
      fetchCountries(ALL_COUNTRIES_URL);
    }
  }, 600); //600ms sonra isleyir
});

regionSelect.addEventListener("change", e => {  
  const region = e.target.value;
  if (region) {
    fetchCountries(`https://restcountries.com/v3.1/region/${region}`);
  } else {
    fetchCountries(ALL_COUNTRIES_URL);
  }
});
