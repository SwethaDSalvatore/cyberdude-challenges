const formEl = document.forms["form"];
const userNameEl = document.querySelector("#userName");
const profile = document.getElementById("profile");
profile.style.display = "none";

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    // validation
    function userName() {
        if (inputUserName.length > 3) {
            return inputUserName;
        } else {
            alert("Invalid Username");
        }
    }
    // calling input userName
    const inputUserName = userNameEl.value;

    // create new XMLHttpRequest
    const newXml = new XMLHttpRequest();
    // console.log(newXml);

    newXml.open("GET", `https://api.github.com/users/${inputUserName}`);

    newXml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(newXml.response);
            const profileView = `
            <div class="mt-5 flex space-x-10 items-center text-fuchsia-200 text-sm sm:text-xl bg-fuchsia-900 p-4 rounded border border-fuchsia-300">
            <img src="${data.avatar_url}" alt="profile avatar"
            class="w-32 h-32  rounded-full border border-fuchsia-100">
          <div class="space-y-2" id="confirm">
            <h4>👋Hi I am <span class="font-semibold">${data.name}</span></h4>
            <h4>Are you Looking for My Github Repository List ?</h4>
            <button type="submit"
              class="px-6 py-1 rounded bg-fuchsia-950 hover:bg-fuchsia-900 text-fuchsia-100 text-sm sm:text-lg border border-fuchsia-300">
              <a href="${data.html_url}" target="blank">Yes</a></button>
          </div>
          </div>
            `
            profile.style.display = "block";
            profile.innerHTML = profileView;

        }
    };

    newXml.send();




});
