window.addEventListener("load", solve);

function solve() {
    const form = document.querySelector('form');
    const inputElements = {
        expenseElement: document.getElementById(`expense`),
        amountElement: document.getElementById(`amount`),
        dateElement: document.getElementById(`date`),
      };

      const addButton = document.getElementById(`add-btn`);
      addButton.addEventListener("click", addDataToPreview);
      
      const previewListContainer = document.querySelector(`#preview-list`);

      function addDataToPreview(e){
        e.preventDefault();

        if (
            Object.values(inputElements).some((input) => !input.value)
          ) {
            return;
          };

        let expenseType = inputElements.expenseElement.value;
        let amount = inputElements.amountElement.value;
        let date = inputElements.dateElement.value;
        
        const li = renderHtml('li', previewListContainer, ['expense-item']);
        const articleContainer = renderHtml('article', li);

        renderHtml('p', articleContainer, null, `Type: ${expenseType}`);
        renderHtml('p', articleContainer, null, `Amount: ${amount}$`);
        renderHtml('p', articleContainer, null, `Date: ${date}`);

        const buttonsContainer = renderHtml('div', li, ['buttons']);
        const buttonEdit = renderHtml('button', buttonsContainer, ['btn', 'edit'], 'edit');
        const buttonOk = renderHtml('button', buttonsContainer, ['btn', 'ok'], 'ok');
        form.reset();
        addButton.setAttribute("disabled", "");

        buttonEdit.addEventListener("click", () => {
            inputElements.expenseElement.value = expenseType;
            inputElements.amountElement.value = amount;
            inputElements.dateElement.value = date;

            li.remove();
            addButton.removeAttribute("disabled");
            addDataToPreview();
        });

        buttonOk.addEventListener("click", () => {
            const expensesContainer = document.querySelector("#expenses-list");
            buttonsContainer.removeChild(buttonEdit);
            buttonsContainer.removeChild(buttonOk);
            li.removeChild(buttonsContainer);
            expensesContainer.appendChild(li);
            previewListContainer.removeChild(li);
            addButton.enabled=True;
        });
      };

    const deleteButton = document.querySelector('.btn.delete');
    deleteButton.addEventListener("click", reloadApplication);

    function reloadApplication() {
        location.reload();
    }

      function renderHtml(type,parentNode,classes,textContent,id,innerHTML,attributes) {
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

};