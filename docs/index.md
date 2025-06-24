---
layout: default
---

<script>
    const pagesecret = 'pagesecret1323';
</script>

<div dir="rtl">
<b>שים לב!</b><br>
חובה להזין סיסמה כדי להעביר כסף<br>
<!-- <script>
        function myFunction() {
            // alert("Hello! I am an alert box!");
            window.location.href = './2';
        }
</script> -->
<input type="text" id="userInput">
<!-- <button id="sendButton">שלח</button> -->
<button id="sendButton" onclick="checkpass()">שלח</button>

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
            alert("שגיאה!   אין לך הרשאות לחשבון הזה! ");
            userInputField.value = '';
        }
    });
</script>
