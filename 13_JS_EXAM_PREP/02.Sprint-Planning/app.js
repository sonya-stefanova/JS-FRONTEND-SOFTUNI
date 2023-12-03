window.addEventListener('load', solve);

function solve() {
    const tasks = {};
    const inputSelectors = {
        title: document.getElementById(`title`),
        description: document.getElementById(`description`),
        label: document.querySelector(`#label`),
        points: document.querySelector(`#points`),
        assignee: document.querySelector(`#assignee`),
      };

    const selectors = {
        createButton: document.querySelector('#create-task-btn'),
        deleteButton: document.querySelector('#delete-task-btn'),
    }

    selectors.createButton.addEventListener('click', createTask);

    function createTask(e) {
        if (
            Object.values(inputSelectors).some((selector) => selector.value === ``)
          ) {
            return;
          }
          const task = {
            id: `task-${Object.values(tasks).length + 1}`,
            title: inputSelectors.title.value,
            description: inputSelectors.description.value,
            label: inputSelectors.label.value,
            points: Number(inputSelectors.points.value),
            assignee: inputSelectors.assignee.value,
          };
    tasks[task.id] = task;
};

  const article = createElement('article', null, ["task-card"], task.id) ;

  function createElement(type,textContent,classes, id, parent) {
      const element = document.createElement(type);

      if (classes && classes.length > 0) {
        element.classList.add(...classes);
      }
      if (id) {
        element.setAttribute(`id`, id);
      }
      if (textContent){
        element.textContent = content;

      }
      if (parent) {
        parent.appendChild(element);
      }
      
      return element;
    }

};
solve();