const api = "https://api.exchangerate-api.com/v4/latest/[base]";
const convertEl = document.getElementById("convert");
const perPersonEl = document.getElementById("perPerson");
const toCurrencyEl = document.querySelector("#to");
const fromCurrencyEl = document.querySelector("#from");
const billAmountEl = document.querySelector("#billAmt");
const membersEl = document.getElementById("members");
const finalAmountEl = document.getElementById("finalAmount");
const CurrencyValueEl = document.getElementById("CurrencyValue");
const inputContainerEl = document.getElementById("inputContainer");
const billNameEl = document.querySelector("#billName");
const formEl = document.querySelector("#form");
const splitListCard = document.getElementById("splitListCard")

splitListCard.style.display = "none";
// add name  input element
const addNameButtonEl = document.getElementById("addNameButton")
const inputValues = [];

addNameButtonEl.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the count value from the input
    const members = membersEl.value;

    // Clear previous inputs
    inputContainerEl.innerHTML = '';

    // Generate and append input elements based on the count
    for (let i = 0; i < members; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `${i + 1}`;
        input.classList = `w-full mb-2 px-3 py-2 focus:outline-none focus:border-yellow-700 rounded`;
        input.name = `name${i + 1}`
        input.placeholder = `Name ${i + 1}`;
        inputContainerEl.appendChild(input);
        // Add input event listener to update inputValues array
        input.addEventListener('input', (event) => {
            inputValues[i] = event.target.value;
        });
    }

});

// calculations
perPersonEl.addEventListener("click", async (e) => {
    e.preventDefault();
    // Get the count value from the input
    const fromCurrencyValue = fromCurrencyEl.value;
    const toCurrencyValue = toCurrencyEl.value;
    const url = api.replace("[base]", fromCurrencyValue);
    const billAmount = billAmountEl.value;
    const members = membersEl.value;

    // async function  
    async function getcurrencyData() {
        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.error("Network error: ", error);
        }
    }
    const currencyData = await getcurrencyData();
    const convertedValue = (currencyData.rates[toCurrencyValue] * billAmount);
    const splitValue = (convertedValue / members).toFixed(2);
    finalAmountEl.innerHTML = splitValue;
    CurrencyValueEl.innerHTML = `${toCurrencyValue}/per share`;
    const membersList = inputValues.join(', ');

    // data to set in localStorage 

    const SplitDataObj = {
        billName: billNameEl.value,
        membersName: membersList,
        totalAmount: billAmountEl.value,
        perShareAmt: splitValue,
        toCurrecy: toCurrencyEl.value

    };


    // local storage

    // creating new array
    const newSplitData = [];

    // getting existing localStorage value (if it's exist ?)
    const existingSplitData = localStorage.getItem("splitData");

    //convert string to javascript obj/arr
    const existingSplitArray = (JSON.parse(existingSplitData));

    if (existingSplitArray) {
        // pushing the existing form value to existingSplitArray
        existingSplitArray.push(SplitDataObj);
        // setting the existingSplitArray value to localStorage as json stringify form
        localStorage.setItem("splitData", JSON.stringify(existingSplitArray));
    }
    else {
        // if there is no existing data push to newTaskData array
        newSplitData.push(SplitDataObj);
        // setting the newarray value to localStorage as json stringify form
        localStorage.setItem("splitData", JSON.stringify(newSplitData))
    }
    getAllSplitData();
    inputContainerEl.style.display = "none";
    formEl.reset();
});

// Add an event listener for the delete buttons using a class
const tableEl = document.getElementById("splitListTable");

tableEl.addEventListener("click", function (e) {
    alert("Are you sure about deleting this data..!");

    if (e.target.classList.contains("deleteBtn")) {
        // Get the parent row of the delete button
        const row = e.target.closest("tr");

        // Get the index of the row in the table
        const rowIndex = Array.from(tableEl.children).indexOf(row);

        // Get the existing task data from localStorage
        const existingSplitData = localStorage.getItem("splitData");
        const existingSplitArray = JSON.parse(existingSplitData);

        // Remove the task corresponding to the clicked row index
        existingSplitArray.splice(rowIndex, 1);

        // Update the localStorage with the modified task data
        localStorage.setItem("splitData", JSON.stringify(existingSplitArray));

        // Update the UI
        getAllSplitData();
    }
});

function getAllSplitData() {
    // getting all data from the localStorage
    const splitData = localStorage.getItem("splitData");

    // coverting to JS form
    const splitDataArr = JSON.parse(splitData);

    // if no task created
    if (splitDataArr && splitDataArr.length > 0) {
        splitListCard.style.display = "block";

        // getting output task list in UI 
        const tableEl = document.getElementById("splitListTable");
        tableEl.innerHTML = "";

        const finalData = splitDataArr.map((splitData, index) => {
            return `
        <tr>
                  <td class="sm:py-2 sm:px-4 px-1 py-1 bg-amber-200 border border-amber-700">${index + 1}</td>
                  <td class="sm:py-2 sm:px-4 px-1 py-1 bg-amber-200 border border-amber-700">${splitData.billName}</td>
                  <td class="sm:py-2 sm:px-4 px-1 py-1 bg-amber-200 border border-amber-700">${splitData.membersName}</td>
                  <td class="sm:py-2 sm:px-4 px-1 py-1 bg-amber-200 border border-amber-700">${splitData.totalAmount}</td>
                  <td class="sm:py-2 sm:px-4 px-1 py-1 bg-amber-200 border border-amber-700">${splitData.perShareAmt}. ${splitData.toCurrecy}</td>
                  <td class="sm:py-2 sm:px-4 px-1 py-1 bg-amber-200 border border-amber-700">                 
                  <button type="submit" class=" deleteBtn px-1 py-1 rounded bg-red-500 hover:bg-rose-500 text-yellow-100 font-bold">
                  Delete
                  </button>
                  </td>
                </tr>                  
        `;
        })
            .join(" ");
        tableEl.innerHTML += finalData;

    }
    else {
        // Remove the "taskData" key from localStorage if there are no tasks
        localStorage.removeItem("splitData");
        splitListCard.style.display = "none";
        console.log(" Task not created Yet ..!");

    }
}
getAllSplitData();