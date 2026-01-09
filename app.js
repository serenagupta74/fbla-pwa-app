console.log("app.js is loaded");

function setActive(clickedTab) {
    const tabs = document.getElementsByClassName("tablink");

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    clickedTab.classList.add("active");
}
