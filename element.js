function parallax() {
    var s = document.getElementById("faster");
    var yPos = 0 - window.pageYOffset / 3;
    s.style.top = 0 + yPos + "%";
}

window.addEventListener("scroll", function() {
    parallax();
});