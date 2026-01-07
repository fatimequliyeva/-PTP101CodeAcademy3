const blogList = document.getElementById("blog-list"); //htmlde idsi blok elemti TAPR
const searchInput = document.getElementById("search"); // AXTARIS UCUN olan ipnt elemi secir
const BASE_URL = "http://localhost:3000/blogs"; //apidi json serverden bura gelr

async function getBlogs(query = "") { //asinxron funksiya
  const res = await fetch(`${BASE_URL}?q=${query}`); //servereget sorqu gonderir  ?q jsonun searc funksiyadir
  const blogs = await res.json(); //gelen cvbi json formatn ceviri
  renderBlogs(blogs); //bloqlari ekranda gosdermek ucun bawqa funkiya oturur
}

function renderBlogs(blogs) { // bloqrlari ekrana cixara funksiya
  blogList.innerHTML = ""; // kohne bloqu temzileyr tekrar elave olunmaqin qabaqn alr

  blogs.forEach(blog => { //BLOQDA HER bloq UCUN DOVRDU
    const card = document.createElement("div");  //yeni div
    card.className = "card"; //css ucun card clas

    const fullText = blog.body; //BLOQUN TAM METNI
    const shortText = fullText.length > 100 ? fullText.substring(0, 100) : fullText; //EGER 100DEN  boyukdurse ancaq 100

    card.innerHTML = `
      <h3>${blog.title}</h3>           
      <p class="blog-body">${shortText} ${
        fullText.length > 100 ? '<span class="read-more">Read More</span>' : ""
      }</p>
      <small>Author: ${blog.author}</small><br/>
      <button class="delete-btn">Delete</button>
      <a href="edit.html?id=${blog.id}">Edit</a>
    `;

    const bodyElem = card.querySelector(".blog-body"); //p ve read more elemi tapir
    const moreElem = card.querySelector(".read-more");

    if (moreElem) { //eger read more varsa iwlesin
      moreElem.style.color = "#0d00ffff";
      moreElem.style.cursor = "pointer";
      moreElem.style.fontWeight = "bold"; //bunlar cssdi

      moreElem.addEventListener("click", () => { //klik hadisesi
        if (moreElem.innerText === "Read More") { // tam metni gosderir texti read less edir
          bodyElem.innerText = fullText + " ";
          moreElem.innerText = "Read Less";
          bodyElem.appendChild(moreElem); //spani yeniden pye elave edir
        } else {
          bodyElem.innerText = shortText + (fullText.length > 100 ? " " : ""); 
          moreElem.innerText = "Read More";
          bodyElem.appendChild(moreElem);
        }
      });
    }

    card.querySelector(".delete-btn").addEventListener("click", () => {
      deleteBlog(blog.id);  //deleteeni tapr klikde silinir
    });

    blogList.appendChild(card);
  });
}

async function deleteBlog(id) {
  if (!confirm("SilmEk isdediyve eminsen?")) return; //buda blok silen funksiyadi

  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });

  getBlogs();
}

searchInput.addEventListener("input", e => {  //INPUTA HER YAZILANDA ISLEYIR
  getBlogs(e.target.value); //  axdariw deyerine gore bloklari filtr edir
});

getBlogs(); //her sehife acilanda bloqlar gorsenir refresh
