function attachEvents() {
  const APIUrl = "http://localhost:3030/jsonstore/collections/studentsObj";
  const inputFields = Array.from(document.querySelectorAll("input"));
  const submitButton = document.querySelector("#submit");
  const tbodyElement = document.querySelector("tbody");

  displaystudentsObjTable();

  submitButton.addEventListener("click", submitStudent)

  async function displaystudentsObjTable() {
    tbodyElement.innerHTML = "";
    const response = await fetch(APIUrl);
    const studentsObj = await response.json();
    Object.values(studentsObj).forEach((student) => {
      const rowElement = createTr(student);
      tbodyElement.appendChild(rowElement);
    });
  }

  function createTr(student) {
    const createTdElement = (propertyName) => {
      const td = document.createElement("td");
      td.textContent = propertyName === "grade" ? Number(student[propertyName]).toFixed(2) : student[propertyName];
      return td;
    }

    const tr = document.createElement("tr");
    tr.appendChild(createTdElement("firstName"));
    tr.appendChild(createTdElement("lastName"));
    tr.appendChild(createTdElement("facultyNumber"));
    tr.appendChild(createTdElement("grade"));
    return tr;
  };

  async function submitStudent() {
    for (const input of inputFields) {
      if (!input.value) { 
        return;
      };
    }
  
    const firstName = inputFields[0].value;
    const lastName = inputFields[1].value;
    const facultyNumber = inputFields[2].value;
    const grade = inputFields[3].value;
  
    const newStudentEntry = {
      firstName, 
      lastName, 
      facultyNumber, 
      grade
    }

    await fetch(APIUrl, {
      method: "POST",
      body: JSON.stringify(newStudentEntry)      
    });

    displaystudentsObjTable();
  }
}

attachEvents();