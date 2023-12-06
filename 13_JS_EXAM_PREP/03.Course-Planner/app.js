function solve() {
    const API_URL = 'http://localhost:3030/jsonstore/tasks/'
    
    const buttons = {
        load: document.getElementById('load-course'),
        add: document.getElementById('add-course'),
        edit: document.getElementById('edit-course'),
    }

    coursesTypes = ["Short", "Medium", "Long", ];

    const inputElements = {
        name: document.getElementById('course-name'),
        type: document.getElementById('course-type'),
        description: document.getElementById('description'),
        teacher: document.getElementById('teacher-name'),
    }

    const divCoursesHolder = document.getElementById('list')

    buttons.load.addEventListener('click', loadCourses);
    buttons.add.addEventListener('click', addCourse);

    function addCourse(event) {
        event?.preventDefault();
        for (const input in inputElements) {
            if (!inputElements[input]) {
                return;
            }
        }

         
        if (!coursesTypes.includes(inputElements.type.value)) {
            return
        }
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                title: inputElements.name.value,
                type: inputElements.type.value,
                description: inputElements.description.value,
                teacher: inputElements.teacher.value,
            })
        }
        fetch(API_URL, httpHeaders)
        .then(loadCourses())
        Object.values(inputElements).forEach((input) => {input.value = ''})
    }



    function editCourse(event) {
        const currentDiv = event.currentTarget.parentElement;
        const id = currentDiv.id
        inputElements.name.value = currentDiv.querySelector('h2').textContent;
        inputElements.teacher.value = currentDiv.querySelectorAll('h3')[0].textContent;
        inputElements.type.value = currentDiv.querySelectorAll('h3')[1].textContent;
        inputElements.description.value = currentDiv.querySelector('h4').textContent;
        currentDiv.remove();

        buttons.edit.disabled = false;
        buttons.add.disabled = true;
        
        buttons.edit.addEventListener('click', () => {
            httpHeaders = {
                method: 'PUT',
                body: JSON.stringify({
                    title: inputElements.name.value,
                    type: inputElements.type.value,
                    description: inputElements.description.value,
                    teacher: inputElements.teacher.value,
                    _id: id
                })
            }
            fetch(API_URL+id, httpHeaders)
            .then(loadCourses());
            Object.values(inputElements).forEach((input) => {input.value = ''});
            buttons.edit.disabled = true;
            buttons.add.disabled = false;
        })
    }

    function finishCourse(event) {
        const currentDiv = event.currentTarget.parentElement;
        httpHeaders = {
            method: 'DELETE'
        }
        fetch(API_URL+currentDiv.id, httpHeaders)
        .then(loadCourses());
        currentDiv.remove();
    }
    function loadCourses() {
        fetch(API_URL)
        .then((response) => response.json())
        .then((coursesDataObj) => {
            divCoursesHolder.textContent = '';

            for (const course in coursesDataObj) {
                const containerDiv = document.createElement('div');
                containerDiv.className = 'container';
                const h2 = document.createElement('h2');
                h2.textContent = coursesDataObj[course].title;
                containerDiv.appendChild(h2);
                const teacherName = document.createElement('h3');
                teacherName.textContent = coursesDataObj[course].teacher;
                containerDiv.appendChild(teacherName);
                const courseType = document.createElement('h3');
                courseType.textContent = coursesDataObj[course].type;
                containerDiv.appendChild(courseType);
                const courseDesc = document.createElement('h4');
                courseDesc.textContent = coursesDataObj[course].description;
                containerDiv.appendChild(courseDesc);
                containerDiv.id = coursesDataObj[course]._id;

                const editButton = document.createElement('button');
                editButton.textContent = 'Edit Course';
                editButton.className = 'edit-btn';
                editButton.addEventListener('click', editCourse);
                containerDiv.appendChild(editButton);

                const finishButton = document.createElement('button');
                finishButton.textContent = 'Finish Course';
                finishButton.className = 'finish-btn';
                finishButton.addEventListener('click', finishCourse);

                containerDiv.appendChild(finishButton);
                divCoursesHolder.appendChild(containerDiv);
            }
        })
    }
}

solve()