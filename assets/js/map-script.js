window.onload = function() {
    GmapInit();
};

function GmapInit() {
    var Gmap = document.querySelectorAll('.map-canvas');
    Gmap.forEach(function(mapElement) {
        var lat = parseFloat(mapElement.dataset.lat) || 0,
            lng = parseFloat(mapElement.dataset.lng) || 0,
            zoom = parseFloat(mapElement.dataset.zoom) || 12,
            mapType = mapElement.dataset.type || 'roadmap',
            hue = mapElement.dataset.hue || '',
            title = mapElement.dataset.title || '',
            contentString = mapElement.dataset.content || '',
            iconPath = mapElement.dataset.iconPath || '';

        var mapOptions = {
            zoom: zoom,
            center: new google.maps.LatLng(lat, lng),
            mapTypeId: google.maps.MapTypeId[mapType.toUpperCase()],
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [{"color": "#444444"}]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [{"color": "#fafafa"}]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {"saturation": -100},
                        {"lightness": 45}
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {"color": hue || "#e1e7f0"},
                        {"visibility": "on"}
                    ]
                }
            ]
        };

        var map = new google.maps.Map(mapElement, mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            map: map,
            icon: iconPath,
            title: title
        });

        if (contentString) {
            var infowindow = new google.maps.InfoWindow({
                content: '<div class="map-data"><h6>' + title + '</h6><div class="map-content">' + contentString + '</div></div>'
            });

            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
        }
    });
}