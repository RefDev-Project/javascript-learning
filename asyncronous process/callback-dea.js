const token = Math.floor(Math.random() * 1000) + 1;
const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username, callback) {
  console.log("login process started...");
  setTimeout(() => {
    callback({ token, username });
  }, 1000);
}

function getUser(token, callback) {
  console.log("get user process started...");
  if (token) {
    setTimeout(() => {
      callback({ apiKey: "x123Key" });
    }, 2000);
  }
}

function getPictures(apiKey, callback) {
  console.log("get pictures process started...");
  if (apiKey) {
    setTimeout(() => {
      callback(pictures);
    }, 3000);
  }
}

login("refsi_maulana", (response) => {
  const { token, username } = response;
  console.log(response);

  getUser(token, (response) => {
    console.log(response);

    const { apiKey } = response;
    getPictures(apiKey, (response) => {
      console.log(response);
    });
  });
});
