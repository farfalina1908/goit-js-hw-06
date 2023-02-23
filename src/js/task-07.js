const input = document.querySelector("input#font-size-control");

const output = document.querySelector("span#text");

const changeSize = (event) => output.style.fontSize = event.currentTarget.value + "px";



input.addEventListener("input", changeSize);