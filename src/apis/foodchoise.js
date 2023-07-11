import { getFoodData } from "./food.js";

// function userFoodChoice() {
//     const foodChoice = document.getElementById("foodChoice").value;
//     console.log(foodChoice);
//     getFoodData(foodChoice).then(data => console.log(data));
// }

function getFoodChoice() { 
    const foodChoice = document.getElementById("foodChoice").value;
    console.log(foodChoice);
    getFoodData(foodChoice).then(data => console.log(data));
}

export function foodForm() {
    const foodForm = document.querySelector(".foodForm");
    const foodLab = document.createElement("label");
    foodLab.setAttribute("for", "ateFood");
    foodLab.innerText = "Enter the food you ate: ";

    const foodInp = document.createElement("input");
    foodInp.setAttribute("type", "text");
    foodInp.setAttribute("id", "ateFood");
    foodInp.setAttribute("name", "ateFood");

    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    submit.addEventListener("click", getFoodChoice);
    
    foodForm.appendChild(foodLab);
    foodForm.appendChild(foodInp);
    foodForm.appendChild(submit);
    
}