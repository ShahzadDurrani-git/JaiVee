// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var panel = this.nextElementSibling;

    // Close all panels
    for (var j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove("active");
        acc[j].nextElementSibling.style.display = "none";
      }
    }

    // Toggle active class and display state for the clicked accordion
    this.classList.toggle("active");
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Tabs
function showContent(index) {
  // Hide all content and remove active class from buttons
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => (content.style.display = "none"));
  contents.forEach((content) => content.classList.remove("active"));

  const buttons = document.querySelectorAll(".tab-nav .button");
  buttons.forEach((button) => button.classList.remove("active"));

  // Show selected content and add active class to the clicked button
  const content = document.getElementById(`content${index}`);
  content.style.display = "block";
  content.classList.add("active");

  buttons[index].classList.add("active");
}
