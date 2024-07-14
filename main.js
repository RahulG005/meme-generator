
const generatememebtn = document.querySelector(".generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-title");
const memeAuthor = document.querySelector(".meme-author");

function generatememe() {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
        updateDetails(data.url, data.title, data.author);
      });
};

function updateDetails(url,title,author) {
    memeImage.src = url;
    memeTitle.textContent = title;
    memeAuthor.textContent = "meme by" + author;
};


generatememebtn.addEventListener("click", generatememe);