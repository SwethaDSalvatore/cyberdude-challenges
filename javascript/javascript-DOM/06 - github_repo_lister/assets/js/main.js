const formEl = document.forms["form"];
const userNameEl = document.querySelector("#userName");
const apiUrl = "https://api.github.com/users/<USER-NAME>/repos";


formEl.addEventListener("submit", (e) => {
    e.preventDefault();

// validation
    function userName() {
        if (inputUserName.length > 5) {
            return inputUserName;
        } else {
            alert("Invalid Username");
        }
    }
// calling input userName
    const inputUserName = userNameEl.value;
    const gitUserName = userName();

// repalce the api username with input name
    const apiUrl = "https://api.github.com/users/<USER-NAME>/repos";
    const gitname = apiUrl.replace("<USER-NAME>", gitUserName);

    console.log(gitname);
});