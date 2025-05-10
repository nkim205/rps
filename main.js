function choice() {
    var popup = document.getElementById("popup");
    if (popup.style.visibility == "hidden") {
        popup.style.visibility = "visible";
    } else {
        popup.style.visibility = "hidden";
    }
    console.log("clicked");
}