// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>



const inputName = document.querySelector("input#name-input");
const outputName = document.querySelector("span#name-output");

const changeText = (event) => {
    if (event.currentTarget.value === "") {
        outputName.textContent = "Anonymous";
    }
    else {
        outputName.textContent = event.currentTarget.value;
    }
    
}

inputName.addEventListener("input", changeText);