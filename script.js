// menu click JS
const menu = document.querySelector('.menu')

const handleMenuClick = () => {
  const allTargets = document.querySelectorAll('.target')

  allTargets.forEach( target => {
    target.classList.toggle('change')
  })
}

menu.addEventListener( 'click', handleMenuClick )



// wrapper click JS
const allWrappers = document.querySelectorAll('.wrapper')

const handleWrapperClick = () => {
  const targets = document.querySelectorAll('.target')
  targets.forEach( target => {
    target.classList.remove('change')
  } )
}

allWrappers.forEach( wrapper =>{
  wrapper.addEventListener('click', handleWrapperClick)
} )



// Section 3 play video on mouse hover JS

const videos = document.querySelectorAll('.video')

videos.forEach( video =>{
  video.addEventListener('mouseover', ()=>{
    video.play()
  })
  video.addEventListener('mouseout', ()=>{
    video.pause()
  })
})




function initMap() {
        var options = {
          center: { lat: 43.21451838095573, lng: 76.92414926940302 },
          zoom: 15,
          styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
],
        }

        var map = new google.maps.Map(document.getElementById("map"), options);

        var icon = {
        url:"images/icon.png",
        scaledSize: new google.maps.Size(50,50),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0,0)
    };

        marker1 = new google.maps.Marker({
        position: {lat: 43.20768923938211, lng: 76.6659773864421},
        map:map,
        icon: icon
    });
        marker = new google.maps.Marker({
        position: {lat: 43.263981411719165, lng: 76.93503829585377},
        map:map,
        icon: icon
    });

        marker = new google.maps.Marker({
        position: {lat: 43.21451838095573, lng: 76.92414926940302},
        map:map,
        zoom:100,
        icon: icon
    });
        var info = new google.maps.InfoWindow({
          content: '<h4>Here is our Main Building</h4>'
        });
        marker.addListener("click", function() {
          info.open(map, marker);
        });

}


