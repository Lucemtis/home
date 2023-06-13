
var cursor = document.getElementById("cursor");
var cursor2 = document.getElementById("cursor2");
var cursor3 = document.getElementById("cursor3");

function updateCursors(event) {
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
  cursor2.style.left = event.clientX + "px";
  cursor2.style.top = event.clientY + "px";
  cursor3.style.left = event.clientX + "px";
  cursor3.style.top = event.clientY + "px";
}

document.addEventListener("mousemove", function (event) {
  requestAnimationFrame(function () {
    updateCursors(event);
  });
});

function addHoverClass() {
  cursor2.classList.add("hover");
  cursor3.classList.add("hover");
}

function removeHoverClass() {
  cursor2.classList.remove("hover");
  cursor3.classList.remove("hover");
}

removeHoverClass();

var hoverTargets = document.querySelectorAll(".hover-target");
hoverTargets.forEach(function (target) {
  target.addEventListener("mouseover", addHoverClass);
  target.addEventListener("mouseout", removeHoverClass);
});
