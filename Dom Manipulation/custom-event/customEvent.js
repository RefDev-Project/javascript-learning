// custom event
const changeCaption = new Event("changeCaption");

window.addEventListener("load", changeCaptionHandler);

function changeCaptionHandler() {
  const tombol = document.getElementById("tombol");
  tombol.addEventListener("changeCaption", customEventHandler);
  tombol.addEventListener("click", () => {
    tombol.dispatchEvent(changeCaption);
  });
}

function customEventHandler(event) {
  console.log("Event " + event.type + " Terdeteksi");
  const caption = document.getElementById("caption");
  caption.innerText = "Anda telah membangkitkan custom event";
}
