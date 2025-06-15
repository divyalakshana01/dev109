// Clear button logic
  var mybutton = document.querySelector("button");
  mybutton.addEventListener("click", function(event) {
    var element = document.getElementsByTagName("div");
    for (let index = element.length - 1; index >= 0; index--) {
      if (element[index].className === "dot") {
        element[index].parentNode.removeChild(element[index]);
      }
    }
    event.stopPropagation(); // prevent dot from appearing when clicking button
  });

  // Click anywhere to draw a dot, unless it's on the controls
  addEventListener("click", function(event) {
    // don't draw if clicking on form
    if (event.target.closest("#controls")) return; 

    var dot = document.createElement("div");
    dot.className = "dot";

    // Get color and size from input
    var color = document.getElementById("dotColor").value;
    var size = parseInt(document.getElementById("dotSize").value);

    // Apply user-defined size and color
    dot.style.width = dot.style.height = size + "px";
    dot.style.backgroundColor = color;
    dot.style.borderRadius = (size / 2) + "px";

    // Position the dot at click location
    dot.style.left = (event.pageX - size / 2) + "px";
    dot.style.top = (event.pageY - size / 2) + "px";

    document.body.appendChild(dot);
  });
