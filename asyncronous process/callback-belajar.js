let token = Math.floor(Math.random() * 1000) + 1;
const apiKey = {
  apikey: "x123Key",
};

function login(username, callback) {
  setTimeout(() => {
    callback({
      token,
      username,
    });
  }, 1000);
}

function getUser(apikey, callback) {
  setTimeout(() => {
    callback(apiKey);
  }, 2000);
  f;
}

login("refsi_maulana", (data) => {
  const { token, username } = data;
  getUser(data.token, (data) => {
    console.log(data);
  });
});
