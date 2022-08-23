const datapage = document.querySelector('#result');
const form = document.getElementById('form');
const datapage_original = document.getElementById('form');
//Note: (script.js from index.js has the cdn url. CDN is used to run live moment.js
//Anytime you need to run a Javascript library in client-side, you search up CDN and the name of the library)

let To;
let From;
let Departure_date;
let Results_Count;
let DATES_TO_GET = 30;
//Filling out the Form


function myFetch(){
form.addEventListener('keypress', (e) => {
if (e.key === 'Enter') {
if(document.getElementById('data')){while(document.getElementById('data')){document.getElementById('data').remove()}}
To = document.getElementById('box1').value
From = document.getElementById('box2').value
Departure_date = document.getElementById('box3').value
Results_Count = document.getElementById('box4').value
return fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://skiplagged.com/api/search.php?from=${From}&to=${To}&depart=${Departure_date}`)}`)
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
    }})
;}})

myFetch().then(Webhook).then(() =>LoopDate(1)).then(() => LoopDate(2))
.catch((err) => window.alert(err))}

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
document.getElementById('box3').value= moment().add(a, 'd').format("YYYY-MM-DD")
setTimeout("", 5000);
document.body.dispatchEvent(new KeyboardEvent("keypress", { key: "Enter"}))
}

