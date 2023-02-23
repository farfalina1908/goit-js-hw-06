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