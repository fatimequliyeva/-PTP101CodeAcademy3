const form = document.getElementById("blog-form"); //htmlde idsi blog olan tutub getirem

form.addEventListener("submit", async (e) => { //form sumbit edilende bu form isleyecek  async servere sorqu gonderik
  e.preventDefault();  //formun default davranisin dayandirir yeni sehife refreh olmur sorqu gonderir

  const newBlog = { //servere gonderilecek obyekt
    title: title.value,
    body: body.value,
    author: author.value
  };

  await fetch("http://localhost:3000/blogs", { //servere post sorqusudu
    method: "POST", //servere deyirki yeni data elave et
    headers: { "Content-Type": "application/json" }, //servere dirki  json formatinda gonderirem
    body: JSON.stringify(newBlog) //js de bunujson stringe cevirir
  });

  window.location.href = "index.html"; //blogda elaVE oldunduqdan sonra useri esas sehifeye gonderir saq gondermesn
});
