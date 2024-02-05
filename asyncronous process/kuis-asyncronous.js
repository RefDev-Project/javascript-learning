/**
 * Ini adalah program untuk mendapatkan nama user dari internet.
 * Terdapat dua fungsi yang sudah dibuat, berikut penjelasanya:
 *   - fetchingUserFromInternet:
 *     - fungsi ini digunakan untuk mendapatkan data user seolah-olah dari internet.
 *     - fungsi ini menerima dua argumen yakni callback, dan isOffline.
 *     - Argumen callback membawa dua nilai yakni error dan user:
 *       - error: NetworkError akan dibawa oleh callback bila isOffline bernilai true.
 *       - user: data user akan dibawa oleh callback bila isOffline bernilai false.
 *   - gettingUserName:
 *      - fungsi ini memanggil fungsi fetchingUserFromInternet dengan nilai isOffline: false untuk mendapatkan data user name dari internet.
 *      - fungsi ini harus mengembalikan nilai user.name, namun sulit karena menggunakan pola callback.
 *      - Maka dari itu, ubahlah fetchingUserFromInternet dari callback menjadi promise
 *      - Dengan begitu, Anda bisa memanfaatkan .then atau async/await untuk mendapatkan user.name.
 *
 * TODO: 1
 * - Ubahlah fungsi fetchingUserFromInternet dengan memanfaatkan Promise. Anda bisa menghapus implementasi callback.
 *
 * TODO: 2
 * - Ubahlah cara mengonsumsi fungsi fetchingUserFromInternet dari callback ke Promise.
 * - Tips:
 *   - Agar penulisan kode lebih bersih dan mudah dibaca, coba manfaatkan async/await
 *
 *
 * Notes:
 * - Jangan ubah struktur atau nilai dari objek user yang dibawa oleh callback sebelumnya.
 * - Tetap gunakan NetworkError untuk membawa nilai error pada Promise
 */

// Todo: 1

// error network
class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.message = "NetworkError";
  }
}

const users = {
  name: "Refsi Ganteng",
  age: 18,
};

// fake API
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10000,
  },
  {
    id: 2,
    name: "Product 2",
    price: 20000,
  },
];

// promise
const fetchingUserFromInternet = (isOffline) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOffline) {
        reject(new NetworkError("Gagal Mendapatkan data dari internet"));
      }
      resolve(products);
    }, 3000);
  });
};

fetchingUserFromInternet(false)
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

// async await
// Todo: 2
const gettingUserName = async () => {
  try {
    const user = await fetchingUserFromInternet(false);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

gettingUserName().then((data) => console.log(data));
