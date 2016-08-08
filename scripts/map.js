// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), { 
    // map styles 
    styles: [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#f9b460"}]}],
    zoom: 15,
    scrollwheel: false,
    center: {lat: -33, lng: 151}
  });

  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: -33.890, lng: 151.274},
    map: map,
    icon: image
  });
}


