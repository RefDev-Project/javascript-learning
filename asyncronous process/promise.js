const users = ["John", "Jack", "Abigail"];
function getUsers(isOffline) {
  // return a promise object
  return new Promise((resolve, reject) => {
    // simulate network delay
    setTimeout(() => {
      if (isOffline) {
        reject(new Error("Maaf sedang offline"));
        return;
      }
      resolve(users);
    }, 3000);
  });
}

getUsers(false)
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
