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

// async/await

async function accountGoogle() {
  try {
    const dataUser = await login("refsi_maulana");
    const { token, username } = dataUser;
    const getApiKey = await getUser(token);
    const { apiKey } = getApiKey;
    const getPict = await getPictures(apiKey);
    console.log(`
    your username : ${username} 
    your token : ${token}
    your apiKey : ${apiKey}
    your pictures : ${getPict}
    `);
  } catch (error) {
    console.log(error.message);
  }
}

accountGoogle();
