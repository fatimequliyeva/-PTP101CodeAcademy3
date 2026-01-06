const blogList = document.getElementById("blog-list");
const searchInput = document.getElementById("search");
const BASE_URL = "http://localhost:3000/blogs";

async function getBlogs(query = "") {
  const res = await fetch(`${BASE_URL}?q=${query}`);
  const blogs = await res.json();
  renderBlogs(blogs);
}

function renderBlogs(blogs) {
  blogList.innerHTML = "";

  blogs.forEach(blog => {
    const card = document.createElement("div");
    card.className = "card";

    const fullText = blog.body;
    const shortText = fullText.length > 100 ? fullText.substring(0, 100) : fullText;

    card.innerHTML = `
      <h3>${blog.title}</h3>
      <p class="blog-body">${shortText} ${
        fullText.length > 100 ? '<span class="read-more">Read More</span>' : ""
      }</p>
      <small>Author: ${blog.author}</small><br/>
      <button class="delete-btn">Delete</button>
      <a href="edit.html?id=${blog.id}">Edit</a>
    `;

    const bodyElem = card.querySelector(".blog-body");
    const moreElem = card.querySelector(".read-more");

    if (moreElem) {
      moreElem.style.color = "#0d00ffff";
      moreElem.style.cursor = "pointer";
      moreElem.style.fontWeight = "bold";

      moreElem.addEventListener("click", () => {
        if (moreElem.innerText === "Read More") {
          bodyElem.innerText = fullText + " ";
          moreElem.innerText = "Read Less";
          bodyElem.appendChild(moreElem);
        } else {
          bodyElem.innerText = shortText + (fullText.length > 100 ? " " : "");
          moreElem.innerText = "Read More";
          bodyElem.appendChild(moreElem);
        }
      });
    }

    card.querySelector(".delete-btn").addEventListener("click", () => {
      deleteBlog(blog.id);
    });

    blogList.appendChild(card);
  });
}

async function deleteBlog(id) {
  if (!confirm("SilmEk isdediyve eminsen?")) return;

  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });

  getBlogs();
}

searchInput.addEventListener("input", e => {
  getBlogs(e.target.value);
});

getBlogs();
