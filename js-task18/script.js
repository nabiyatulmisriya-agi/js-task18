//promise
let completed = true;
let promise = new Promise(function (resolve, reject) {
  if (completed) {
    resolve("work done sucessfully");
  } else {
    reject("work incomplete");
  }
});
console.log(promise);
//then
let completed = true;
let promise = new Promise(function (resolve, reject) {
  resolve("completed");
});
promise
  .then(function sucess(result) {
    console.log(result);
  })
  .then(function sucess() {
    console.log("try different one");
  });
console.log(promise);

//catch
let completed = true;
let promise = new Promise(function (resolve, reject) {
  reject("not resolved");
});
promise
  .then(function sucess(result) {
    console.log(result);
  })
  .catch(function error(result) {
    console.log(result);
  });
console.log(promise);

//finally
let completed = true;
let promise = new Promise(function (resolve, reject) {
  resolve("promise not resolved");
});
promise.finally(function wish() {
  console.log("hav a gud day!");
});
console.log(promise);
