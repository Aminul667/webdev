
function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((posts) => posts.json())
    .then((data) => displayPosts(data));
}

function displayPosts(posts) {
  const postContainer = document.getElementById("post-container");
  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add('post');
    postDiv.innerHTML = `
            <h4>User-${post.userId}</h4>
            <h5>Post:${post.title}</h5>
            <p>${post.body}</p>
        `;
    postContainer.appendChild(postDiv);
  }
}

loadPosts();
