const quoteEl = document.querySelector("#quote")
const apiUrl = "https://api.adviceslip.com/advice";
const reloadBtnEl = document.querySelector("button");
reloadBtnEl.style.display = "none";

// reload btn
reloadBtnEl.addEventListener("click", () => {
    window.location.href = "/";
});

// async function  
async function getAdvicesData() {
    try {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Network error: ", error);
    }
}

const adviceData = await getAdvicesData();
quoteEl.textContent = adviceData.slip.advice;

// reload btn view
reloadBtnEl.style.display = "block";