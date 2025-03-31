//update the year in the footer automatically
function updateYear() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
}

//update the year in the footer automatically upon loading the page
window.onload = function() {
    updateYear();
}
