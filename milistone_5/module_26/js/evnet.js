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

// option 4
function makeGreen() {
  document.body.style.backgroundColor = "green";
}

const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener('click', makeGreen);

// option 4 Final
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})