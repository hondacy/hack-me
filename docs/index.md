---
layout: default
---
{% include google-analytics.html %}  
<div dir="rtl">
    <h3>
        <h2 id="mispar">תרגיל סייבר קליל</h2>
        <br>
        במסכים הבאים תצטרך לפרוץ את הסיסמה כדי להתקדם לשלב הבא.<br>
        מה שמך? <input type="userName" id="userName">
        <button id="sendUserName">שלח</button>
    </h3>
</div>

<script>
    // Create a button to submit the user name
    const sendButton = document.getElementById('sendUserName');
    sendButton.addEventListener('click', function() {
        // Code to execute when the button is clicked
        const userInputField = document.getElementById('userName');
        const inputValue = userInputField.value;

        if (inputValue) {
            window.location.href = './targilim.html?userName=' + inputValue;
        } else {
            alert("חייב להזין שם!");    
            userInputField.value = '';
        }
    });

</script>
