// Prompt user for input and convert it to Number
var table;

do {
   table = prompt("Please enter a number (0 to 10): ");
   table = Number(table);
} while (table < 0 || table > 10);

// Validate input and set default value
if (table === null || Number.isNaN(table)) {
   table = 0;
}

// Set counter to 1
var i = 1;

// Set Message                 
var msg = '<h2>Multiplication Table</h2>';

// Do multiplication
while (i < 11) {
   msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
   i++;
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
