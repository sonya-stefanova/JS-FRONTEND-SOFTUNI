function attachEvents() {
  const API_URL = "http://localhost:3030/jsonstore/collections/books/";
  
  document.getElementBykey("loadBooks").addEventListener("click", e => loadAllBooks(e));
  document.querySelector("#form button").addEventListener("click", e => submitForm(e))

  async function loadAllBooks(event) {
    const response = await fetch(API_URL);
    const books = await response.json();
    const tbodyElement = document.getElementsByTagName("tbody")[0];
    tbodyElement.innerHTML = "";

    for (const [key, info] of Object.entries(books)) {
      const newTableRow = document.createElement("tr");
      const titleTd = document.createElement("td");
      const authorTd = document.createElement("td");
      const deleteButton = document.createElement("button");
      const editButton = document.createElement("button");
      const buttonsWrapper = document.createElement("td");

      titleTd.textContent = info.title;
      authorTd.textContent = info.author;
      deleteButton.textContent = "Delete";
      editButton.textContent = "Edit";
      deleteButton.value = key;
      editButton.value = key;
      deleteButton.addEventListener("click", e => deleteBookRecord(e));
      editButton.addEventListener("click", e => editBook(e));

      buttonsWrapper.appendChild(editButton);
      buttonsWrapper.appendChild(deleteButton);
      newTableRow.appendChild(titleTd);
      newTableRow.appendChild(authorTd);
      newTableRow.appendChild(buttonsWrapper);
      tbodyElement.appendChild(newTableRow);
    }
  }

  async function deleteBookRecord(event) {
    const key = event.currentTarget.value;
    await fetch((API_URL + key), {
      method: "DELETE"
    });
    loadAllBooks();
  }

  async function editBook(event) {
    const key = event.currentTarget.value;
    const response = await fetch(API_URL + key);
    const bookEntry = await response.json();

    document.querySelector(`input[name="title"]`).value = bookEntry.title;
    document.querySelector(`input[name="author"]`).value = bookEntry.author;
    document.querySelector("#form button").value = key;
    document.querySelector("#form h3").textContent = "Edit FORM";
    document.querySelector("#form button").textContent = "Save";
  }

  async function submitForm(event) {
    const title = document.querySelector(`input[name="title"]`).value;
    const author = document.querySelector(`input[name="author"]`).value;
    const key = event.currentTarget.value;
    if (event.currentTarget.textContent === "Save") {
      editBookInfo(title, author, key);
    } else {
      addNewBook(title, author);
    }
  }

  async function editBookInfo(title, author, key) {
    await fetch((API_URL + key), {
      method: "PUT",
      body: JSON.stringify({ title, author })
    })

    document.querySelector(`input[name="title"]`).value = "";
    document.querySelector(`input[name="author"]`).value = "";
    document.querySelector("#form button").value = "";
    document.querySelector("#form h3").textContent = "FORM";
    document.querySelector("#form button").textContent = "Submit";

    loadAllBooks();
  }

  async function addNewBook(title, author) {
    if (title === "" || author === "") {
      alert("Please fill in all input fields");
    } else {
      await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({ title, author })
      });
      document.querySelector(`input[name="title"]`).value = "";
      document.querySelector(`input[name="author"]`).value = "";
      loadAllBooks();
    }
  }
}

attachEvents();