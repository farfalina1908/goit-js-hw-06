let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const changeValue = document.querySelector("#value");

const decrementValue = () => {
    counterValue -= 1;
    changeValue.textContent = counterValue;
}

const incrementValue = () => {
    counterValue += 1;
    changeValue.textContent = counterValue;
}


decrementBtn.addEventListener("click", decrementValue);
incrementBtn.addEventListener("click", incrementValue);