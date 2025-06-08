// Function to add elements to the list and leaves an error message for empty input
function addElement() {
   document.getElementById('errorMsg').textContent = '';
   const originalInput = document.getElementById('itemInput').value;
   let isEmptyInput = false;

   try {
      // Compares the user input and checks if it is null or empty
      if (originalInput === "" || originalInput == null) {
         isEmptyInput = true;
         throw new Error("input is empty");
      }

      // A new list item is created and the user input is stored in it
      const newItem = document.createElement('li');
      newItem.textContent = originalInput;

      // The new list item is added to the to-do list
      document.getElementById('todo').appendChild(newItem);

      // E.C: Extra Credit done by Divyalakshana Perumal Rajaram
      // Extra Credit --> Text input box cleared after item is added
      document.getElementById('itemInput').value = "";

   } catch (e) {
      console.log(e);

   } finally {
      // Error message when input is empty or null
      if (isEmptyInput) {
         document.getElementById('errorMsg').textContent = 'Entry was empty. Please enter an item.';
      }
   }
}
