window.onload = function() {
  let body = document.querySelector("body");

  let buttonDark = document.querySelector("button.darkMode");
  buttonDark.onclick = function() {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }

  let buttonLight = document.querySelector("button.lightMode");
  buttonLight.onclick = function() {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }

  let buttonLarge = document.querySelector("button.largeText");
  buttonLarge.onclick = function() {
    body.style.fontSize = "24px";
  }

  let buttonSmall = document.querySelector("button.smallText");
  buttonSmall.onclick = function() {
    body.style.fontSize = "16px";
  }
}