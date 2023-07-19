import { getElement, getLocalStorage, setLocalStorage } from "../js/utils.js";

export async function setupFoodForm() {
  function foodForm() {
    return `

      <h2>Food eaten</h2>
      <div class="foodEaten"></div>

      <form class="foodForm">
        
        <label for="ateFood">Enter the food you ate: </label>
        <input type="text" id="ateFood" name="ateFood" required>
        <input type="submit" value="submit">
      </form>

    `;
  }

  const formContainer = document.querySelector('.foodForm');
  formContainer.innerHTML = foodForm();

  const foodEatenDiv = await getElement('.foodEaten');

  let foodArray = getLocalStorage("ateFood") || [];
  for (const food of foodArray) {
    const paragraph = document.createElement('p');
    paragraph.textContent = food;
    foodEatenDiv.appendChild(paragraph);
  }

  formContainer.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const input = document.querySelector('#ateFood');
    const food = input.value;
    foodArray.push(food);
    setLocalStorage("ateFood", foodArray);

    const paragraph = document.createElement('p');
    paragraph.textContent = food;
    foodEatenDiv.appendChild(paragraph);

    input.value = '';
  });
}
  