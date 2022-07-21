//Question 1

let heading = document.querySelector("h3");

function changeHeading() {
  heading.innerHTML = "Hello";
}

changeHeading();

//Question 2
document.querySelector("h4").style.marginBottom = "-20px";
//NEED ANSWER
//let subHeading = document.querySelector("h4"); //querySelectorAll wont work

//function changeMargin() {
//  subHeading.style.marginBottom = "-20px";
//}

//changeMargin();

//Question 3

let subHeadingRed = document.querySelector("h4.two");

function changeColor() {
  subHeadingRed.style.backgroundColor = "red";
}

changeColor();

//Question 4

document.querySelector("p").style.fontSize = "24px";
document.querySelector("p").style.color = "blue";

//Question 5

let changeParagraph = document.querySelector(".section.three");

function addSpan() {
  changeParagraph.innerHTML = "<span>" + changeParagraph.innerHTML + "</span>";
}

addSpan();

//Question 6
//NEED ANSWER
let addParagraph = document.querySelector(".content");

function pushParagraph() {
  addParagraph.push = "<p>""</p>";
}

pushParagraph();

//Question 7

