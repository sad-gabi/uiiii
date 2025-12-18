const switches = document.querySelectorAll(".switch .interactive");


function toggleSwitch(switchEl) {
    switchEl.classList.toggle("active");

    const clickSfx = new Audio("./click.mp3");
    clickSfx.play();
}


switches.forEach((switchEl) => {
    switchEl.addEventListener("mouseup", () => {
        toggleSwitch(switchEl)
    });
});