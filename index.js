let sheepCounter = 1;

const arrow = document.getElementById("arrow");
const cross = document.getElementById("cross");
const inputValue = document.getElementById("value");
const numbers = document.getElementsByClassName("numbers");
const sheep = document.getElementById("sheep");

for (let number of numbers) {
  number.onclick = (e) => (inputValue.value += e.target.value);
}

const submit = () => {
  if (sheepCounter !== parseInt(inputValue.value)) return;

  sheep.setAttribute("src", "./img/sheep_jump.png");

  sheepCounter++;
  inputValue.value = "";

  sheep.classList.add("sheep-end");

  setTimeout(() => {
    sheep.setAttribute("src", "./img/sheep.png");
    sheep.classList.remove("transition");
    sheep.classList.remove("sheep-middle");
    sheep.classList.remove("sheep-end");
  }, 1000);

  setTimeout(() => {
    sheep.classList.add("transition");
    sheep.classList.add("sheep-middle");
  }, 1500);
};

const cancel = () => {
  inputValue.value = "";
};

arrow.onclick = submit;
cross.onclick = cancel;

window.onload = () => {
  sheep.classList.add("sheep-middle");
};
