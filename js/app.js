// all meal by single alphabet 
function searchMeal(){
    const searchItem = document.getElementById('input-field').value;
    console.log(searchItem);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchItem}`)
        .then(res => res.json())
        .then(data => allMeals(data.meals))
        .catch(err => alert('Sorry! We Have No Meal Which You Search'));
    const allMeals = meals => {
        const mealsDiv = document.getElementById('meals');
        meals.forEach(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.className = 'meal';
            mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h4>${meal.strMeal}</h4>
         `
            mealDiv.setAttribute("onclick", `mealDetailsAll('${meal.strMeal}')`)
            mealsDiv.appendChild(mealDiv);
        });
    };
}
// all meal info 
const mealDetailsAll = name => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then(res => res.json())
        .then(data => mealDetails(data.meals))
}
// single meal info 
const mealDetails = meal => {
    const mealDetails = document.getElementById('meal-details');
    mealDetails.innerHTML = `
    <img src="${meal[0].strMealThumb}">
    <h3>${meal[0].strMeal}</h3>
    <h5> Total ingredients </h5>
    <p>${meal[0].strMeasure1}<span> ${meal[0].strIngredient1}</span></p>
    <p>${meal[0].strMeasure2}<span> ${meal[0].strIngredient2}</span></p>
    <p>${meal[0].strMeasure3}<span> ${meal[0].strIngredient3}</span></p>
    <p>${meal[0].strMeasure4}<span> ${meal[0].strIngredient4}</span></p>
    <p>${meal[0].strMeasure5}<span> ${meal[0].strIngredient5}</span></p>
    <p>${meal[0].strMeasure6}<span> ${meal[0].strIngredient6}</span></p>
    <p>${meal[0].strMeasure7}<span> ${meal[0].strIngredient7}</span></p>
    <p>${meal[0].strMeasure8}<span> ${meal[0].strIngredient8}</span></p>
    <p>${meal[0].strMeasure9}<span> ${meal[0].strIngredient9}</span></p>
    <p>${meal[0].strMeasure10}<span> ${meal[0].strIngredient10}</span></p>
     `
}