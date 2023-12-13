window.addEventListener("load", solve);

function solve() {
    const inputSelectors = {
        firstName: document.querySelector("#first-name"),
        lastName: document.querySelector("#last-name"),
        age: document.querySelector("#age"),
        storyTitle: document.querySelector("#story-title"),
        genre: document.querySelector("#genre"),
        story: document.querySelector("#story"),
    };
    const previewList = document.querySelector("#preview-list");
    const buttonPublish = document.querySelector("#form-btn");
    buttonPublish.addEventListener("click", publishStory);
    const form = document.querySelector("form");

    const inputValues = {
        firstName: null,
        lastName: null,
        age: null,
        storyTitle: null,
        genre: null,
        story: null,
    };

    function createHtmlElement(type, parrent, textContent, classList, id, attributes, useInnerHtml) {
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
    function publishStory() {
        if (Object.values(inputSelectors).some((x) => x.value === "")) {
            return;
        }

        const {firstName, lastName, age, storyTitle, genre, story} = inputSelectors;

        const li = createHtmlElement("li", previewList, null, ["story-info"]);
        const article = createHtmlElement("article", li);

        createHtmlElement("h4", article, `Name: ${firstName.value} ${lastName.value}`);
        createHtmlElement("p", article, `Age: ${age.value}`);
        createHtmlElement("p", article, `Title: ${storyTitle.value}`);
        createHtmlElement("p", article, `Genre: ${genre.value}`);
        createHtmlElement("p", article, story.value);

        const saveBtn = createHtmlElement("button", li, "Save Story", ["save-btn"]);
        saveBtn.addEventListener("click", saveStory);
        const editBtn = createHtmlElement("button", li, "Edit Story", ["edit-btn"]);
        editBtn.addEventListener("click", editStory);
        const deleteBtn = createHtmlElement("button", li, "Delete Story", ["delete-btn"]);
        deleteBtn.addEventListener("click", deleteStory);

        Object.keys(inputSelectors).forEach(input => {
            inputValues[input] = inputSelectors[input].value;
        });
        form.reset();
        buttonPublish.disabled = true;
    }

    function editStory() {
      Object.keys(inputSelectors).forEach(key => {
        inputSelectors[key].value = inputValues[key];  
        });
      previewList.innerHTML = "<h3>Preview</h3>";
      buttonPublish.disabled = false;
    };

    function deleteStory() {
        previewList.innerHTML = "<h3>Preview</h3>";
        buttonPublish.disabled = false;
    }

    function saveStory() {
      
      const mainContainer = document.querySelector("#main");
      mainContainer.innerHTML = "";
      const h1 = createHtmlElement("h1", previewList, 'Your scary story is saved!');
      mainContainer.appendChild(h1);

    }
}