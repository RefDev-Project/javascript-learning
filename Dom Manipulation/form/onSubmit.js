const sumbitAction = document.getElementById("formDataDiri");

sumbitAction.addEventListener("submit", getDataForm);

function getDataForm(event) {
  const name = document.getElementById("inputNama").value;
  const domisili = document.getElementById("inputDomisili").value;
  const meesage = `Halo, ${name}. bagaimana cuacanya di ${domisili}`;

  const textData = document.getElementById("messageAfterSubmit");
  textData.innerText = meesage;

  event.preventDefault();
}
