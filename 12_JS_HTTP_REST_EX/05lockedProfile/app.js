async function lockedProfile() {
    const API_URL = "http://localhost:3030/jsonstore/advanced/profiles";
    const profiles = await(await fetch(API_URL)).json();

    const mainContainer = document.getElementById("main");
    mainContainer.innerHTML = "";

    let userNumber = 1;
    Object.values(profiles).forEach(profile =>{
        const id = profile._id;
        const username = profile.username;
        const email = profile.email;
        const age = profile.age;

        const profileContainer = document.createElement("div");
        profileContainer.classList.add("profile");
        profileContainer.id = id;

        profileContainer.innerHTML = `

                    <img src="./iconProfile2.png" class="userIcon" />
                    <label>Lock</label>
                    <input type="radio" name="user${userNumber}Locked" value="lock" checked>
                    <label>Unlock</label>
                    <input type="radio" name="user${userNumber}Locked" value="unlock"><br>
                    <hr>
                    <label>Username</label>
                    <input type="text" name="user${userNumber}Username" value="${username}" disabled readonly />
                    <div id="user${userNumber}HiddenFields">
                        <hr>
                        <label>Email:</label>
                        <input type="email" name="user${userNumber}Email" value="${email}" disabled readonly />
                        <label>Age:</label>
                        <input type="email" name="user${userNumber}Age" value="${age}" disabled readonly />
                    </div>

                    <button>Show more</button>        
                    `

        mainContainer.appendChild(profileContainer);
        const userDetails = profileContainer.getElementsByTagName("div")[0];
        const unlockedButton = profileContainer.getElementsByTagName("input")[1];
        const lockedButton = profileContainer.getElementsByTagName("input")[0];
        const showMoreButton = profileContainer.getElementsByTagName("button")[0];
        lockedButton.checked = true;
        userDetails.style.display = "none";
        userNumber++;

        showMoreButton.addEventListener("click", () => {
            if (unlockedButton.checked) {
                if (showMoreButton.textContent === "Show more") {
                    userDetails.style.display = "block";
                    showMoreButton.textContent = "Hide it";
                } else {
                    userDetails.style.display = "none";
                    showMoreButton.textContent = "Show more";
                }
            }
        })
    });
}