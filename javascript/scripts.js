function iconFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
    document.getElementById("navbar-contact").style.border= "None"
  } else {
    x.className = "navbar";
    document.getElementById("navbar-contact").style.borderLeftStyle= "solid"
    document.getElementById("navbar-contact").style.borderLeftWidth= "2px"
  }
}