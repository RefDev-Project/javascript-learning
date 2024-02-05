// cara ke 1
function getUsers(callback) {
  setTimeout(() => {
    const users = ["Joko", "Wati", "Rini"];
    callback(users);
  }, 3000);
}

getUsers((response) => {
  console.log(response);
});

// cara ke 2
const dataUsers = ["Arya", "Dina", "Surya"];

function getUsers2(isOffline, callback) {
  setTimeout(() => {
    if (isOffline) {
      callback(new Error("Maaf sedang offline"), null);
      return;
    }

    callback(null, dataUsers);
  }, 3000);
}

const getDataUsers = (error, data) => {
  if (error) {
    console.log("process failed : ", error.message);
    return;
  }
  console.log("process success : ", data);
};

getUsers2(false, getDataUsers);
getUsers2(true, getDataUsers);
