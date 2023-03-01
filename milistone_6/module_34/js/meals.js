const loadMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    // container of the child
    const mealsContainer = document.getElementById('meals-container');
    meals.forEach(meal => {
        console.log(meal);

        // create child for each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');

        // content of the child
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `

        // append child
        mealsContainer.appendChild(mealDiv);
    })
}
loadMeals();