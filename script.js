let btn = document.getElementById("btn");
let bodyContent = document.getElementById("body-content");

function displayMessage() {
  for (let i = 0; i < 500; i++) {
    bodyContent.insertAdjacentHTML(
      "afterBegin",
      `<h1 style='color: red;'> I love you ❤ \n </h1>`
    );
  }
}

function fireConfetti() {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
  };

  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2,
  });

  confetti({
    ...defaults,
    particleCount: 25,
    scalar: 3,
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 4,
  });
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e, btn);
  if (window.getComputedStyle(bodyContent).display === "none") {
    e.target.innerText = "Close Message 💌";
    bodyContent.style.display = "block";
    displayMessage();
    fireConfetti();
  } else {
    bodyContent.style.display = "none";
    e.target.innerText = "View Message 💌";
  }
});
