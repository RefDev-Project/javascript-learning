const token = Math.floor(Math.random() * 1000) + 1;
const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username) {
  console.log("login process started...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username !== "refsi_maulana") {
        reject(new Error("username not found"));
      }
      resolve({ token, username });
    }, 1000);
  });
}

function getUser(token) {
  console.log("get user process started...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!token) {
        reject(new Error("token not found"));
      }
      resolve({ apiKey: "x123Key" });
    }, 2000);
  });
}

function getPictures(apiKey) {
  console.log("get pictures process started...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (apiKey !== "x123Key") {
        reject(new Error("apiKey not found"));
      }
      resolve(pictures);
    }, 3000);
  });
}

login("refsi_maulana")
  .then((response) => {
    const { token, username } = response;
    getUser(token).then((response) => {
      const { apiKey } = response;
      getPictures(apiKey).then((response) => {
        console.log(response);
      });
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
