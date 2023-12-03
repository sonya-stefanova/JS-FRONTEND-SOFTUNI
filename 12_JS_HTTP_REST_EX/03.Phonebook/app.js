function attachEvents() {
    const APIUrl = "http://localhost:3030/jsonstore/phonebook/";

    const [loadButton, createButton] = document.querySelectorAll("button");
    const [personInput, phoneInput] = document.querySelectorAll("input");
    const PhoneHolderUl = document.querySelector("#phonebook");

    loadButton.addEventListener("click", loadPhones);
    createButton.addEventListener("click", createContact);

    async function loadPhones() {
        const response = await fetch(APIUrl);
        const phonebook = await response.json();
        PhoneHolderUl.innerHTML = "";

        Object.values(phonebook).forEach((contactInfoObj) => {
            const li = document.createElement("li");
            li.textContent = `${contactInfoObj.person}: ${contactInfoObj.phone}`;
            
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.value = contactInfoObj._id;
            deleteButton.addEventListener("click", deleteContactInfo);
            li.appendChild(deleteButton);
            PhoneHolderUl.appendChild(li);
        });
    }

    async function deleteContactInfo(event) {        
        const _key = event.currentTarget.value;
        await fetch(APIUrl + _key, {
            method: "DELETE"            
        });
        await loadPhones();
    }

    async function createContact() {
        const newContact = {
            person: personInput.value,
            phone: phoneInput.value
        }
        await fetch(APIUrl, {
            method: "POST",
            body: JSON.stringify(newContact)
        });
        phoneInput.value = "";
        personInput.value = "";
        await loadPhones();
    }
}

attachEvents();