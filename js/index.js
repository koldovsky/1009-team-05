function show_hide_hamburger() {
    var display_value = document.getElementById("hamburger-list").style.display
    var body_overflow = document.getElementsByTagName("body");
    if (display_value == "unset") {
        document.getElementById("hamburger-list").style.display = "none";
        body_overflow[0].style.overflow = "unset";
    }
    else {
        document.getElementById("hamburger-list").style.display = "unset";
        body_overflow[0].style.overflow = "disabled";
    }
}