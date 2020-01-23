function handleSubmit() {
let location = document.getElementById("location");
let leavingDate = document.getElementById("date");
let dateResult = document.getElementById("dateResult");
let locationResult = document.getElementById("locationResult");
let weatherResult = document.getElementById("weatherResult");
let img = document.getElementsByTagName("img")[0];
leavingDate = new Date(leavingDate.value);

let time = leavingDate.getTime();
console.log(time);
    let data = {loc:location.value,date:time}
    fetch(`http://localhost:3030/Data`,{
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        // console.log(res.weather);
        // console.log(res.image);
        // console.log(res.weather);
        // document.getElementById('results').innerHTML = res.result
    })
}

export { handleSubmit }