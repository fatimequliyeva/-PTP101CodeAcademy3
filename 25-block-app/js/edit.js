const params = new URLSearchParams(window.location.search); //urlden blog idni goturur
const id = params.get("id"); //buda neyi edit eleyecetyni mueyyen edir

const BASE_URL = "http://localhost:3000/blogs"; //yene bir sorqu esas end pointidir

async function getBlog() { //asnixrn funksiya secilmis bloquy serverden getirir
  const res = await fetch(`${BASE_URL}/${id}`); //servere get sorqu gonderir
  const blog = await res.json(); //gelen cavabi jsona cevirir

  title.value = blog.title;
  body.value = blog.body;
  author.value = blog.author; //bu olmasa eger edit sehifesi yoxsa bow acilar 
}

document.getElementById("edit-form").addEventListener("submit", async (e) => { //edit form sumbit edilende isleyir
  e.preventDefault(); //sehifenin refrewin qabaqqn alirt

  const updatedBlog = { //serevere gonderilecek yeni data ucun 
    title: title.value,
    body: body.value,
    author: author.value //son deyiklikler
  };

  await fetch(`${BASE_URL}/${id}`, { //servere put sortqusu
    method: "PUT", //tam yenilenme kohne data silinir 
    headers: { "Content-Type": "application/json" }, //json gonderdiyini bildirir 
    body: JSON.stringify(updatedBlog) //jsona cevirir 
  });

  window.location.href = "index.html"; //isdeifadeci i yene esas sehfye qaytarir 
});

getBlog(); //funksiyani global scopa cixarir 
window.deleteBlog = async function(id) { //htmldan carqmaq ucun
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" }); //servere deleteni gonderir ve silir
  getBlogs();
};
