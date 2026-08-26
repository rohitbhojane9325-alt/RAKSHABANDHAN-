let sisterName = "";


// Start Gift
function startGift() {

  const input = document.getElementById("sisterName");

  sisterName = input.value.trim();

  if (sisterName === "") {
    alert("कृपया बहिणीचं नाव लिहा ❤️");
    return;
  }

  document.getElementById("home").classList.add("hidden");

  document.getElementById("giftPage").classList.remove("hidden");

  document.getElementById("welcomeText").innerHTML =
    "Hey " + sisterName + "! ❤️";

  createHearts();
}


// Open Gift
function openGift() {

  document.getElementById("giftBox").style.display = "none";

  document.getElementById("tapText").style.display = "none";

  document.getElementById("message").classList.remove("hidden");

  document.getElementById("sisterHeading").innerHTML =
    "For My Beautiful Sister, " + sisterName + " ❤️";

  createConfetti();
}


// Floating Hearts
function createHearts() {

  const container = document.querySelector(".hearts");

  setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts = ["❤️", "💖", "💕", "💗", "💝"];

    heart.innerHTML =
      hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
      Math.random() * 100 + "%";

    heart.style.animationDuration =
      (4 + Math.random() * 4) + "s";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);

  }, 700);
}


// Confetti
function createConfetti() {

  const container = document.querySelector(".hearts");

  for (let i = 0; i < 80; i++) {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
      ["❤️", "💖", "✨", "🌸", "🎉"][
        Math.floor(Math.random() * 5)
      ];

    heart.style.left =
      Math.random() * 100 + "%";

    heart.style.bottom =
      Math.random() * 40 + "%";

    heart.style.animationDuration =
      (2 + Math.random() * 3) + "s";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }
}


// Restart
function restart() {
  location.reload();
}
