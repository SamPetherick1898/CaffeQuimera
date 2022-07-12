mapboxgl.accessToken = "pk.eyJ1Ijoic2FtcGV0aGVyaWNrMTg5OCIsImEiOiJjbDVoZHNqbW8wOGY4M2hwa3E4dmJpdHhyIn0.3X_0Y5vyl5tDZmTauAe0dQ"

//Map Uruapan

let map1 = new mapboxgl.Map({
    container: 'map1',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-102.062825,19.421207],
    zoom: 15
})


//Map Berlin

let map2 = new mapboxgl.Map({
    container: 'map2',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [13.378357,52.515742],
    zoom: 15
})


//Map Tokio

let map3 = new mapboxgl.Map({
    container: 'map3',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [139.887165,35.62695],
    zoom: 15
})