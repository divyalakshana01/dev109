const found = {
    tissue: false,
    clock: false,
    button: false
  };

  function foundItem(name) {
    if (!found[name]) {
      found[name] = true;
      document.getElementById(name).style.textDecoration = "line-through";

      if (Object.values(found).every(v => v)) {
        setTimeout(() => {
          if (confirm("You found all characters! Play again?")) {
            replay();
          } else {
            document.getElementById("replay").style.display = "inline-block";
          }
        }, 300);
      }
    }
  }

  document.querySelectorAll("area").forEach(area => {
    area.addEventListener("click", function (event) {
      event.preventDefault();
      foundItem(area.alt);
    });
  });

  function replay() {
    location.reload();
  }
