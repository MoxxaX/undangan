document.addEventListener("DOMContentLoaded", function () {
    var countDownDate = new Date("Feb 29, 2024 12:04:00").getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "HAPPY BIRTHDAYYY!!!";
        }
    }, 1000);
});
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }

    function getCookie(name) {
        const keyValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
        return keyValue ? keyValue[2] : null;
    }

    const savedDarkMode = getCookie('darkMode');
    if (savedDarkMode === 'true') {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        const isDarkMode = body.classList.contains('dark-mode');
        darkModeToggle.textContent = isDarkMode ? '☀️ Light Mode' : '🌑 Dark Mode';

        setCookie('darkMode', isDarkMode.toString(), 365);
    });
});


