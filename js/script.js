// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " blue" + " w3-text-black";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top blue w3-text-black", "");
        navbar.className = "w3-bar" + " w3-text-white"
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

//Used to open different tabs in gallery

function openTab(evt, TabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-black", "");
  }
  document.getElementById(TabName).style.display = "block";
  evt.currentTarget.className += " w3-black";
}

//Disable Printscreen

$('img').bind('contextmenu', function(e) {
return false;
});

$('body').bind('copy paste cut drag drop', function (e) {
e.preventDefault();
});

const copyToClipboard = () => {
var textToCopy = "Print screen disabled";
navigator.clipboard.writeText(textToCopy);
}

$(window).keyup((e) => {
if (e.keyCode == 44) {
setTimeout(
  copyToClipboard(),
  1000
);
}
});
