import { formatMyDate } from "./utils"


document.addEventListener("DOMContentLoaded", function () {

    // variable Declaration
    const formEl = document.forms["taskForm"];
    const taskListCard = document.getElementById("taskListCard")
    taskListCard.style.display = "none";

    formEl.addEventListener("submit", (e) => {
        e.preventDefault();

        // getting all values from form
        const formData = new FormData(formEl);

        // changing to object form
        const formValueObj = Object.fromEntries(formData.entries());

        // creating new array
        const newTaskData = [];

        // getting existing localStorage value (if it's exist ?)
        const existingTaskData = localStorage.getItem("taskData");

        //convert string to javascript obj/arr
        const existingTaskArray = (JSON.parse(existingTaskData));

        if (existingTaskArray) {
            // pushing the existing form value to existingTaskArray
            existingTaskArray.push(formValueObj);
            // setting the existingTaskArray value to localStorage as json stringify form
            localStorage.setItem("taskData", JSON.stringify(existingTaskArray));
        }
        else {
            // if there is no existing data push to newTaskData array
            newTaskData.push(formValueObj);
            // setting the newarray value to localStorage as json stringify form
            localStorage.setItem("taskData", JSON.stringify(newTaskData))
        }

        alert("Task has been submitted successfully😊");
        getAllTaskData()
        formEl.reset();

    });


    // Add an event listener for the delete buttons using a class
    const tableEl = document.getElementById("taskListTable");

    tableEl.addEventListener("click", function (e) {
        alert("Are you sure about deleting this task..!");

        if (e.target.classList.contains("deleteBtn")) {
            // Get the parent row of the delete button
            const row = e.target.closest("tr");

            // Get the index of the row in the table
            const rowIndex = Array.from(tableEl.children).indexOf(row);

            // Get the existing task data from localStorage
            const existingTaskData = localStorage.getItem("taskData");
            const existingTaskArray = JSON.parse(existingTaskData);

            // Remove the task corresponding to the clicked row index
            existingTaskArray.splice(rowIndex, 1);

            // Update the localStorage with the modified task data
            localStorage.setItem("taskData", JSON.stringify(existingTaskArray));

            // Update the UI
            getAllTaskData();
        }
    });


    function getAllTaskData() {
        // getting all data from the localStorage
        const taskData = localStorage.getItem("taskData");
        // coverting to JS form
        const taskDataArr = JSON.parse(taskData);
        // if no task created

        console.log(taskDataArr);
        if (taskDataArr && taskDataArr.length > 0) {
            taskListCard.style.display = "block";

            // getting output task list in UI 
            const tableEl = document.getElementById("taskListTable");
            tableEl.innerHTML = "";

            const finalData = taskDataArr.map((taskData, index) => {
                return `
            <tr>
                      <td class="py-2 px-4 border-transparent">${index + 1}</td>
                      <td class="py-2 px-4 border-transparent">${taskData.fullName}</td>
                      <td class="py-2 px-4 border-transparent">${formatMyDate(taskData.datepicker)}</td>
                      <td class="py-2 px-4 border-transparent">${taskData.taskTitle}</td>
                      <td class="py-2 px-4 border-transparent space-y-1 grid grid-row-3">
                      <button type="submit" class="px-3 py-2 rounded bg-rose-500 hover:bg-red-400 text-yellow-100 font-bold">
                      <a href="${taskData.sourceLink}">Code</a>
                      </button>
                      <button type="submit" class="px-3 py-2  rounded bg-rose-500 hover:bg-red-400 text-yellow-100 font-bold">
                      <a href="${taskData.liveLink}">Live Preview</a>
                      </button>
                      <button type="submit" class=" deleteBtn px-3 py-2 rounded bg-red-500 hover:bg-rose-500 text-yellow-100 font-bold">
                      Delete this task
                      </button>
                      </td>
                    </tr>                  
            `;
            })
                .join(" ");
            console.log(finalData);
            tableEl.innerHTML += finalData;

        }
        else {
            // Remove the "taskData" key from localStorage if there are no tasks
            localStorage.removeItem("taskData");
            taskListCard.style.display = "none";
            console.log(" Task not created Yet ..!");
            
        }
    }


    getAllTaskData();

});