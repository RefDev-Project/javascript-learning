// event load
function welcome() {
  alert("Welcome to Event World!");
  const contents = document.querySelector(".contents");
  contents.removeAttribute("hidden");
}

window.addEventListener("load", welcome);

// event click
function increment() {
  const counter = document.getElementById("count");
  counter.innerText++;

  if (counter.innerText == 7) {
    const hiddenMessage = document.createElement("h4");
    hiddenMessage.innerText = "Selamat! Anda menemukan hadiah tersembunyi... :)";

    const pictures = document.createElement("img");
    pictures.setAttribute("src", "https://i.ibb.co/0V49VRZ/catto.jpg");

    const content = document.querySelector(".contents");
    content.appendChild(hiddenMessage);
    content.appendChild(pictures);
  }
}

function decrement() {
  const decrementCounter = document.getElementById("count");
  decrementCounter.innerText--;

  if (decrementCounter.innerText <= 6) {
    const hiddenMessage = document.querySelector("h4");
    hiddenMessage.setAttribute("hidden", true);

    const pictures = document.querySelector("img");
    pictures.setAttribute("hidden", true);
  }
}

const incrementButton = document.getElementById("incrementButton");
incrementButton.addEventListener("click", increment);

const decrementButton = document.getElementById("decrementButton");
decrementButton.addEventListener("click", decrement);
