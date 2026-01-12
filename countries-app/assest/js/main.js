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
  "https://restcountries.com/v3.1/all?fields=name,cca2,capital,region,population,flags";


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
  regionSelect.innerHTML = `<option value="">Filter by Region</option>`;  //""bu hecbir regon secilmeyib demekdi ve
  //ilk olaarq  filter by region ya

  regions.forEach(region => { //hemin regionu forice saliriq tek tek region adlarn tutur
    const option = document.createElement("option"); //yene elemnt yaradrq select ucun yeni secim 
    option.value = region;  //valuenin deyeri region adi olur 
    option.textContent = region;  //selectde usere goruneni yazir neye basirsa onu yazir
    regionSelect.appendChild(option);  //yaradilan optionu append eleyirik 
  });
}

loadRegions(); //funksiyani caqririq sehfie acilanda avtomatik yuklenir 




function renderCountries(countries) {  //apiden gelen kart melumatini ekranda kard sekilinde gosderir 
  countriesList.innerHTML = "";  //ekranda kohne olkeleri tam siliq qarwlq olmasin diye

  countries.forEach(country => {  //arreyi fora salirq country ise tek bir olke melumatdr
    const card = document.createElement("div");  //her olke ucun bir div kard yaradiriq 
    card.className = "country-card"; //carda dizayn css ucun clas elave edirik 



    //htmlde birinci bayraqdi tolocalstrnde reqemi gozel gosderir burdada her sey apidan goturulur oradki yazi ile eyni olmalidi
    card.innerHTML = `  
      <img src="${country.flags.png}" alt="">
      <div class="country-info">
        <h3>${country.name.common}</h3>
        <p><b>Population:</b> ${country.population.toLocaleString()}</p>
        <p><b>Region:</b> ${country.region}</p>
        <p><b>Capital:</b> ${country.capital || "-"}</p>
      </div>
    `;
                       
                 //olke adini kicik herflere cevirir axdarwda prb olmasn diye 
    const nameLower = country.name.common.toLowerCase();

    if (nameLower === "armenia") {  //bu xususi sertdi 
      card.addEventListener("click", () => {  //karda klik olunanda details acilmir modal pencere acilacaq 
        showModal();
      });
    } else {  //eger olke ermeni deyilse her sey oz qaydasinda isleyecek 
      card.addEventListener("click", () => {
        window.location.href = `details.html?name=${country.name.common}`;
      });
    }

    countriesList.appendChild(card);  //birlesdirib ekranda gosderecek 
  });
}

let searchTimeout = null;

searchInput.addEventListener("input", e => {  //axdaris yeridi yazib bitirdikden sora ise dusur
  const value = e.target.value.trim();

  clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => {
    if (value) {
      fetchCountries(`https://restcountries.com/v3.1/name/${value}`);
    } else {
      fetchCountries(ALL_COUNTRIES_URL);
    }
  }, 600);
});


regionSelect.addEventListener("change", e => {  //isdifadeci basqa region secilende isleyir 
  const region = e.target.value; //secilen regionun deyerini goturur
  if (region) {
    fetchCountries(`https://restcountries.com/v3.1/region/${region}`); //eger heqiqi nese secibse gosderir 
  } else {
    fetchCountries(ALL_COUNTRIES_URL);//eks halda butun olkeler yeniden ekrana getirilir 
  }
});