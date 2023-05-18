var generateBtn = document.querySelector("#generate");

function generPassword(){

  var length = passLength();
  var charTypes = passChar();
  var password = randomPass(length, charTypes);
    // displayPassword(password);
    return password
}

function passLength() {
    var length = parseInt(prompt ("Please enter the length you want your password to be (8-128 characters)"));
    
    if (length < 8 || length > 128) {
        length = parseInt(alert("Invalid length. Must be between 8 and 128 characters."));
        console.log(length);
    }
    if (Number.isNaN(length)) {alert ("Please chose a numerical value.")
}
    return length;

}

function passChar() {
    var lowerC = confirm("Would you like to include lowercase characters?");
    var upperC = confirm("Would you like to include upppercase characters?");
    var numb = confirm("Would you like to include numbers?");
    var specialChar = confirm("Would you like to include special characters?");

    while (!(upperC || numb || specialChar || lowerC)) {
        alert("You must select least one character type.");
        var lowerC = confirm("Would you like to include lowercase characters?");
        var upperC = confirm("Would you like to include upppercase characters?");
        var numb = confirm("Would you like to include numbers?");
        var specialChar = confirm("Would you like to include special characters?");
    }
    return {
        lowerC: lowerC,
        upperC: upperC,
        numb: numb,
        specialChar: specialChar
    }
}

function randomPass(length, charTypes) {
    var charset = "";
    if (charTypes.lowerC) charset += "abcdefghijklmnopqrstuvwxyz";
    if (charTypes.numb) charset += "0123456789";
    if (charTypes.upperC) charset += "ABCDEFGFIJKLMNOPQRSTUVWXYZ";
    if (charTypes.specialChar) charset += "!@#$%^&*()_+~`|}{[];:?<>,./-=";

    var password = "";
    for (var i = 0; i < length; i++) {
    var randGen = Math.floor(Math.random() * charset.length); password += charset.charAt(randGen);
    }
    return password;
}

// function displayPassword(password) {
//     console.log("Your Randomized password is " + password)
// }

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

function writePassword() {

    var password = generPassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

 
 
 
 
 
 
  // ask for length of a password (prompt)
    //save to a variable
// check the length provided by user is a number and between 8-128

// confirm tag: 4 times for uppercase, lowercase, numbers, and special characters
    // save to variable
//check if uppercase or lowercase or number or special character is there 
    //(confirm/ TvsF)
  // combine the confirmed arrays

//create an array for all character types seperatly
//create an aray  to have a new password with length provided by user [ ]
//generate a random selector from combined array and push to new password array. do this step up to the length of the user input. (loop)

//return the value and display on the page



// ask tomorrow why the password doesnt generate on screen