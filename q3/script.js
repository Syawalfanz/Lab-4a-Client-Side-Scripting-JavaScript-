// Q3: Dynamic Number Generator

const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {
  // Clear old items so repeated clicks do not duplicate the list
  numberList.textContent = "";

  // Loop from 1 to 5 and create one <li> for each number
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = "The number is " + i;
    numberList.appendChild(li);
  }
}

generateBtn.addEventListener("click", generateNumbers);
