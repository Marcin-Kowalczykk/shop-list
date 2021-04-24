var buttonEnter = document.getElementById("enter");
var buttonDelAll = document.getElementById("deleteAll"); // !!!!! 
var input = document.getElementById("userinput");
var ul = document.querySelectorAll("ul")[0];
var li = document.getElementsByClassName("listElem");
var buttonDelete = document.getElementsByClassName("delete");
var body = document.querySelector(".generator");
var inputColor1 = document.querySelector(".color1");
var inputColor2 = document.querySelector(".color2");
var inputColor3 = document.querySelector(".color3");
var buttonRand = document.querySelector(".buttonRand");
var size25 = document.querySelector("#a1");
var size28 = document.querySelector("#a2");
var size30 = document.querySelector("#a3");


var addElement = function() {
    var newListElement = document.createElement("li");
    var text = document.createTextNode(input.value);
    newListElement.appendChild(text);
    ul.appendChild(newListElement);
    var newButton = document.createElement("button");
    newButton.className = "delete";
    newListElement.className = "listElem";
    newListElement.appendChild(newButton);
   
    newButton.innerHTML = "Delete";
    input.value = "";

    buttonDeleteFcn();
    purelin();
    
}
// var addElementByClick = function() {
//     if(input.value) {
//         addElement();
//     }
//     else {
//         alert("pusto byczku pusto");
//     }
// };
var addElementByClick = () => input.value ? addElement() : alert("pusto byczku pusto");

var addElementByEnter = function(e) {
    if(input.value && e.keyCode === 13) {
        addElement();
    }
};
var purelin = function() {
    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener("click", changeclass);
    }
};
function changeclass() {
        this.classList.toggle("done");
}
var buttonDeleteFcn = function() {
    for (var i = 0; i < buttonDelete.length; i++) {
        buttonDelete[i].addEventListener("click", deleteElement);
    }
}
var deleteElement = function() {
    this.parentElement.remove();
}
var deleteAll = function() {
    var liLength = li.length;
    for (var i = 0; i < liLength; i++ ) {
        li[0].remove();
    }
}
// li.forEach((element1) => {
//     element1.remove();
// });

// var deleteAll1 = function(li) {
//     li[0].remove();
// }
// li.forEach(deleteAll1);

list = [1, 2, 3, 4];
// var listLength = list.length;
// for (var i = 0; i < listLength; i++ ) {
//      list[i] = list[i] + "!";
//      // list.pop();
// }
list1 = [];
list.forEach((element, i) => {
    list1.push(element + "!" + " indeks: " + i);
}); 
function colorGeneratorGradient() {
    body.style.background = "linear-gradient(to right," + inputColor1.value + "," + inputColor2.value + ")";
}
function colorGeneratorConstant() {
    body.style.background = inputColor3.value;
}
function buttonRandFcn() {
    inputColor1.value = "#" + Math.floor(Math.random() * 100000) + 1;
    inputColor2.value = "#" + Math.floor(Math.random() * 100000) + 1;
}
// function changeFontSize(size) {
//     return function () {
//         body.style.fontSize = size + "px";
//     };
// }
const changeFontSize = (size) => () => body.style.fontSize = size + "px";
var s25 = changeFontSize(25);
var s28 = changeFontSize(28);
var s30 = changeFontSize(30);

buttonDeleteFcn();
purelin();
buttonDelAll.addEventListener("click", deleteAll);
buttonEnter.addEventListener("click", addElementByClick);
input.addEventListener("keypress", addElementByEnter);
buttonRand.addEventListener("click", buttonRandFcn);
buttonRand.addEventListener("click", colorGeneratorGradient); 
inputColor1.addEventListener("input", colorGeneratorGradient);
inputColor2.addEventListener("input", colorGeneratorGradient);
inputColor3.addEventListener("input", colorGeneratorConstant);
size25.addEventListener("click", s25);
size28.addEventListener("click", s28);
size30.addEventListener("click", s30);
