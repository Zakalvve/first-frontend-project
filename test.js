let text = document.querySelector('.animated-text')
let elementVisibleBuffer = 0; //adds a buffer between the time the element becomes visible and the moment the event is triggered

function scrolListener(e){
  if ( checkVisible(text) )
  {
	console.log("Animation Triggered");
    text.children[0].classList.add("showtext");
    text.children[0].classList.remove("hidetext");
  }
  else {
	text.children[0].classList.add("hidetext");
    text.children[0].classList.remove("showtext");
  }
  
}

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top + elementVisibleBuffer - viewHeight >= 0);
}

document.onscroll = scrolListener

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;