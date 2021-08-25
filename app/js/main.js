//DOM
const formIP = document.querySelector('.header__form');
const addressText = document.querySelector('.info__text--address');
const locationText = document.querySelector('.info__text--location');
const timezoneText = document.querySelector('.info__text--timezone');
const ispText = document.querySelector('.info__text--isp');

//API
const apiKey = 'at_NR13vLwPZnckYQlgtecvHdVK3VMXi';
formIP.addEventListener('submit', e=> {
    e.preventDefault();
    const ip= formIP.inputIP.value.trim();

    
const getInfo = async (ip) => {
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`);
    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    return data;
}


getInfo(ip).then(data => {
    console.log(data, data.ip);
    addressText.innerText = data.ip;
    locationText.innerText = `${data.location.region}, ${data.location.city} ${data.location.postalCode}`
    timezoneText.innerText = data.location.timezone;
    ispText.innerText = data.isp;
    map.setView([data.location.lat, data.location.lng], 13);

    L.marker([data.location.lat, data.location.lng]).addTo(map)
})
    
    
});



var map = L.map('map').setView([34.04915, -118.09462], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([34.04915, -118.09462]).addTo(map)
    