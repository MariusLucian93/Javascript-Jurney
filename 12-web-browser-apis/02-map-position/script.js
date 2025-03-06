const map = L.map('map').setView([0, 0], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


const marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition(function (pos) {
    const lat = pos.coords.latitude;
    const lag = pos.coords.longitude;


    marker.setLatLng([lat, lag]).update();
    map.setView([lag, lag], 2);

    marker.bindPopup('<strong>Hello Lume</strong> <br> This is my location')
})