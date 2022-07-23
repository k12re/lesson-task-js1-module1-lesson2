//Question 1

const heading = document.querySelector("h3");
heading.innerHTML = "Hello";

//Question 2

const subHeading = document.querySelectorAll("h4");

for (let i = 0; i < subHeading.length; i++) {
  subHeading[i].style.marginBottom = "-20px";
}

//Question 3

subHeading[1].style.backgroundColor = "red"; //Uses above loop for ref
//OR
//let subHeadingRed = document.querySelector("h4.two");
//subHeadingRed.style.backgroundColor = "red";

//Question 4

//document.querySelector("p.one").style.fontSize = "24px";
//document.querySelector("p.one").style.color = "blue";

//OR

const firstParagraph = document.querySelector("p.one");
firstParagraph.style.fontSize = "24px";
firstParagraph.style.color = "blue";

//Question 5

const changeParagraph = document.querySelector("p.three");
changeParagraph.innerHTML = "<span>" + changeParagraph.innerHTML + "</span>";
//OR
//changeParagraph.innerHTML = `<span>${changeParagraph.innerHTML}</span>`;

//Question 6

const addParagraph = document.querySelector(".content");
addParagraph.innerHTML += "<p>Another paragraph</p>";

//Question 7

const addClass = document.querySelectorAll(".content p");

for (let i = 0; i < addClass.length; i++) {
  addClass[i].classList.add("content-item");
}

//Question 8

const listItem = document.querySelector("#services");
listItem.innerHTML = "<li>New item</li>" + listItem.innerHTML;

//Question 9

listItem.classList.remove("service-list");

//Question 10

let hideElement = document.querySelector("#hide");
hideElement.hidden = true;
//OR
//hideElement.style.display = "none";
