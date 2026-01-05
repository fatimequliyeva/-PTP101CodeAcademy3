const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const BASE_URL = "http://localhost:3000/blogs";

async function getBlog() {
  const res = await fetch(`${BASE_URL}/${id}`);
  const blog = await res.json();

  title.value = blog.title;
  body.value = blog.body;
  author.value = blog.author;
}

document.getElementById("edit-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const updatedBlog = {
    title: title.value,
    body: body.value,
    author: author.value
  };

  await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedBlog)
  });

  window.location.href = "index.html";
});

getBlog();
window.deleteBlog = async function(id) {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  getBlogs();
};
