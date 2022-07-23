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
let addParagraph = document.querySelectorAll(".content");

function pushParagraph() {
  addParagraph.push = "<p>";
}

pushParagraph();

//Question 7
//NEED ANSWER
let addClass = document.querySelector(".content");

function contentItem() {
  addClass.innerHTML = "<.content-item>" + addClass.innerHTML + "</.content-item>";
}

contentItem();

//Question 8

let listItem = document.querySelector("#services");

function addListItem() {
  listItem.innerHTML = "<li>" + "Item" + "</li>" + listItem.innerHTML;
}

addListItem();

//Question 9
//NEED ANSWER
let serviceList = document.querySelector(".service-list");

function removeClass() {
  serviceList.innerHTML = "";
}

removeClass();

//Question 10

let hideElement = document.querySelector("#hide");

function letsHideElement() {
  hideElement.hidden = true;
}

letsHideElement();
