import { divCreator, getLocalStorage, intergrator } from "../js/utils.js";
import { getFoodData } from "./food.js";

async function food() {
    const foodData = getLocalStorage("ateFood");
    if (!foodData) {
        divCreator("errorHandler", ".nutritional-container")
        document.querySelector(".errorHandler").textContent = "You have not eaten food, please eat something to display the nutritional information";
        return;
    }
    const foodNames = foodData.map(food => food);
    const promises = foodNames.map(food => getFoodData(food));
    const allFoodData = await Promise.all(promises);
    allFoodData.forEach((data, index) => {
        for (let i = 0; i < data.length; i++) {
            const foodInfo = data[i];
            intergrator(`.foodName${index}`, `Food Name: ${foodInfo.name}`);
            intergrator(`.foodCalories${index}`, `Calories: ${foodInfo.calories}kcal`);
            intergrator(`.foodFatTotalG${index}`, `Total Fat: ${foodInfo.fat_total_g}g`);
            intergrator(`.foodProteinG${index}`, `Protein${foodInfo.protein_g}g`);
            intergrator(`.foodCarboMg${index}`, `Carbohydrates: ${foodInfo.carbohydrates_total_g}g`);
            intergrator(`.foodServingSizeG${index}`, `Amount: ${foodInfo.serving_size_g}g`);
            intergrator(`.foodSugarG${index}`, `Sugar: ${foodInfo.sugar_g}g`);
        }
    });
}

function nutritionalInfo() {
    const container = document.querySelector(".nutritional-container");
    const foodData = getLocalStorage("ateFood");
    if (!foodData) {
        // Handle the case where foodData is null
        // For example, you could display a message to the user
        console.log("No food data found");
        return;
    }
    for (let i = 0; i < foodData.length; i++) {
        const classNames = [
            `foodName${i}`,
            `foodCalories${i}`,
            `foodFatTotalG${i}`,
            `foodProteinG${i}`,
            `foodCarboMg${i}`,
            `foodServingSizeG${i}`,
            `foodSugarG${i}`
        ];
        const foodDiv = document.createElement("div");
        foodDiv.classList.add(`food${i}`);
        container.appendChild(foodDiv);
        for (const className of classNames) {
            divCreator(className, `.food${i}`);
        }
    }
}


export function nutrition() {
    nutritionalInfo();
    food();


}