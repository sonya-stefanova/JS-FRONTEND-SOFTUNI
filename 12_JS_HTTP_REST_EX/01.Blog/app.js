function attachEvents() {
    const API_URL = "http://localhost:3030/jsonstore/blog/";
    const loadPostsBttn = document.querySelector("#btnLoadPosts");
    const viewButton = document.querySelector("#btnViewPost");
    const postsSelect = document.querySelector("#posts");
    const postHeading = document.querySelector("#post-title");
    const postParagraph = document.querySelector("#post-body");    
    const commentsList = document.querySelector("#post-comments");

    let allPosts = {};

    loadPostsBttn.addEventListener("click", async () => {
        postsSelect.innerHTML = "";
        const res = await fetch(API_URL + "posts");
        allPosts = await res.json();
        // console.log(allPosts);

        //create each option and append it to the select el;
        for (const [postID, postObj] of Object.entries(allPosts)) {
            const option = document.createElement("option");
            option.value = postID;
            option.textContent = postObj.title;
            postsSelect.appendChild(option);
        }
    })

    viewButton.addEventListener("click", async () => {
        postParagraph.innerHTML = "";
        commentsList.innerHTML = "";

        const postIdentifier = postsSelect.value;        
        postParagraph.textContent = allPosts[postIdentifier].body;
        postHeading.textContent = allPosts[postIdentifier].title;      

        const res = await fetch(API_URL + "comments");
        const commentsData = await res.json();
        
        const filteredComments = Object
        .values(commentsData)
        .filter(comment => comment.postId === postIdentifier);  

        filteredComments.forEach(comment => {
            const li = document.createElement("li");
            li.id = comment.id;
            li.textContent = comment.text;
            commentsList.appendChild(li);
        })
    })
}

attachEvents();