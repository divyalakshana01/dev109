
function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
   upRight(pHeight, pColorEven, pColorOdd, pSymbol);
   downRight(pHeight, pColorEven, pColorOdd, pSymbol);
   upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
   downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
}

const leftDiv = document.getElementById("upLeft");
const rightDiv = document.getElementById("upRight");
const downRightDiv = document.getElementById("downRight");
const downLeftDiv = document.getElementById("downLeft");

leftDiv.style.display = "inline-block";
rightDiv.style.display = "inline-block";
leftDiv.style.marginRight = "0px";
rightDiv.style.marginLeft = "0px";
leftDiv.style.fontFamily = "monospace";
rightDiv.style.fontFamily = "monospace";
downLeftDiv.style.display = "inline-block";
downRightDiv.style.display = "inline-block";
downRightDiv.style.marginRight = "0px";
downLeftDiv.style.marginLeft = "0px";
downLeftDiv.style.fontFamily = "monospace";
downRightDiv.style.fontFamily = "monospace";

function upLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
   var rLine = "<pre>";
   for (i = 0; i < pHeight; i++) {
      rLine += "<p>";
      for (s = 0; s < pHeight - i - 1; s++) {
         rLine += " ";
      }
      for (j = 0; j <= i; j++) {
         if (j % 2)
            rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
         else
            rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
      }
      rLine += "</p>";
   }
   rLine += "</pre>";
   document.getElementById("upLeft").innerHTML = rLine;
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {
   var rLine = "";
   for (i = 0; i < pHeight; i++) {
      rLine += "<p>";
      //Create each line on the Rhombus
      for (j = 0; j <= i; j++) {

         //Is the position even or odd so we change the color
         if (j % 2)
            //even
            rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
         else
            //odd
            rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";

      }
      rLine += "</p>";
      // console.log(rLine);

   }

   document.getElementById("upRight").innerHTML = rLine;
}

function downLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
   rLine = "<pre>";
   for (i = pHeight; i > 0; i--) {
      rLine += "<p>";
      for (s = 0; s < pHeight - i; s++) {
         rLine += " ";
      }


      for (j = 0; j < i; j++) {
         if (j % 2 === 0)
            rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
         else
            rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      }
      rLine += "</p>";
   }
   document.getElementById("downLeft").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
   var rLine = "";
   for (i = pHeight; i > 0; i--) {
      rLine += "<p>";
      //Create each line on the Rhombus
      for (j = 0; j < i; j++) {

         //Is the position even or odd so we change the color
         if (j % 2)
            //even
            rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
         else
            //odd
            rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";

      }
      rLine += "</p>";
      // console.log(rLine);

   }

   document.getElementById("downRight").innerHTML = rLine;
}
