import chocolateCakeRecipe from "./data.json";
console.log(chocolateCakeRecipe);

const ingredientsDetailsEl = document.querySelector("#ingredientsDetails");
const instructionsDetailsEl = document.querySelector("#instructionsDetails");
const notesDetailsEl = document.querySelector("#notesTable");

ingredientsDetailsEl.innerHTML = `${chocolateCakeRecipe.ingredients.join("<br>")}`
instructionsDetailsEl.innerHTML = `${chocolateCakeRecipe.instructions.join("<br>")}`
notesDetailsEl.innerHTML =
    `
              <td class="py-2 px-4 border-b border border-violet-950  text-orange-300">${chocolateCakeRecipe.notes.difficulty}</td>
              <td class="py-2 px-4 border-b border border-violet-950 text-orange-300">${chocolateCakeRecipe.notes.prepTime}</td>
              <td class="py-2 px-4 border-b border border-violet-950 text-orange-300">${chocolateCakeRecipe.notes.bakingTime}</td>
              <td class="py-2 px-4 border-b border border-violet-950 text-orange-300">${chocolateCakeRecipe.notes.totalTime}</td>
              <td class="py-2 px-4 border-b border border-violet-950 text-orange-300">${chocolateCakeRecipe.notes.servings}</td>
            `