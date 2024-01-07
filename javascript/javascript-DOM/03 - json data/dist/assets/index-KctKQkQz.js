(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const a="Chocolate Cake",c=["🛒 2 cups all-purpose flour","🛒 1 and 3/4 cups granulated sugar","🛒 3/4 cup unsweetened cocoa powder","🛒 1 and 1/2 teaspoons baking powder","🛒 1 and 1/2 teaspoons baking soda","🛒 1 teaspoon salt","🛒 2 large eggs","🛒 1 cup whole milk","🛒 1/2 cup vegetable oil","🛒 2 teaspoons pure vanilla extract","🛒  1 cup boiling water","🛒 1 cup chocolate chips (optional)"],l=["✔️ Preheat the oven to 350°F (175°C), grease and flour two 9-inch round cake pans.","✔️ In a large bowl, sift together flour, sugar, cocoa powder, baking powder, baking soda, and salt.","✔️ Add eggs, milk, oil, and vanilla extract, beat on medium speed for 2 minutes.","✔️ Stir in boiling water until the batter is well combined, the batter will be thin, but that's okay.","✔️ If desired, fold in chocolate chips.","✔️ Pour the batter evenly into the prepared pans.","✔️ Bake for 30 to 35 minutes or until a toothpick inserted into the center comes out clean.","✔️ Allow the cakes to cool in the pans for 10 minutes before transferring to a wire rack to cool completely.","✔️ Once cooled, you can frost and decorate the cake as desired."],d={difficulty:"Intermediate",prepTime:"15 minutes",bakingTime:"30-35 minutes",totalTime:"1 hour",servings:12},o={recipeName:a,ingredients:c,instructions:l,notes:d};console.log(o);const u=document.querySelector("#ingredientsDetails"),p=document.querySelector("#instructionsDetails"),b=document.querySelector("#notesTable");u.innerHTML=`${o.ingredients.join("<br>")}`;p.innerHTML=`${o.instructions.join("<br>")}`;b.innerHTML=`
              <td class="py-2 px-4 border-b border border-violet-950  text-orange-300">${o.notes.difficulty}</td>
              <td class="py-2 px-4 border-b border border-violet-950 text-orange-300">${o.notes.prepTime}</td>
              <td class="py-2 px-4 border-b border border-violet-950 text-orange-300">${o.notes.bakingTime}</td>
              <td class="py-2 px-4 border-b border border-violet-950 text-orange-300">${o.notes.totalTime}</td>
              <td class="py-2 px-4 border-b border border-violet-950 text-orange-300">${o.notes.servings}</td>
            `;