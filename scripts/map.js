"use strict"

function initMap() {
    // The location of Uluru
    let location = {lat: 59.919, lng: 30.354};
    // The map, centered at Uluru
    let map = new google.maps.Map(
        document.getElementById('contact-map'), {zoom: 14, center: location});
    // The marker, positioned at Uluru
    let marker = new google.maps.Marker({position: location, map: map, icon: "images/map_marker.png"});
};

