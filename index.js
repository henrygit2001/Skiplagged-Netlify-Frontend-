const datapage = document.querySelector('#result');
const form = document.getElementById('form');

let To;
let From;
let Departure_date;
let Results_Count;

form.addEventListener('keypress', (e) => {
if (e.key === 'Enter') {
To = document.getElementById('box1').value
From = document.getElementById('box2').value
Departure_date = document.getElementById('box3').value
Results_Count =document.getElementById('box4').value
fetch(`https://skiplagged.com/api/search.php?from=${From}&to=${To}&depart=${Departure_date}`)
.then((response) => response.json())
.then((data) => {
console.log(data)})
.catch((err) => window.alert(`https://skiplagged.com/api/search.php?from=${From}&to=${To}&depart=${Departure_date}`));
}
});
