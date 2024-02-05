const { promisify } = require("util");

function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ["John", "Jack", "Abigail"];
    if (isOffline) {
      callback(new Error("cannot retrieve users due offline"), null);
      return;
    }

    callback(null, users);
  }, 3000);
}

// create a promise version of getUsers
const getUsersPromise = promisify(getUsers);

getUsersPromise(false)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });

getUsersPromise(true)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });
