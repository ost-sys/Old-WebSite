// =============================================================
// Welcome text

var currentTime = new Date().getHours();
var greeting;

if (currentTime >= 5 && currentTime < 12) {
    greeting = 'Why not start this morning with a cup of tea?';
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = "If it's sunny outside, then you can go outside!";
  } else if (currentTime >= 18 || currentTime < 5) {
    greeting = "It's time to spend this time with your family!";
  } else {
    greeting = "Ahem-ahem... Why don't we sleep?";
  }

document.write('<h1 id="page-title">' + greeting + '</h1>');