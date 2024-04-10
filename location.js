// Verifica se o navegador suporta a API de Geolocalização
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // Exibe a localização na página
        var locationDisplay = document.getElementById("location");
        locationDisplay.innerHTML = "Latitude: " + latitude + ", Longitude: " + longitude;
    });
} else {
    // Caso o navegador não suporte a API de Geolocalização
    var locationDisplay = document.getElementById("location");
    locationDisplay.innerHTML = "Geolocalização não suportada pelo navegador.";
}
