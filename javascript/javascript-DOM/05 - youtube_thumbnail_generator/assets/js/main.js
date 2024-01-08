const formEl = document.forms["form"];
const copiedLinkEl = document.getElementById("copiedLink");
const outputCardEl = document.getElementById("outputCard");

outputCardEl.style.display = "none";
formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    // validation

    function getVideoId(url) {
        const regex = /[?&]v=([^&]+)/;
        const match = url.match(regex);

        if (match) {
            return match[1];
        } else {
            alert("Invalid Link, Kindly check!!");
        }
    }
    // calling only id
    const youtubeLink = copiedLinkEl.value;
    const videoId = getVideoId(youtubeLink);

    // replacing dev id with youtube id
    const devLink = "https://i.ytimg.com/vi/[VIDEO_ID]/maxresdefault.jpg";
    const outputLink = devLink.replace("[VIDEO_ID]", videoId);

    // appending src link to ui
    const srcLinkEl = document.getElementById("srcLink");
    srcLinkEl.src = outputLink;
    outputCardEl.style.display = "block";

});