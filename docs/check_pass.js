// This script checks the password for a specific task (targil) and redirects if correct.  


// Get next targil number from URL parameters
var url = new URL(window.location.href);
var targilInt = url.searchParams.get("targil");
if (targilInt === null) {
    targilInt = 0; // Default value if not provided
}
let nextTargilInt = parseInt(targilInt) + 1;
var userName = url.searchParams.get("userName");
if (userName === null) {
    userName = ""; // Default value if not provided
}

// Get the password for the specified targil
const passwords_hashes = [0, 57, 1691, 48690]; // [clum, Tesha, Hamishim, EchadAdShalosh]
const pass_hash = passwords_hashes[targilInt];


function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function check_password(inputValue) {
    // convert the pass to it's hash
    //inputValue = String(inputValue);
    const input_pass_hash = hashCode(inputValue);

    // Check if the input value matches the password
    if (input_pass_hash === pass_hash) {
        return true; // Password is correct
    } else {
        console.log("Bad password! hashed password: '" + pass_hash + "' hashed input: '" + input_pass_hash + "'");
        return false; // Password is incorrect
    }

}

// Create a button to submit the password
const sendButton = document.getElementById('sendButton');
sendButton.addEventListener('click', function() {
    // Code to execute when the button is clicked
    const userInputField = document.getElementById('userInput');
    const inputValue = userInputField.value;

    if (check_password(inputValue)) {
        window.location.href = './success.html?nextTargilInt=' + nextTargilInt + '&userName=' + userName + '&targil=' + targilInt;
    } else {
        alert("סיסמה שגויה!   אין לך הרשאות לחשבון הזה! ");    
        userInputField.value = '';
    }
});


// From Success page:
function popup() {
    alert("הועבר!");
}
function NextTargil() {
    // window.location.href = './success?targil=' + targilurl;
    // let targilInt = parseInt(targilurl +1) 
    var url = new URL(window.location.href);
    var nextTargilInt = url.searchParams.get("nextTargilInt");
    var nameElement = document.getElementById('name');
    var name = nameElement.value;
    window.location.href = './?targil=' + nextTargilInt + '&userName=' + userName;
}

// Update number of targil & username in page. Need to be in the end - after pages finish to load
targilNumberElement = document.getElementById('mispar').innerHTML= "תרגיל " + targilInt;
document.title = "Targil: " + targilInt + " - " + userName;