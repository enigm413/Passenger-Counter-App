//Select the necessary element inside the DOM
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

//Initialise the count variable
let count = 0;

//Function to increment the count value when the increment button is clicked
function increment() {
  count += 1;
  countEl.textContent = count;
}

//Function to display count string and reset the count value when the save button is clicked
function save() {
  let countStr = " " + count + " -";
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = 0;
}
