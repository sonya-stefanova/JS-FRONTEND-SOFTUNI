window.addEventListener("load", solve);

function solve() {
  const inputElements = {
    nameElement: document.getElementById(`player`),
    scoreElement: document.getElementById(`score`),
    roundElement: document.getElementById(`round`),
  };
  const addButton = document.getElementById(`add-btn`);
  const clearButton = document.querySelector(".btn.clear");
  
  const containerHolders = {
    sureList: document.getElementById(`sure-list`),
    scoreElementboardList: document.getElementById(`scoreboard-list`),
  };

  addButton.addEventListener(`click`, (e) => {
    e.preventDefault();

    if (
      Object.values(inputElements).some((input) => !input.value)
    ) {
      return;
    }

    let player = inputElements.nameElement.value;
    let playerscoreElement = inputElements.scoreElement.value;
    let playerroundElement = inputElements.roundElement.value;


    const flexboxItems = createElement(`li`,false,false,["dart-item"],containerHolders.sureList);
    const article = createElement(`article`, false, false, [], flexboxItems);
    createElement(`p`, player, false, [], article);
    createElement(`p`, `Score: ${playerscoreElement}`, false, [], article);
    createElement(`p`, `Round: ${playerroundElement}`, false, [], article);
    const editButton = createElement(`button`,`edit`,false,["btn", "edit"],flexboxItems);
    const scoreboardTransferButton = createElement(`button`, `ok`, false, ["btn", "ok"], flexboxItems);
    
    addButton.disabled = true;
    editButton.addEventListener(`click`, () => {
      inputElements.nameElement.value = player;
      inputElements.scoreElement.value = playerscoreElement;
      inputElements.roundElement.value = playerroundElement;
      addButton.disabled = false;
      flexboxItems.remove();
    });
    
    scoreboardTransferButton.addEventListener(`click`, () => {
      containerHolders.scoreElementboardList.appendChild(flexboxItems);
      addButton.disabled = false;

      editButton.remove();
      scoreboardTransferButton.remove();
    });
    
    clearButton.addEventListener(`click`, () => {
      location.reload();
    });
    inputElements.playeName.value = ``;
    inputElements.score.value = ``;
    inputElements.round.value = ``;
    });



  function createElement(type,textContent,id,classes,parentNode,innerHTML,attributes) {
    let element = document.createElement(type);
    if (classes && classes.length > 0) {
      element.classList.add(...classes);
    }
    if (id) {
      element.setAttribute(`id`, id);
    }
    if (innerHTML && textContent) {
      element.innerHTML = textContent;
    } else if (textContent) {
      element.textContent = textContent;
    }
    if (parentNode) {
      parentNode.appendChild(element);
    }
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }
    return element;
  }
}