const BASEURL = "http://localhost:3030/jsonstore/tasks/";

const loadButton = document.querySelector("#load-history");
const divHolder = document.querySelector("#divHolder");
const form = document.querySelector("form");

const addButton = document.querySelector("#add-weather");
const editButton = document.querySelector("#edit-weather");

editButton.addEventdivHolderener("click", EditPutRequest);
addButton.addEventdivHolderener("click", addWeather);
loadButton.addEventdivHolderener("click", loadHistory);

const inputSelectors = {
    location: document.querySelector("#location"),
    temperature: document.querySelector("#temperature"),
    date: document.querySelector("#date"),
};

let weatherRecords;
let targetID;



async function loadHistory() {
    divHolder.innerHTML = "";

    const weather = Object.values(await (await fetch(BASEURL)).json());
    weatherRecords = weather;

    weather.forEach((element) => {
        const container = renderDom("div", divHolder, null, ["container"], element._id);
        renderDom("h2", container, element.location);
        renderDom("h3", container, element.date);
        renderDom("h3", container, element.temperature, null, "celsius");
        const buttonContainer = renderDom("div", container, null, ["buttons-container"]);
        const changeButton = renderDom("button", buttonContainer, "Change", ["change-btn"]);
        const deleteButton = renderDom("button", buttonContainer, "Delete", ["delete-btn"]);
        
        changeButton.addEventListener("click", changeWeather);
        deleteButton.addEventListener("click", deleteLocation);
    });
}

async function addWeather() {
    const {location, temperature, date} = inputSelectors;

    await fetch(BASEURL, {
        method: "POST",
        body: JSON.stringify({location: location.value, temperature: temperature.value, date: date.value}),
    });
    form.reset();
    loadHistory();
}

function changeWeather() {
    targetID = this.parentElement.parentElement.id;
    const targetForecast = weatherRecords.find((x) => x._id === targetID);

    Object.keys(inputSelectors).forEach((key) => {
        inputSelectors[key].value = targetForecast[key];
    });

    addButton.disabled = true;
    editButton.disabled = false;
}

async function EditPutRequest() {
    const {location, temperature, date} = inputSelectors;

    await fetch(`${BASEURL}${targetID}`, {
        method: "PUT",
        body: JSON.stringify({location: location.value, date: date.value, temperature: temperature.value, _id: targetID}),
    });
    form.reset();
    loadHistory();

    addButton.disabled = false;
    editButton.disabled = true;
}

async function deleteLocation() {
    targetID = this.parentElement.parentElement.id;
    await fetch(`${BASEURL}${targetID}`, {
        method: "DELETE",
    });
    loadHistory();
}

function renderDom(type, parrent, textContent, classdivHolder, id, attributes, useInnerHtml) {
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
