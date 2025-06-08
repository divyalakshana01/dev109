function isValid() {
   if (firstName() &&
      lastName() && email() && phone() && username() &&
      password() && address() && city() && country()  && state() && zipcode()
   )
      return true;
   else
      document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
   event.preventDefault();
   return false;
}

// First name validation
FirstName.addEventListener('blur', firstName, false);

function firstName() {
   //1) Create variable
   var validFirstname = false;

   //2) read value from HTML
   var firstname = document.getElementById("FirstName").value;
   var errorMessages = "";

   //3) Do validation
   if (firstname === "null" || firstname === "" || firstname.length > 20) {
      errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
      console.log("First name invalid — length")
   } else if (firstname.match("^[a-zA-Z ,.'-]+$") === null) {
      errorMessages += "<p>Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)</p>";
      console.log("First name invalid — bad characters")
   } else {
      validFirstname = true;
      console.log("First name valid")
   };

   //4) Send error message to HTML
   document.getElementById("fname").innerHTML = errorMessages;

   //5) return status of each field
   return (validFirstname);
};

// Last Name validation
LastName.addEventListener('blur', lastName, false);

function lastName() {
   //1) Create variable
   var validLastname = false;

   //2) read value from HTML
   var lastname = document.getElementById("LastName").value;
   var errorMessages = "";

   //3) Do validation
   if (lastname === "null" || lastname === "" || lastname.length > 20) {
      errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
      console.log("last name invalid — length")
   } else if (lastname.match("^[a-zA-Z ,.'-]+$") === null) {
      errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
      console.log("Last name invalid — bad characters")
   } else {
      validLastname = true;
      console.log("Last name valid")
   };

   //4) Send error message to HTML
   document.getElementById("lname").innerHTML = errorMessages;

   //5) return status of each field
   return (validLastname);
};


// Email Validation
Email.addEventListener('blur', email, false);

function email() {
   // Create variable 
   var validEmail = false;

   // Read value from HTML
   var userEmail = document.getElementById("Email").value;
   var errorMessages = "";

   // Do validation
   var atpos = userEmail.indexOf("@");
   var dotpos = userEmail.lastIndexOf(".");

   if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
      errorMessages = "<p>Invalid email</p>";
      console.log("Email invalid");
   } else {
      validEmail = true;
      console.log("Email valid");
   }

   // Send error message to HTML
   document.getElementById("emailerror").innerHTML = errorMessages;

   // Return status of this field
   return (validEmail);
}

// Phone Validation
Phone.addEventListener('blur', phone, false);

function phone() {
   var validPhone = false;
   var phone = document.getElementById("Phone").value;
   var errorMessages = "";

   var validPattern = /^[0-9\-]+$/;

   //!phone.match(validPattern)

   if (phone === "null" || phone.length > 15 || phone.length < 10 || isNaN(phone)) {
      errorMessages = "<p>Invalid phone number format</p>";
      console.log("Phone number invalid - bad characters");
   } else {
      validPhone = true;
      console.log("Phone number valid");
   }

   document.getElementById("phoneerror").innerHTML = errorMessages;
   return (validPhone);
}

// Username Validation
Username.addEventListener('blur', username, false);

function username() {
   var validUsername = false;
   var username = document.getElementById("Username").value;
   var errorMessages = "";

   if (username.length > 12 || username === "null" || username === "") {
      errorMessages = "<p>Invalid Username. Username must have atmost 12 characters</p>";
      console.log("Username is invalid");
   } else {
      validUsername = true;
      console.log("Username is valid");
   }

   document.getElementById("usernameError").innerHTML = errorMessages;
   return (validUsername);
}


// Password Validation

Password.addEventListener('blur', password, false);

function password() {
   var validPassword = false;
   var password = document.getElementById("Password").value;
   var errorMessages = "";

   if (password.length > 7 || password === "null" || password === "") {
      errorMessages = "<p>Invalid Password. Password must have atmost 7 characters</p>";
      console.log("Password is invalid");
   } else {
      validPassword = true;
      console.log("Password is valid");
   }

   document.getElementById("passwordError").innerHTML = errorMessages;
   return (validPassword);
}

// Address Validation

Address.addEventListener('blur', address, false);

function address() {
   var validAddress = false;
   var address = document.getElementById("Address").value;
   var errorMessages = "";

   if (address === "null" || address === "") {
      errorMessages = "<p>Address is required</p>";
      console.log("Address missing");
   } else {
      validAddress = true;
      console.log("Address ia valid");
   }

   document.getElementById("addressError").innerHTML = errorMessages;
   return (validAddress);
}

// City Validation

City.addEventListener('blur', city, false);

function city() {
   var validCity = false;
   var city = document.getElementById("City").value;
   var errorMessages = "";

   if (city === "null" || city === "") {
      errorMessages = "<p>City is required</p>";
      console.log("City is missing");
   } else {
      validCity = true;
      console.log("City is valid");
   }

   document.getElementById("cityError").innerHTML = errorMessages;
   return (validCity);
}


// Display state based on country change
function handleCountryChange() {
   var country = document.getElementById("country").value;
   var stateUSA = document.getElementById("state-usa");
   var stateOther = document.getElementById("state-other");


   if (country === "USA") {
      stateUSA.style.display = "block";
      stateOther.style.display = "none";
   } else {
      stateOther.style.display = "block";
      stateUSA.style.display = "none";
   }

   // reset state error to empty
   document.getElementById("stateError").innerHTML = "";
}

// Country Validation
function country() {
   var validCountry = false;
   var country = document.getElementById("country").value;
   var errorMessages = "";

   if (country === "null" || country === "" || country === "--Select Country--") {
      errorMessages = "<p>Select Country</p>";
      console.log("Country is not selected");
   } else {
      validCountry = true;
      console.log("Country is selected");
   }
   document.getElementById("countryError").innerHTML = errorMessages;
   return (validCountry);
}

// State Validation
function state() {
   var validState = false;
   var stateUSA = document.getElementById("stateUSA").value;
   var country = document.getElementById("country").value;
   var stateOther = document.getElementById("stateOther").value;
   var errorMessages = "";

   if (country === "USA") {
      if (stateUSA === "null" || stateUSA === "") {
         errorMessages = "<p><strong>State is required.</strong></p>"
         console.log("State is missing");
         validState = false;
      } else {
         validState = true;
         console.log("Valid US State");
      }
   } else {
      if (stateOther === "null" || stateOther === "" || stateOther.length === 0) {
         errorMessages = "<p><strong>State is required.</strong></p>";
         console.log("State is missing");
         validState = false;
      } else {
         validState = true;
         console.log("Valid State");
      }
   }

   document.getElementById("stateError").innerHTML = errorMessages;
   return validState;
}

// Zip Code Validation
ZipCode.addEventListener('blur', zipcode, false);

function zipcode() {
   var validZipCode = false;
   var zipcode = document.getElementById("ZipCode").value;
   var country = document.getElementById("country").value;
   var errorMessages = "";

   if (country === "USA" && (zipcode.length > 5 || isNaN(zipcode) || zipcode === "null" || zipcode === "")) {
      errorMessages = "<p>Zip Code must be atmost 5 digits</p>";
      console.log("Zipcode is invalid");
   } else {
      validZipCode = true;
      console.log("Zipcode is valid");
   }
   document.getElementById("zipcodeError").innerHTML = errorMessages;
   return validZipCode;

}
