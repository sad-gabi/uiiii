const switches = document.querySelectorAll(".switch .interactive");
const lighting = document.querySelector(".light-overlay");
const timeDisplay = document.querySelector("#timeDisplay");

const nightSfx = new Audio("./night_ambiance.mp3");
const daySfx = new Audio("./day_ambiance.mp3");

daySfx.autoplay = true;
nightSfx.autoplay = true;


daySfx.volume = 0.2;
nightSfx.volume = 0.4;

daySfx.loop = true;
nightSfx.loop = true;

let isDay = false;


nightSfx.autoPlay = true;


function toggleSwitch(switchEl) {
    isDay = !isDay

    switchEl.classList.toggle("active");

    const clickSfx = new Audio("./click.mp3");
    clickSfx.play();

    lighting.classList.toggle("active");

    if (isDay) {
        nightSfx.pause();
        daySfx.play();
        timeDisplay.textContent = "Turn Night";
    } else {
        nightSfx.play();
        daySfx.pause();
        timeDisplay.textContent = "Turn Day";
    }
}


switches.forEach((switchEl) => {
    switchEl.addEventListener("mouseup", () => {
        toggleSwitch(switchEl);
    });
});