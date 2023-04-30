// Current device

var userDeviceArray = [
    {device: 'Android', platform: /Android/},
    {device: 'iPhone', platform: /iPhone/},
    {device: 'iPad', platform: /iPad/},
    {device: 'Symbian', platform: /Symbian/},
    {device: 'Windows Phone', platform: /Windows Phone/},
    {device: 'Tablet OS', platform: /Tablet OS/},
    {device: 'Linux', platform: /Linux/},
    {device: 'Windows XP (or Server 2003) and older', platform: /Windows NT 5.1/},
    {device: 'Windows Vista (or Server 2008)', platform: /Windows NT 6.0/},
    {device: 'Windows 7 (or Server 2008 R2)', platform: /Windows NT 6.1/},
    {device: 'Windows 8 (or Server 2012)', platform: /Windows NT 6.2/},
    {device: 'Windows 8.1 (or Server 2012 R2)', platform: /Windows NT 6.3/},
    {device: 'Windows 10/11 (or Server 2016/2019)', platform: /Windows NT 10.0/},
    {device: 'Macintosh', platform: /Macintosh/}
];

var platform = navigator.userAgent;

function getPlatform() {
    for (var i in userDeviceArray) {
        if (userDeviceArray[i].platform.test(platform)) {
            return userDeviceArray[i].device;
        }
    }
    return 'Unknown platform!' + platform;
}

// ============================================================= 
// Timer

// Set the date we're counting down to
var countDownDate = new Date("sep 16, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Happy Birthday, OST!";
    }
}, 1000);

// ============================================================= 
// Clock

setInterval(function () {
    var now = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
}, 1000);

// ============================================================= 
// Hide fixed elements

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("name").style.color = "var(--back-blue-color-a1-50)";
    document.getElementById("navbar").style.backgroundColor = "var(--back-blue-color-n1-800)";
    document.getElementById("navbar").style.boxShadow = "0 5px 5px #00000050";
    document.getElementById("page-title").style.color = "transparent";
  } else {
    document.getElementById("name").style.color = "transparent";
    document.getElementById("navbar").style.backgroundColor = "#00000000";
    document.getElementById("navbar").style.boxShadow = "none";
    document.getElementById("page-title").style.color = "var(--back-blue-color-a1-200)";
  }
}

// ============================================================= 
// Copy button code

function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
    alert("Copied!");
    }

// ============================================================= 
// Button effect code

const btns = document.querySelectorAll('button')

btns.forEach(el => {
    el.addEventListener('click', function(e) {
        const
            size = Math.max(this.offsetWidth, this.offsetHeight),
            x = e.offsetX - size / 2,
            y = e.offsetY - size / 2,
            wave = document.createElement('span')

        // Create a new wave
        wave.className = 'wave'
        wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
        this.appendChild(wave)

        // Remove element after animation ends
        setTimeout(() => wave.remove(), 500)
    })
})

// ============================================================= 
// Navbar code

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

// ============================================================= 
// Smooth

setTimeout(function(){
	document.body.classList.add('body_visible');
}, 0.5);

// ============================================================= 
// Input code

document.write("Copyright © OST - Operating System Tester, 2022 - ", new Date().getFullYear(), '. Hosted in <a href="https://www.github.com" class="link">Github</a><br><br>');
document.write('Current time: <span id="clock" class="time"></span><br><br>')
document.write('Time before my birthday: <span id="demo" class="time"></span><br><br>')
document.write('Current operating system: <span class="time">' + getPlatform() + '</span>');