mapboxgl.accessToken = "pk.eyJ1Ijoic2FtcGV0aGVyaWNrMTg5OCIsImEiOiJjbDVoZHNqbW8wOGY4M2hwa3E4dmJpdHhyIn0.3X_0Y5vyl5tDZmTauAe0dQ"

//Map Barcelona

let map1 = new mapboxgl.Map({
    container: 'map1',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [2.174308,41.402419],
    zoom: 12
})

//Map Berlin

let map2 = new mapboxgl.Map({
    container: 'map2',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [13.378357,52.515742],
    zoom: 12
})

//Map Tokio

let map3 = new mapboxgl.Map({
    container: 'map3',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [139.887165,35.62695],
    zoom: 12
})

//Place marker Barcelona

let element1 = document.createElement('div')
element1.className = 'marker1'

element1.addEventListener('click', ()=>{
    alert('Nuestra sucursal Caffé Quimera - Barcelona')
})

let marker1 = new mapboxgl.Marker(element1)
.setLngLat({
    lng: 2.174308,
    lat: 41.402419,
    bearing: -60
})
.addTo(map1)

//Place marker Berlin

let element2 = document.createElement('div')
element2.className = 'marker2'

element2.addEventListener('click', ()=>{
    alert('Nuestra sucursal Caffé Quimera - Puerta de Brandeburgo')
})

let marker2 = new mapboxgl.Marker(element2)
.setLngLat({
    lng: 13.378357,
    lat: 52.515742,
    bearing: -40
})
.addTo(map2)

//Place marker Tokio

let element3 = document.createElement('div')
element3.className = 'marker3'

element3.addEventListener('click', ()=>{
    alert('Nuestra sucursal Caffé Quimera - Tokyo DisneySea')
})

let marker3 = new mapboxgl.Marker(element3)
.setLngLat({
    lng: 139.887165,
    lat: 35.62695,
    bearing: 90
})
.addTo(map3)

//Maps controls and navigation

map1.addControl(new mapboxgl.NavigationControl());
map1.addControl(new mapboxgl.FullscreenControl());

map2.addControl(new mapboxgl.NavigationControl());
map2.addControl(new mapboxgl.FullscreenControl());

map3.addControl(new mapboxgl.NavigationControl());
map3.addControl(new mapboxgl.FullscreenControl());

//CC maps

map1.on('mousemove', function (e) {
    document.getElementById('coordenadas1').innerHTML =
        JSON.stringify(e.lngLat);
});

map2.on('mousemove', function (e) {
    document.getElementById('coordenadas2').innerHTML =
        JSON.stringify(e.lngLat);
});

map3.on('mousemove', function (e) {
    document.getElementById('coordenadas3').innerHTML =
        JSON.stringify(e.lngLat);
});