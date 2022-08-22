const datapage = document.querySelector('#result');
const form = document.getElementById('form');
const datapage_original = document.getElementById('form');

let To;
let From;
let Departure_date;
let Results_Count;
//Filling out the Form
form.addEventListener('keypress', (e) => {
if (e.key === 'Enter') {
if(document.getElementById('data')){while(document.getElementById('data')){document.getElementById('data').remove()}}
To = document.getElementById('box1').value
From = document.getElementById('box2').value
Departure_date = document.getElementById('box3').value
Results_Count = document.getElementById('box4').value
fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://skiplagged.com/api/search.php?from=${From}&to=${To}&depart=${Departure_date}`)}`)
.then((response) => response.json())
.then((data) => {
for (let i = 0; i < Results_Count; i++) {
    let flight_No = data.depart[i][3]
    console.log(data);
    datapage.insertAdjacentHTML(
        'beforeend',
        `<tr id=data>
<td>${data.flights[flight_No][0].map(ele => {return ele[0]})}</td>
<td id=${i}>${(data.depart[i][0]).map(ele => {return '$'+ele/100})}</td>
</tr>`
      );
    }}).then(Webhook)
.catch((err) => window.alert(`https://skiplagged.com/api/search.php?from=${From}&to=${To}&depart=${Departure_date}`));;;}
;});

function Webhook(){
URL = `https://discord.com/api/webhooks/1009303429715333182/CjTAkOgzUb6p9llA85rVAW1UFQTrtvvdLgTXgzyTxLYadiBH_atvu2zglEWwozooNaNr`
  fetch(URL, {
     "method":"POST",
     "headers": {"Content-Type": "application/json"},
     "body": JSON.stringify({
        "content": `The cheapest price for ${Departure_date} from ${From} to ${To} is : ${document.getElementById("0").innerHTML}`
      })

    })

}
//Selection Sort
//let minimum;

//Loop Date
function LoopDate(a){
var tomorrow = new Date();
document.getElementById('box3').innerHTML = tomorrow.setDate(tomorrow.getDate() + a);
}