// This script checks the password for a specific task (targil) and redirects if correct.  


// Get next targil number from URL parameters
var url = new URL(window.location.href);
var targilurl = url.searchParams.get("targil");
if (targilurl === null) {
    targilurl = 0; // Default value if not provided
}
let nextTargilInt = parseInt(targilurl) + 1;


// Get the password for the specified targil
const passwords_hashes = [0, 57, 1691, 48690]; // [clum, Tesha, Hamishim, EchadAdShalosh]
const pass_hash = passwords_hashes[targilurl];


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
        window.location.href = './success?nextTargilInt=' + nextTargilInt;
    } else {
        alert("סיסמה שגויה!   אין לך הרשאות לחשבון הזה! ");    
        userInputField.value = '';
    }
});

// Update number of targil in page
targilNumberElement = document.getElementById('mispar').innerHTML= "תרגיל " + targilurl;
