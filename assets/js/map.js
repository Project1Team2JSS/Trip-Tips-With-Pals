// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 41.881832, lng: -87.623177 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();

$("#city").on("change keyup", function() {
    var city = $(this).val()
    $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(city), function(val) {
      if(val.results.length) {
        var location = val.results[0].geometry.location
        $("#lat").val(location.lat)
        $("#lon").val(location.lng)
      }
    })
  })