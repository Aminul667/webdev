console.log("This is working");

// option 2:
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3:
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

console.log(makeBlueButton);
