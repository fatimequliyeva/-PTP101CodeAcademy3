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

    card.innerHTML = `
      <h3>${blog.title}</h3>
      <p>${blog.body.substring(0, 100)}...</p>
      <small>Author: ${blog.author}</small><br/>
      <button class="delete-btn">Delete</button>
      <a href="edit.html?id=${blog.id}">Edit</a>
    `;

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
