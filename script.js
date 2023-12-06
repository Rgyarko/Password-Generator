// Assignment Code
var generateBtn = document.querySelector("#generate");

// User input varibles
var clickGeneratePassword;
var selectSymbol;
var selectNumber;
var selectUppercase;
var selectLowercase;

//  #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// Function to generate a random password
function generatePassword() {
  // Define character sets based on user input
  var lowercaseChars = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";

  var uppercaseChars = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";

  var numberChars = "0,1,2,3,4,5,6,7,8,9";
  
  var symbolChars = "!,@,#,$,%,^,&,*,(),_,+,[],{},|,;,:,.,<>,?";

  // Initialize an empty string to store the characters for the password
  var allChars = "";

  // Concatenate character sets based on user input
  if (selectLowercase) {
    allChars += lowercaseChars;
  }
  if (selectUppercase) {
    allChars += uppercaseChars;
  }
  if (selectNumber) {
    allChars += numberChars;
  }
  if (selectSymbol) {
    allChars += symbolChars;
  }

  // Check if the user has selected at least one character set
  if (allChars === "") {
    alert("Please select at least one character set.");
    return "";
  }

  // Get the length of the password from the user
  var passwordLength = prompt("Enter the length of the password:");

  // Validate the user input for password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128.");
    return "";
  }

  // Generate the password
  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars.charAt(randomIndex);
  }

  // Return the generated password
  return generatedPassword;
 }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
   