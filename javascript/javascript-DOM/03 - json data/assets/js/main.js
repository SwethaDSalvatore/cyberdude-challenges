import chocolateCakeRecipe from "./data.json";
console.log(chocolateCakeRecipe);

const ingredientsDetailsEl = document.querySelector("#ingredientsDetails");
const instructionsDetailsEl = document.querySelector("#instructionsDetails");
const notesDetailsEl = document.querySelector("#notesTable");

ingredientsDetailsEl.innerHTML = `${chocolateCakeRecipe.ingredients.join("<br>")}`
instructionsDetailsEl.innerHTML = `${chocolateCakeRecipe.instructions.join("<br>")}`
notesDetailsEl.innerHTML =
    `
              <td class="p-1 sm:py-2 sm:px-4 border-b border border-violet-950  text-orange-300 text-xs sm:text-lg">${chocolateCakeRecipe.notes.difficulty}</td>
              <td class="p-1 sm:py-2 sm:px-4 border-b border border-violet-950  text-orange-300 text-xs sm:text-lg">${chocolateCakeRecipe.notes.prepTime}</td>
              <td class="p-1 sm:py-2 sm:px-4 border-b border border-violet-950  text-orange-300 text-xs sm:text-lg">${chocolateCakeRecipe.notes.bakingTime}</td>
              <td class="p-1 sm:py-2 sm:px-4 border-b border border-violet-950  text-orange-300 text-xs sm:text-lg">${chocolateCakeRecipe.notes.totalTime}</td>
              <td class="p-1 sm:py-2 sm:px-4 border-b border border-violet-950  text-orange-300 text-xs sm:text-lg">${chocolateCakeRecipe.notes.servings}</td>
            `