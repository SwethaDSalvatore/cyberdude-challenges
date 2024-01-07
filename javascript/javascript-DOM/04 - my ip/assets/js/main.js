const ipHolderEl = document.getElementById("ipHolder");

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
        if (this.status === 200) {
            ipHolderEl.textContent = xhr.responseText;
        }
    } else {
        ipHolderEl.innerHTML += `<span>Wrong</span>`
    }
}

xhr.open("GET", "https://ipv4.icanhazip.com/")
xhr.send();
