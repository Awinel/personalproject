const path = "https://api.api-ninjas.com/v1/nutrition"
const key = "Opjf4UmSnedi8gvRKfSAPw==7K6UfFnEz00Q1kdX"

export async function getFoodData(foodName) {
    const response = await fetch(`${path}?query=${foodName}`, {
        method: "GET",
        headers: {
            "X-Api-Key": key
        }
    });
    const data = await response.json();
    return data;
}
// Example of how to use the function
// getFoodData("apple").then(data => console.log(data));
// getFoodData("apple").then(data => console.log(data.items[0].name));
// getFoodData("apple").then(data => console.log(data.items[0].calories));
// getFoodData("apple").then(data => console.log(data.items[0].fat));
// getFoodData("apple").then(data => console.log(data.items[0].carbohydrates));