window.addEventListener("load", solve);

function solve() {
    const publishBttn = document.querySelector('#publish-btn');
    publishBttn.addEventListener("click", (e) => {
        const titleElement = document.querySelector('#task-title');
        const categoryElement = document.querySelector('#task-category');
        const contentElement = document.querySelector('#task-content');

        const title = titleElement.value;
        const category = categoryElement.value;
        const content = contentElement.value;

        if (!title || !category || !content){
            return;
        }
        const ulElement = document.querySelector('#review-list');
        const publushedListEleemnt = document.querySelector('#published-list');


        const titleHeaderElement = document.createElement('h4');
        titleHeaderElement.textContent = title;

        const categoryPElement = document.createElement('p');
        categoryPElement.textContent = `Category: ${category}`;

        const contentPElement = document.createElement('p');
        contentPElement.textContent = `Content: ${content}`

        const articleElement = document.createElement('article');
        articleElement.appendChild(titleHeaderElement);
        articleElement.appendChild(categoryPElement);
        articleElement.appendChild(contentPElement);

        const buttonElement = document.createElement('button');
        buttonElement.classList.add('action-btn');

        const buttonEditElement = buttonElement.cloneNode();
        buttonEditElement.textContent = 'Edit';
        buttonEditElement.classList.add('edit');

        const buttonPostElement = buttonElement.cloneNode();
        buttonPostElement.textContent = 'Post';
        buttonEditElement.classList.add('post');
        
        const listItem = document.createElement('li');
        listItem.className = 'rpost';
        listItem.appendChild(articleElement);
        listItem.appendChild(buttonEditElement);
        listItem.appendChild(buttonPostElement);

        ulElement.appendChild(listItem);

        titleElement.value = "";
        categoryElement.value = "";
        contentElement.value = "";

        buttonEditElement.addEventListener('click', (e) => {
            titleElement.value = title;
            categoryElement.value = category;
            contentElement.value = content;
            
            listItem.remove();

        });

        buttonPostElement.addEventListener('click', () => {
            document.querySelector(`#published-list`).appendChild(listItem);
        });



    })

  
}