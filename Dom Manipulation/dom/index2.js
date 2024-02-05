const newElement = document.createElement("li");
newElement.innerText = "Selamat Menikmati...";

const daftar = document.getElementById("daftar");
daftar.appendChild(newElement);

const newElement2 = document.createElement("li");
newElement2.innerText = "Hidupkan Kompor";

const nilaiAwal = document.getElementById("awal");
daftar.insertBefore(newElement2, nilaiAwal);
