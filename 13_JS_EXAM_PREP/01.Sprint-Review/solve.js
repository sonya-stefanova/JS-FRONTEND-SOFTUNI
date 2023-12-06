const API_URL = 'http://localhost:3030/jsonstore/tasks';

const loadBttn = document.getElementById('load-board-btn');
const createTaskBttn = document.getElementById('create-task-btn');

const inputDOMSelectors = {
    title: document.getElementById('title'),
    description: document.getElementById('description'),
};
const statusManager = {
    'ToDo': document.querySelector('#todo-section > .task-list'),
    'In Progress': document.querySelector('#in-progress-section > .task-list'),
    'Code Review': document.querySelector('#code-review-section > .task-list'),
    'Done': document.querySelector('#done-section > .task-list'),
};
const statusToNextMap = {
    'ToDo': 'Move to In Progress',
    'In Progress': 'Move to Code Review',
    'Code Review': 'Move to Done',
};
const textContentToStatusMap = {
    'Move to In Progress': 'In Progress',
    'Move to Code Review': 'Code Review',
    'Move to Done': 'Done',
};

function attachEvents() {
    loadBttn.addEventListener('click', loadBoard);
    createTaskBttn.addEventListener('click', createTask);
}

async function loadBoard() {
    clearAllSections();
    try {
        const res = await fetch(API_URL);
        const tasks = await res.json();

        Object.values(tasks)
            .forEach((task) => {
                const taskContainer = statusManager[task.status];
                const item = createElement('li', '', taskContainer, ['task']);
                createElement('h3', task.title, item);
                createElement('p', task.description, item);
                const button = createElement('button', null, item, null, task._id);
                if (task.status !== 'Done') {
                    button.textContent = statusToNextMap[task.status];
                    button.addEventListener('click', moveTask);
                } else {
                    button.textContent = 'Close';
                    button.addEventListener('click', deleteTask);
                }
                taskContainer.append(item)
            })
    } catch (err) {
        console.error(err);
    }
}

function createTask() {
    const { title, description } = inputDOMSelectors;
    const hasInvalidInput = Object.values(inputDOMSelectors)
        .some((input) => input.value === '');
    if (hasInvalidInput) {
        return;
    }

    const headers = {
        method: 'POST',
        body: JSON.stringify({
            title: title.value,
            description: description.value,
            status: 'ToDo',
        })
    };

    fetch(API_URL, headers)
        .then(loadBoard)
        .catch(console.error);

    clearDOMInputs();
}

async function moveTask(e) {
    const button = e.target;
    const taskId = button.getAttribute('id');
    const headers = {
        method: 'PATCH',
        body: JSON.stringify({ status: textContentToStatusMap[button.textContent] })
    }

    fetch(`${API_URL}/${taskId}`, headers)
        .then(loadBoard)
        .catch(console.error);
}

function deleteTask(e) {
    const button = e.target;
    const taskId = button.getAttribute('id');
    const headers = {
        method: 'DELETE',
    }

    fetch(`${API_URL}/${taskId}`, headers)
        .then(loadBoard)
        .catch(console.error);
}

function createElement(type, content, parentNode, classes, id, useInnerHtml) {
    const element = document.createElement(type);

    if (content && useInnerHtml) {
        element.innerHTML = content;
    } else {
        if (content && type !== 'input') {
            element.textContent = content;
        }
      
        if (content && type === 'input') {
          element.value = content;
        }
    }

    if (classes && classes.length > 0) {
      element.classList.add(...classes);
    }

    if (id) {
      element.setAttribute('id', id);
    }

    if (parentNode) {
      parentNode.appendChild(element);
    }
  
    return element;
}


function clearAllSections() {
    Object.values(statusManager)
        .forEach((section) => {
            section.innerHTML = '';
        })
}

function clearDOMInputs() {
    Object.values(inputDOMSelectors)
        .forEach((input) => {
            input.value = '';
        })
}


attachEvents();
