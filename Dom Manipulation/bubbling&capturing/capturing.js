const divs = document.querySelectorAll("div");

for (let div of divs) {
  div.addEventListener(
    "click",
    () => {
      alert("You clicked on " + div.getAttribute("class").toUpperCase());
    },
    true
  );
}
