const foodFormElement = document.querySelector(".foodForm");
const foodEatenElement = document.querySelector(".foodEaten");

export function foodForm() {
    
    return `
    <form class="foodForm">
    <label for="ateFood">Enter the food you ate: </label>
    <input type="text" id="ateFood" name="ateFood" required value="banana">
    <input type="submit" value="submit">
    </form>
    <h2>Food eaten</h2>
    <div class="foodEaten"></div> `       
}

export function foodFormEvent() {
    foodFormElement.addEventListener("submit", function(event) {
        event.preventDefault();
        const foodName = document.querySelector("#ateFood").value;

        let h3 = document.createElement("h3");
        

        foodEatenElement.appendChild(h3);

});
}