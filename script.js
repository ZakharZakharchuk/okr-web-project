//Змінюємо фон і через 5 секунд повертаємо назад
document.body.style.background = "#EFB786";
setTimeout(() => document.body.style.background = "", 5000)

//Перенаправлення
if (confirm("Redirect to Wikipedia?")) {
  location.href = "https://wikipedia.org";
}
//Вибір по id
const element = document.getElementById('theBlackSwan');
element.style.background = "#406c35"

//Вибір всіх елементів які мають клас odd
const nodeList = document.querySelectorAll(".odd");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "#2F70AF";
}
//outerHTML
document.getElementsByTagName("h1")[0].outerHTML = "<h2>Changed to h2 with outerHTML!</h2>";
//innerHTML
document.getElementById('change').innerHTML = "Changed text with innerHTML";
//nodeValue
let node = document.getElementsByTagName("p")[0].childNodes[0];
alert(node.data);
//textContent
document.getElementById("textContent").textContent = "Changed by textContent";

//Nodes
let newParagraph = document.createElement("p");
newParagraph.innerText = "Some created element";
let newText = document.createTextNode("Some created node");

// Append
document.getElementById("container").append(newParagraph);

//prepend
document.getElementById("container").prepend(newParagraph.cloneNode(true));
// Replace
document.querySelector("p:first-child").replaceWith(newText);
document.getElementById("container").after(newParagraph.cloneNode(true))
// Remove second paragraph
document.querySelector("p:nth-child(2)").remove();

function developerInfo(lastName, firstName, position = "Back-End Developer") {
  alert("Surname: " + lastName + "\nName: " + firstName + "\nTitle: " + position);
}
function callDeveloperInfo() {
  developerInfo("Zakharchuk", "Zakhar");
}


function compareStrings(string1, string2) {
  if (string1.length > string2.length) {
    alert(string1);
  } else if (string2.length > string1.length) {
    alert(string2);
  } else {
    alert("They are equal");
  }
}
function callCompareStrings() {
  let string1 = prompt("First line");
  let string2 = prompt("Second line");
  compareStrings(string1, string2);
}

function userDialog() {
  let name = prompt("What is your name?");
  let age = prompt("How old are you?");
  let result = confirm("Your age is:" + age + " Is it correct?");
  if (result) {
    alert("Hi, " + name + "! You are "+age+" years old!");
  } else {
    userDialog();
  }
}