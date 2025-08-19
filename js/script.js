//Side Menu

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//Side menu
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

//Portfolio Contact Form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbygr2wYYwLN8iDsd1RlFB9kePOYTiabm1BZvNRR8w11UXCXThPfTz5-eydQDRYv_IAubQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

//SVG
const percentages = [60, 75, 85]; // Backend, Mobile, Frontend
percentages.forEach((percent, index) => {
  const valueSpan = document.querySelector(`#value${index + 1}`);
  const circle = document.querySelector(`#circle${index + 1}`);

  if (valueSpan && circle) {
    function animateCircle(targetPercent) {
      let currentPercent = 0;
      const interval = setInterval(() => {
        currentPercent += Math.ceil((targetPercent - currentPercent) / 10);
        if (currentPercent >= targetPercent) {
          currentPercent = targetPercent;
          clearInterval(interval);
        }
        valueSpan.textContent = currentPercent;
        circle.style.strokeDashoffset = `${440 - 440 * (currentPercent / 100)}`;
      }, 50);
    }

    animateCircle(percent);
  }
});
