document.addEventListener("DOMContentLoaded", inputEventHandler);

function inputEventHandler() {
  const inputMaxLengthOnLoad = document.getElementById("inputNama").maxLength; //15
  document.getElementById("sisaKarakter").innerText = inputMaxLengthOnLoad;

  //input
  document.getElementById("inputNama").addEventListener("input", function () {
    const jumlahKarakterDiketik = document.getElementById("inputNama").value.length;

    const sisaKarakterUpdate = inputMaxLengthOnLoad - jumlahKarakterDiketik;
    const sisaKarakter = document.getElementById("sisaKarakter");
    sisaKarakter.innerText = sisaKarakterUpdate.toString();

    if (sisaKarakterUpdate === 0) {
      document.getElementById("sisaKarakter").innerText = "Batas maksimal tercapai!";
    } else if (sisaKarakterUpdate <= 5) {
      document.getElementById("notifikasiSisaKarakter").style.color = "red";
    } else {
      document.getElementById("notifikasiSisaKarakter").style.color = "blue";
    }
  });

  // focus
  document.getElementById("inputNama").addEventListener("focus", function () {
    const visibilityLabel = document.getElementById("notifikasiSisaKarakter");
    visibilityLabel.style.visibility = "visible";
    visibilityLabel.style.color = "green";
  });

  // blur
  document.getElementById("inputNama").addEventListener("blur", function () {
    document.getElementById("notifikasiSisaKarakter").style.visibility = "hidden";
  });

  // change
  document.getElementById("inputCaptcha").addEventListener("change", function () {
    const inputCaptcha = document.getElementById("inputCaptcha").value;
    if (inputCaptcha === "PRNU") {
      document.getElementById("submitButton").removeAttribute("disabled");
    } else {
      document.getElementById("submitButton").setAttribute("disabled", "");
    }

    document.getElementById("formDataDiri").addEventListener("submit", function (event) {
      const inputCaptcha = document.getElementById("inputCaptcha").value;
      if (inputCaptcha === "PRNU") {
        alert("Selamat! Captcha Anda lolos :D");
      } else {
        alert("Captcha Anda belum tepat :(");
        document.getElementById("submitButton").setAttribute("disabled", "");
      }
      event.preventDefault();
    });
  });

  // copy
  document.getElementById("inputCopy").addEventListener("copy", function () {
    alert("Anda telah mengcopy sebuah teks");
  });

  // paste
  document.getElementById("inputPaste").addEventListener("paste", function () {
    alert("Anda telah mempaste sebuah teks");
  });
}
