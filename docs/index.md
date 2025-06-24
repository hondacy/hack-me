---
layout: default
---

<script>
    const pagesecret = 'pagesecret1323';
</script>

<div dir="rtl">
<h3>
    <b>שים לב!</b><br>
    חובה להזין את הסיסמה כדי להעביר כסף
    <br>
    סיסמה: <input type="text" id="userInput">
    <button id="sendButton" onclick="checkpass()">שלח</button>
</h3>
</div>

<script>
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
</script>
