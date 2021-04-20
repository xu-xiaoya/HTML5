if (navigator.geolocation) {
    document.getElementById("support").innerHTML = "HTML5 Geolocation is supported in your browser.";
} else {
    document.getElementById("support").innerHTML = "HTML5 Geolocation is  not supported in your browser.";
}