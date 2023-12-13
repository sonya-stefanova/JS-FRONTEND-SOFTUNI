window.addEventListener("load", solve);

function solve() {
  const inputElements = {
    studentElement: document.getElementById(`student`),
    universityElement: document.getElementById(`university`),
    scoreElement: document.getElementById(`score`),
  };
  const nextButton = document.getElementById(`next-btn`);
  nextButton.addEventListener("click", previewStudent);

  const holdingPreviewUL = document.getElementById(`preview-list`);
  const form= document.getElementsByClassName(`applyContent`)[0];

  function previewStudent(e) {

    e.preventDefault();

    if (
      Object.values(inputElements).some((input) => !input.value)
    ) {
      return;
    }

    let student = inputElements.studentElement.value;
    let university = inputElements.universityElement.value;
    let score = inputElements.scoreElement.value;

    liApplication = createElement('li',null, null, ["application"], holdingPreviewUL, null);
    articleElement = createElement('article', null, null, null, liApplication);
    createElement('h4', student, null, null, articleElement);
    createElement('p', `University: ${university}`, null, null, articleElement);
    createElement('p', `Score: ${score}`, null, null, articleElement);

    buttonEdit = createElement('button', `edit`, null, ["action-btn", "edit"], liApplication);
    buttonApply = createElement('button', `apply`, null, ["action-btn", "apply"], liApplication);
    
    holdingPreviewUL.appendChild(liApplication);
    form.reset();
    nextButton.setAttribute("disabled", "");

    buttonEdit.addEventListener('click', (e) => {
      inputElements.scoreElement.value = score;
      inputElements.studentElement.value = student;
      inputElements.universityElement.value = university;

      liApplication.remove();
      nextButton.removeAttribute("disabled");

    });

    buttonApply.addEventListener('click', (e) =>{
      const candidates = document.getElementById('candidates-list');
      liApplication.removeChild(buttonEdit);
      liApplication.removeChild(buttonApply);
      candidates.appendChild(liApplication);
      holdingPreviewUL.removeChild(liApplication);
      nextBtn.removeAttribute('disabled');
    });

 
  };


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
  