//DOM
const address = document.querySelector('.info__text--address');
const location = document.querySelector('.info__text--location');
const timezone = document.querySelector('.info__text--timezone');
const isp = document.querySelector('.info__text--isp');

//API

const apiKey = 'at_NR13vLwPZnckYQlgtecvHdVK3VMXi';

const getInfo = async () => {
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=8.8.8.8`);
    const data = await response.json();
    return data;
}


getInfo().then(data => {
    console.log(data, data.ip);
    address.innerText = data.ip;
    location.innerText = `${data.location.region}, ${data.location.city} ${data.location.postalCode}`
    timezone.innerText = data.location.timezone;
    isp.innerText = data.isp;
    
});






// display map
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    