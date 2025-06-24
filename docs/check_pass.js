const pagesecret = 'sharedddd';

const sendButton = document.getElementById('sendButton');
sendButton.addEventListener('click', function() {
    // Code to execute when the button is clicked
    const userInputField = document.getElementById('userInput');
    const inputValue = userInputField.value;

    if (inputValue === "") {
        window.location.href = './success';
    } else {
        alert("סיסמה שגויה!   אין לך הרשאות לחשבון הזה! ");    
        userInputField.value = '';
    }
});