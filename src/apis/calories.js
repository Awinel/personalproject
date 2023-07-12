export function foodFormEvent() {
    foodFormElement.addEventListener("submit", async function(event) {
        event.preventDefault();
        const foodName = document.querySelector("#ateFood").value;
        const foodData = await getFoodData(foodName);
        const foodNameElement = document.querySelector(".foodName");
        const foodCaloriesElement = document.querySelector(".foodCalories");
        const foodFatElement = document.querySelector(".foodFat");
        const foodCarbohydratesElement = document.querySelector(".foodCarbohydrates");
        const foodProteinElement = document.querySelector(".foodProtein");
        const foodSugarElement = document.querySelector(".foodSugar");
        const foodFiberElement = document.querySelector(".foodFiber");
        const foodSodiumElement = document.querySelector(".foodSodium");
        const foodCholesterolElement = document.querySelector(".foodCholesterol");
        const foodPotassiumElement = document.querySelector(".foodPotassium");
        const foodServingSizeElement = document.querySelector(".foodServingSize");
        const foodServingUnitElement = document.querySelector(".foodServingUnit");
        const foodBrandNameElement = document.querySelector(".foodBrandName");
        console.log(foodData[0].calories);
        foodNameElement.innerHTML = foodData[0].name;
        foodCaloriesElement.innerHTML = foodData[0].calories;
        foodFatElement.innerHTML = foodData[0].fat;
        foodCarbohydratesElement.innerHTML = foodData[0].carbohydrates;
        foodProteinElement.innerHTML = foodData[0].protein;
        foodSugarElement.innerHTML = foodData[0].sugar;
        foodFiberElement.innerHTML = foodData[0].fiber;
        foodSodiumElement.innerHTML = foodData.items[0].sodium;
        foodCholesterolElement.innerHTML = foodData[0].cholesterol;
        foodPotassiumElement.innerHTML = foodData[0].potassium;
        foodServingSizeElement.innerHTML = foodData[0].serving_size;
        foodServingUnitElement.innerHTML = foodData[0].serving_unit;
        foodBrandNameElement.innerHTML = foodData[0].brand_name;
    });
}