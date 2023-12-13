const API_URL = "http://localhost:3030/jsonstore/tasks/";
const loadButton = document.querySelector("#load-history");
loadButton.addEventdivHolderener("click", loadWeatherData);
const divHolder = document.querySelector("#divHolder");
const form = document.querySelector("form");

const addButton = document.querySelector("#add-weather");
addButton.addEventListener("click", addWeather);

editButton = document.querySelector("#edit-weather");
editButton.addEventListener("click", editPutRequestWeatherData);


const inputSelectors = {
    location: document.querySelector("#location"),
    temperature: document.querySelector("#temperature"),
    date: document.querySelector("#date"),
};

let weatherData;
let targetID;



async function loadWeatherData() {
    divHolder.innerHTML = "";
    const weather = Object.values(await (await fetch(API_URL)).json());
    weatherData = weather;

    weather.forEach((element) => {
        const divContainer = buildHtmlElements("div", divHolder, null, ["divContainer"], element._id);
        buildHtmlElements("h2", divContainer, element.location);
        buildHtmlElements("h3", divContainer, element.date);
        buildHtmlElements("h3", divContainer, element.temperature, null, "celsius");
        const buttondivContainer = buildHtmlElements("div", divContainer, null, ["buttons-divContainer"]);
        const changeBtn = buildHtmlElements("button", buttondivContainer, "Change", ["change-btn"]);
        changeBtn.addEventListener("click", changeWeather);
        const deleteBtn = buildHtmlElements("button", buttondivContainer, "Delete", ["delete-btn"]);
        deleteBtn.addEventListener("click", deleteLocation);
    });
}

async function addWeather() {
    const {location, temperature, date} = inputSelectors;

    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({location: location.value, temperature: temperature.value, date: date.value}),
    });
    form.reset();
    loadWeatherData();
}

function changeWeather() {
    targetID = this.parentElement.parentElement.id;
    const weatherElement = weatherData.find((x) => x._id === targetID);

    Object.keys(inputSelectors).forEach((key) => {
        inputSelectors[key].value = weatherElement[key];
    });

    addButton.disabled = true;
    editButton.disabled = false;
}

async function editPutRequestWeatherData() {
    const {location, temperature, date} = inputSelectors;

    await fetch(`${API_URL}${targetID}`, {
        method: "PUT",
        body: JSON.stringify({location: location.value, date: date.value, temperature: temperature.value, _id: targetID}),
    });
    form.reset();
    loadWeatherData();

    addButton.disabled = false;
    editButton.disabled = true;
}

async function deleteLocation() {
    targetID = this.parentElement.parentElement.id;
    await fetch(`${API_URL}${targetID}`, {
        method: "DELETE",
    });
    loadWeatherData();
}


function buildHtmlElements(type, parrent, textContent, classdivHolder, id, attributes, useInnerHtml) {
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

    if (classdivHolder && classdivHolder.length > 0) {
        element.classdivHolder.add(...classdivHolder);
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
}