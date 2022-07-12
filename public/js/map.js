mapboxgl.accessToken = "pk.eyJ1Ijoic2FtcGV0aGVyaWNrMTg5OCIsImEiOiJjbDVoZHNqbW8wOGY4M2hwa3E4dmJpdHhyIn0.3X_0Y5vyl5tDZmTauAe0dQ"

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-99.153873,19.420735],
    zoom: 15
})