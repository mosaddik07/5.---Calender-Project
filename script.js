let date = document.getElementById('date');
let week = document.getElementById('week');
let month = document.getElementById('month');
let year = document.getElementById('year');

const today = new Date();
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonth = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

date.innerHTML = today.getDate();
week.innerHTML = weekDays[today.getDay()]
month.innerHTML = allMonth[today.getMonth()]
year.innerHTML = today.getFullYear();

