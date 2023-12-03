async function loadCommits() {
    const ul = document.getElementById("commits");
    ul.innerHTML = "";

    const usernameInput = document.getElementById("usernameInput").value;
    const repoInput = document.getElementById("repo").value;
    const API_URL = `https://api.github.com/repos/${usernameInput}/${repoInput}/commits`;
    
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} (Not Found)`);
        }

        const commitEntries = await response.json();
        commitEntries.forEach(entry => {
            const authorName = entry.commit.author.name;
            const message = entry.commit.message;

            const li = document.createElement("li");
            li.textContent = `${authorName}: ${message}`;
            ul.appendChild(li);
        })

    } catch (error) {
        const li = document.createElement("li");
        li.textContent = error.message;
        ul.appendChild(li);
    }
}