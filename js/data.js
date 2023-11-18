let data = window.localStorage;

let date = new Date();

const account_data = new Array();
console.log(account_data);
let newData = {
  date: date,
  id: 1,
  detail: "hi",
  price: 1000,
  category: "hi",
};
let newData2 = {
  date: date,
  id: 2,
  detail: "hii",
  price: 2000,
  category: "hdi",
};
account_data.push(newData);
account_data.push(newData2);
console.log(account_data);

const JsonArray = JSON.stringify(account_data);
console.log(JsonArray);
