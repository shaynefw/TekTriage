const createPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const content = document.querySelector("#content").value.trim();

  if (title && content) {
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard"); // When successful, load the dashboard
    } else {
      alert("Failed to create post."); // When unsuccessful, show alert
    }
  }
};

// Event listener
document
  .querySelector("#newPost")
  .addEventListener("submit", createPostFormHandler);
