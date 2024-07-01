document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toISOString().slice(11, 19);
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDay = dayNames[now.getUTCDay()];

        document.getElementById('currentTimeUTC').textContent = utcTime;
        document.getElementById('currentDay').textContent = currentDay;
    }

    updateTime();
    setInterval(updateTime, 1000);
});