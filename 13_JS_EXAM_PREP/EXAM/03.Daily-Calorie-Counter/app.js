API_URL = "http://localhost:3030/jsonstore/tasks/";
const form = document.querySelector("form");
const inputSelectors = {
    food: document.querySelector("#food"),
    time: document.querySelector("#time"),
    calories: document.querySelector("#calories"),
};

const mealsHolder = document.querySelector("#list");

const loadMeals = document.querySelector("#load-meals");
loadMeals.addEventListener("click", loadAllMeals);
const addMeal = document.querySelector("#add-meal");
addMeal.addEventListener("click", addSingleMeal);
const editMeal = document.querySelector("#edit-meal");
editMeal.addEventListener("click", editSingleMeal);

let mealCalories;
let targetObj = {};
let targetID;

async function loadAllMeals() {
    mealsHolder.innerHTML = "";

    const result = await (await fetch(API_URL)).json();
    mealCalories = Object.values(result);
    // console.log(result);
    Object.values(result).forEach((singleMeal)=>{
        divMeals = renderHtml('div', mealsHolder, ['meal'], null, singleMeal._id);
        renderHtml('h2',divMeals, null, singleMeal.food);
        renderHtml('h3',divMeals, null, singleMeal.time);
        renderHtml('h3',divMeals, null, singleMeal.calories);
        
        const buttonsDiv = renderHtml('div', divMeals, [], null, "meal-buttons");
        const buttonChangeMeal = renderHtml('button', buttonsDiv, ['change-meal'], 'Change');
        const buttonDeleteMeal = renderHtml('button', buttonsDiv, ['delete-meal'], 'Delete');
        
        buttonChangeMeal.addEventListener('click', doChanges);
        buttonDeleteMeal.addEventListener('click', deleteMeal);
    
    });

};

async function addSingleMeal(e) {
    e.preventDefault();
    if (Object.values(inputSelectors).some((x) => !(x.value))) {
        return;
    }

    const {food, time, calories} = inputSelectors;

    const newMeal = {
        food: food.value,
        time: time.value,
        calories: calories.value,
    }
    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(newMeal),
    });

    form.reset();
    loadAllMeals();
}

async function doChanges() {
    targetID = this.parentElement.parentElement.id;
    targetObj = mealCalories.find((meal) => meal._id === targetID);
    
    Object.keys(inputSelectors).forEach((key) => {
        inputSelectors[key].value = targetObj[key];
    });

    document.getElementById(targetID).remove();
    addMeal.disabled = true;
    editMeal.disabled = false;
}

async function editSingleMeal() {

    const {food, time, calories} = inputSelectors;

    await fetch(`${API_URL}${targetID}`, {
        method: "PUT",
        body: JSON.stringify({food: food.value, time: time.value, calories: calories.value, _id: targetID}),
    });
    form.reset();
    loadAllMeals();

    addMeal.disabled = false;
    editMeal.disabled = true;
}

async function deleteMeal() {
    targetID = this.parentElement.parentElement.id;
    await fetch(`${API_URL}${targetID}`, {
        method: "DELETE",
    });
    loadAllMeals();
};
function renderHtml(type, parrent, classList, textContent, id, attributes, useInnerHtml) {
    const element = document.createElement(type);

    if (useInnerHtml && textContent) {
        element.innerHTML = textContent;
    } else {
        if (textContent && type !== "input") {
            element.textContent = textContent;
        }
    }
    if (textContent && type === "input") {
        element.value = textContent;
    }

    if (classList && classList.length > 0) {
        element.classList.add(...classList);
    }

    if (id) {
        element.id = id;
    }

    if (attributes) {
        for (const key in attributes) {
            element[key] = attributes[key];
        }
    }

    if (parrent) {
        parrent.appendChild(element);
    }
    return element;
};

    