const container = document.getElementById("detailsContainer");
const themeToggle = document.getElementById("themeToggle");


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

const params = new URLSearchParams(window.location.search);
const countryName = params.get("name");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then(res => res.json())
  .then(async data => {
    const c = data[0];

    let bordersHTML = "<span>No borders</span>";

    if (c.borders && c.borders.length) {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${c.borders.join(",")}`
      );
      const borders = await res.json();

      bordersHTML = borders
        .map(
          b =>
            `<span class="border-item" onclick="location.href='details.html?name=${b.name.common}'">
              ${b.name.common}
            </span>`
        )
        .join("");
    }

    container.innerHTML = `
      <div class="details-flag">
        <img src="${c.flags.png}" alt="${c.name.common}">
      </div>

      <div class="details-info">
        <h2>${c.name.common}</h2>

        <div class="info-grid">
          <p><b>Official Name:</b> ${c.name.official}</p>
          <p><b>Population:</b> ${c.population.toLocaleString()}</p>
          <p><b>Region:</b> ${c.region}</p>
          <p><b>Sub Region:</b> ${c.subregion || "-"}</p>
          <p><b>Capital:</b> ${c.capital || "-"}</p>
          <p><b>Area:</b> ${c.area.toLocaleString()} km²</p>
        </div>

        <h3>Border Countries</h3>
        <div class="borders">
          ${bordersHTML}
        </div>
      </div>
    `;
  })
  .catch(() => {
    container.innerHTML = "<h2>No country information found</h2>";
  });