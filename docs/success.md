---
layout: default
---


<html lang="he">
<head>
    <meta charset="UTF-8">
    <title>ההתחברות הצליחה!</title>
</head>
<body>
    {% include google-analytics.html %}
    <div dir="rtl" style="background-image: url('./img/shtarot.png'); text-shadow: 1px 1px rgba(255, 235, 13, 0.96); padding: 9px">
        <b><h2>ההתחברות הצליחה!</h2></b>
        <center>
            <h3>
                <br><br>
                <b>למי להעביר 1,000 ש״ח?</b>
                <input type="text" id="name" name="name">
                <button onclick="popup()">שלח 1,000 ש״ח!</button>
            </h3>
            <br><br><br><br><br>
            <button onclick="NextTargil()">לתרגיל הבא</button>
            <br><br><br>
        </center>
    <br><br>
    </div>
    <script src="./check_pass.js" source="targilim"></script>

</body>
</html>
