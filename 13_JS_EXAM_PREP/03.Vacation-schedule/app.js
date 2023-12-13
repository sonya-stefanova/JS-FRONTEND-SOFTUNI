API_URL = "http://localhost:3030/jsonstore/tasks/";

const inputSelectors = {
    name: document.querySelector("#name"),
    days: document.querySelector("#num-days"),
    date: document.querySelector("#from-date"),
};

let vacationsArray = [];
// let vacationsArray = (3) [0:{…}, 1:{…}, 2:{…}]
let targetObj = {};

const loadVacationsBtn = document.querySelector("#load-vacations");
loadVacationsBtn.addEventListener("click", loadVacations);

const listHolder = document.querySelector("#list");
const buttonAddVacation = document.querySelector("#add-vacation");
buttonAddVacation.addEventListener("click", addVacation);

const buttonEditVacation = document.querySelector("#edit-vacation");
buttonEditVacation.addEventListener("click", editVacation);

const form = document.querySelector("form");



async function loadVacations() {
    listHolder.innerHTML = "";

    const result = await (await fetch(API_URL)).json();
    vacationsArray = Object.values(result);
    // console.log(vacationsArray);

    Object.values(result).forEach((singleVacation) => {
        const container = renderHTML("div", listHolder, null, ["container"], singleVacation._id);
        renderHTML("h2", container, singleVacation.name);
        renderHTML("h3", container, singleVacation.date);
        renderHTML("h3", container, singleVacation.days);

        const buttonChange = renderHTML("button", container, "Change", ["change-btn"]);
        const buttonDone = renderHTML("button", container, "Done", ["done-btn"]);

        buttonChange.addEventListener("click", changeVacantion);
        buttonDone.addEventListener("click", doneFunction);
    });
}

async function addVacation(e) {
    e.preventDefault();
    if (Object.values(inputSelectors).some((x) => !(x.value))) {
        return;
    }

    const {name, days, date} = inputSelectors;

    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({name: name.value, days: days.value, date: date.value}),
    });

    form.reset();
    loadVacations();
}

function changeVacantion() {
    const vacantionID = this.parentElement.id;
    targetObj = vacationsArray.find((vac) => vac._id === vacantionID);
    Object.keys(inputSelectors).forEach((key) => {
        inputSelectors[key].value = targetObj[key];
    });

    document.getElementById(vacantionID).remove();
    buttonAddVacation.disabled = true;
    buttonEditVacation.disabled = false;
}

async function editVacation(e) {
    e.preventDefault();
    const {name, days, date} = inputSelectors;

    await fetch(`${API_URL}${targetObj._id}`, {
        method: "PUT",
        body: JSON.stringify({name: name.value, days: days.value, data: date.value, _id: targetObj._id}),
    });
    form.reset();
    loadVacations();
    buttonAddVacation.disabled = false;
    buttonEditVacation.disabled = true;
}

async function doneFunction(e) {
    const vacantionID = this.parentElement.id;
    targetObj = vacationsArray.find((x) => x._id === vacantionID);

    await fetch(`${API_URL}${targetObj._id}`, {
        method: "DELETE",
    });
    loadVacations();
}

function renderHTML(type, parrent, textContent, classList, id, attributes, useInnerHtml) {
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
}