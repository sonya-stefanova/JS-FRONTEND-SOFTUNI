function attachEvents() {

    API_URL = `http://localhost:3030/jsonstore/messenger`
    refreshButton = document.querySelector('#refresh');
    refreshButton.addEventListener('click', getMessages);
    sendButton = document.querySelector('#submit');
    sendButton.addEventListener('click', postMessages);


    async function getMessages() {
        allMessages = await(await fetch(API_URL)).json();

        const textArea = document.querySelector('#messages');
        textArea.textContent = ""; 

        Object.values(allMessages).forEach((message) => {
            const messageEl = document.createElement('div');
            textArea.textContent +=`${message.author}: ${message.content}\n`
            textArea.textContent.trim();
        });

    };


    async function postMessages() {
        const author = document.querySelector('input[name="author"]').value;
        const content = document.querySelector('input[name="content"]').value;


        fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({author, content}),
        }); 


    };
}

attachEvents();