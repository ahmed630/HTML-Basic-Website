function init() {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById("nameText").innerHTML = "Hello " + urlParams.get('name');
    document.getElementById("funFactText").innerHTML = urlParams.get('funFact');
}
