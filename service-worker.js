function openTab(evt, tabName) {
  // Hide all tabcontent
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove active class from all links
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show current tab and add active class
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
function setActive(clickedTab) {
    const tabs = document.getElementsByClassName("tablink");

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    clickedTab.classList.add("active");
}

// Open default tab on page load
document.addEventListener("DOMContentLoaded", function() {
  document.getElementsByClassName("tablink")[0].click();
});

