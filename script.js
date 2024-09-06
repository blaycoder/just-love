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

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e, btn);
  if (window.getComputedStyle(bodyContent).display === "none") {
    e.target.innerText = "Close Message 💌";
    bodyContent.style.display = "block";
    displayMessage();
  } else {
    bodyContent.style.display = "none";
    e.target.innerText = "View Message 💌";
  }
});


