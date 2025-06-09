// Function to create a rhombus based on user inputs
function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
   // Call individual functions to draw all the four parts of rhombus
   upRight(pHeight, pColorEven, pColorOdd, pSymbol);
   downRight(pHeight, pColorEven, pColorOdd, pSymbol);
   upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
   downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
}

// Get the four HTML elements to display the rhombus parts
const leftDiv = document.getElementById("upLeft");
const rightDiv = document.getElementById("upRight");
const downRightDiv = document.getElementById("downRight");
const downLeftDiv = document.getElementById("downLeft");

// Display and style properties for the left and right divs
leftDiv.style.display = "inline-block";
rightDiv.style.display = "inline-block";
leftDiv.style.marginRight = "0px";
rightDiv.style.marginLeft = "0px";
leftDiv.style.fontFamily = "monospace";
rightDiv.style.fontFamily = "monospace";

// Display and style properties for the bottom divs
downLeftDiv.style.display = "inline-block";
downRightDiv.style.display = "inline-block";
downRightDiv.style.marginRight = "0px";
downLeftDiv.style.marginLeft = "0px";
downLeftDiv.style.fontFamily = "monospace";
downRightDiv.style.fontFamily = "monospace";

// Function to draw the up-left part of rhombus
function upLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
   var rLine = "<pre>";

   // Loop through each line
   for (i = 0; i < pHeight; i++) {
      rLine += "<p>";
      // Add spaces to align the triangle 
      for (s = 0; s < pHeight - i - 1; s++) {
         rLine += " ";
      }
      // Loop to add symbols with alternating colors
      for (j = 0; j <= i; j++) {
         if (j % 2)
            rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
         else
            rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
      }
      rLine += "</p>";
   }
   rLine += "</pre>";
   // Display the result in upLeft div
   document.getElementById("upLeft").innerHTML = rLine;
}

// Function to draw the up-right part of the rhombus
function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {
   var rLine = "";
   // Loop through each line
   for (i = 0; i < pHeight; i++) {
      rLine += "<p>";
      
      // Add symbols with alternating colors
      for (j = 0; j <= i; j++) {
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
   // Display the result in the upRight div
   document.getElementById("upRight").innerHTML = rLine;
}

// Function to draw the down left part of the rhombus
function downLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
   rLine = "<pre>";
   // Loop through each line in reversing order
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
   // Display the result in the downLeft div
   document.getElementById("downLeft").innerHTML = rLine;
}

// Function to draw the down-right part of the rhombus
function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
   var rLine = "";
   // Loop through each line in reverse order
   for (i = pHeight; i > 0; i--) {
      rLine += "<p>";
      // Add the symbols with alternating colors
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
   // Display the result in the downRight div
   document.getElementById("downRight").innerHTML = rLine;
}
