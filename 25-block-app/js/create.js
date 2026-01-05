const form = document.getElementById("blog-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newBlog = {
    title: title.value,
    body: body.value,
    author: author.value
  };

  await fetch("http://localhost:3000/blogs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBlog)
  });

  window.location.href = "index.html";
});
