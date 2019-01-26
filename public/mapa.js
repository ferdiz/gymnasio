const mymap = L.map('mapid').setView([-34.597761, -58.549846], 13)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZmVkZXppcmEiLCJhIjoiY2pyZHN1ZnUxMGxtZDN5bDUxMWExYTNvcSJ9.3B7S_zynJKGaltPODhGLEQ'
}).addTo(mymap);

recuperarLocalizacion()

function recuperarLocalizacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarCoordenada)
    } else {
      alert('El navegador no dispone la capacidad de geolocalización')
    }
}

function mostrarCoordenada(posicion) {
    L.marker([posicion.coords.latitude, posicion.coords.longitude]).addTo(mymap)
}