const detailsContainer = document.getElementById("details");
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
  .then(res => res.json())
  .then(async data => {
    const c = data[0];

    let bordersHTML = "No borders";

    if (c.borders && c.borders.length > 0) {
      const bordersRes = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${c.borders.join(",")}`
      );
      const bordersData = await bordersRes.json();

      bordersHTML = bordersData
        .map(b => `<span class="border">${b.name.common}</span>`)
        .join(" ");
    }

    detailsContainer.innerHTML = `
      <button onclick="history.back()">⬅ Back</button>

      <h1>${c.name.common}</h1>
      <img src="${c.flags.png}">

      <p><b>Capital:</b> ${c.capital}</p>
      <p><b>Region:</b> ${c.region}</p>
      <p><b>Subregion:</b> ${c.subregion}</p>
      <p><b>Population:</b> ${c.population.toLocaleString()}</p>

      <h3>Border Countries:</h3>
      <div class="borders">${bordersHTML}</div>
    `;
  })
  .catch(() => {
    detailsContainer.innerHTML =
      "<h2>Bu ölkə haqqında məlumat yoxdur</h2>";
  });
