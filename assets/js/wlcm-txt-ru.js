// =============================================================
// Welcome text

var currentTime = new Date().getHours();
var greeting;

if (currentTime >= 5 && currentTime < 12) {
    greeting = 'Не начать ли это утро с чашечкой чая?';
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = 'Если на улице солнце, значит можно выйти на улицу!';
  } else if (currentTime >= 18 || currentTime < 5) {
    greeting = 'Пора бы провести это время с родными!';
  } else {
    greeting = 'Кхм-кхм... Почему не спим?';
  }

document.write('<h1 id="page-title">' + greeting + '</h1>');