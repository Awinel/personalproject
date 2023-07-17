import { getElement, getLocalStorage, setLocalStorage } from "../js/utils.js";

export async function setupFoodForm() {
  function foodForm() {
    return `
      <form class="foodForm">
        <label for="ateFood">Enter the food you ate: </label>
        <input type="text" id="ateFood" name="ateFood" required>
        <input type="submit" value="submit">
      </form>
      <h2>Food eaten</h2>
      <div class="foodEaten"></div>
    `;
  }

  const foodArray =[]
  const ateFood = getLocalStorage("ateFood");

  const formContainer = document.querySelector('.foodForm');
  formContainer.innerHTML = foodForm();

  const form = document.querySelector('.foodForm');
  const foodEatenDiv = await getElement('.foodEaten');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    
    const input = document.querySelector('#ateFood');
    const food = input.value;
    foodArray.push(food);


    const paragraph = document.createElement('p');
    paragraph.textContent = food;

    foodEatenDiv.appendChild(paragraph);

    input.value = '';
  });
}
  