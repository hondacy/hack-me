---
layout: default
---


<html lang="he">
<head>
    <meta charset="UTF-8">
    <title>ההתחברות הצליחה!</title>
    <script>
        function myFunction() {
            document.title = "Targil22: " + targilInt + " - סיסמה";
            alert("הועבר!");
        }
        function NextTargil() {
            // window.location.href = './success?targil=' + targilurl;
            // let targilInt = parseInt(targilurl +1) 
            var url = new URL(window.location.href);
            var nextTargilInt = url.searchParams.get("nextTargilInt");
            var nameElement = document.getElementById('name');
            var name = nameElement.value;
            window.location.href = './?targil=' + nextTargilInt + '&name=' + name;
        }
    </script>
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
                <button onclick="myFunction()">שלח 1,000 ש״ח!</button>
            </h3>
            <br><br><br><br><br>
            <button onclick="NextTargil()">לתרגיל הבא</button>
            <br><br><br>
        </center>
<br><br>

    </div>
</body>
</html>
