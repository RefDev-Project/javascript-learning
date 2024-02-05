const gambar = document.getElementById("gambar");
gambar.setAttribute("width", 300);
gambar.setAttribute("height", 215);

const button = document.querySelectorAll(".button");
const playButton = button[3];
const playButtonElement = playButton.children[0];
playButton.setAttribute("type", "submit");

const dicoding = document.getElementById("dicodingLink");
dicoding.innerText = "Belajar Programming di Dicoding";
dicoding.innerHTML = "<i>Belajar Programming di Dicoding</i>";

const google = document.getElementById("googleLink");
google.innerText = "Mencari sesuatu di google";
google.innerHTML = "<i>Mencari sesuatu di google</i>";

const buttons = document.getElementsByClassName("button");
for (const button of buttons) {
  button.children[0].style.borderRadius = "6px";
}
