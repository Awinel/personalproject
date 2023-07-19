import { divCreator, getLocalStorage, intergrator } from "../js/utils.js";
import { getFoodData } from "./food.js";

// function food() {
//     const foodData = getLocalStorage("ateFood");
//     const foodNames = foodData.map(food => food);
//     const promises = foodNames.map(foodName => getFoodData(foodName));
//     Promise.all(promises).then(data => {
//         console.log(data);
//         for (const food of data) {
//             intergrator(".foodName", food[0].name);
//             intergrator(".foodCalories", food[0].calories);
//             intergrator(".foodFatTotalG", food[0].fat_total_g);
//             intergrator(".foodProteinG", food[0].protein_g);
//             intergrator(".foodCarboMg", food[0].carbohydrates_total_g);
//             intergrator(".foodServingSizeG", food[0].serving_size_g);
//             intergrator(".foodSugarG", food[0].sugar_g);
//         }
//     });
// }


// function nutritionalInfo() {
//     const classNames = [
//         "foodName",
//         "foodCalories",
//         "foodFatTotalG",
//         "foodProteinG",
//         "foodCarboMg",
//         "foodServingSizeG",
//         "foodSugarG"
//     ];
      
//     for (const className of classNames) {
//         divCreator(className, ".nutritional-container");
//     }
    
    
// }

async function food() {
    const foodData = getLocalStorage("ateFood");
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

// const nutritionalContainer = document.querySelector("#nutritional-container");
// const foodName = document.querySelector("").value;
// const foodData = await getFoodData(foodName);
// const foodNameElement = document.querySelector(".foodName");
// const foodCaloriesElement = document.querySelector(".foodCalories");
// const foodFatElement = document.querySelector(".foodFat");
// const foodCarbohydratesElement = document.querySelector(".foodCarbohydrates");
// const foodProteinElement = document.querySelector(".foodProtein");
// const foodSugarElement = document.querySelector(".foodSugar");
// const foodFiberElement = document.querySelector(".foodFiber");
// const foodSodiumElement = document.querySelector(".foodSodium");
// const foodCholesterolElement = document.querySelector(".foodCholesterol");
// const foodPotassiumElement = document.querySelector(".foodPotassium");
// const foodServingSizeElement = document.querySelector(".foodServingSize");
// const foodServingUnitElement = document.querySelector(".foodServingUnit");
// const foodBrandNameElement = document.querySelector(".foodBrandName");
// console.log(foodData[0].calories);
// foodNameElement.innerHTML = foodData[0].name;
// foodCaloriesElement.innerHTML = foodData[0].calories;
// foodFatElement.innerHTML = foodData[0].fat;
// foodCarbohydratesElement.innerHTML = foodData[0].carbohydrates;
// foodProteinElement.innerHTML = foodData[0].protein;
// foodSugarElement.innerHTML = foodData[0].sugar;
// foodFiberElement.innerHTML = foodData[0].fiber;
// foodSodiumElement.innerHTML = foodData.items[0].sodium;
// foodCholesterolElement.innerHTML = foodData[0].cholesterol;
// foodPotassiumElement.innerHTML = foodData[0].potassium;
// foodServingSizeElement.innerHTML = foodData[0].serving_size;
// foodServingUnitElement.innerHTML = foodData[0].serving_unit;
// foodBrandNameElement.innerHTML = foodData[0].brand_name;