function attachEventsListeners() {
    const daysButton = document.getElementById("daysBtn");
    const hoursButton = document.getElementById("hoursBtn");
    const minutesButton = document.getElementById("minutesBtn");
    const secondsButton = document.getElementById("secondsBtn");   

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const mins = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    daysButton.addEventListener("click", () => visualiseAll(Number(days.value) * 86400));    
    hoursButton.addEventListener("click", () =>  visualiseAll(Number(hours.value) * 3600));    
    minutesButton.addEventListener("click", () =>  visualiseAll(Number(mins.value) * 60));
    secondsButton.addEventListener("click", () => visualiseAll(Number(seconds.value)));

    function visualiseAll(inputInSeconds) {
        seconds.value = inputInSeconds;
        mins.value = Number(seconds.value) / 60;
        hours.value = Number(mins.value) / 60;
        days.value = Number(hours.value) / 24;
    }
}

