(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.forms.form,u=document.querySelector("#userName"),n=document.getElementById("profile");n.style.display="none";a.addEventListener("submit",c=>{c.preventDefault();const o=u.value,r=new XMLHttpRequest;r.open("GET",`https://api.github.com/users/${o}`),r.onreadystatechange=function(){if(this.readyState==4&&this.status==200){const s=JSON.parse(r.response),e=`
            <div class="mt-5 flex space-x-10 items-center text-fuchsia-200 text-sm sm:text-xl bg-fuchsia-900 p-4 rounded border border-fuchsia-300">
            <img src="${s.avatar_url}" alt="profile avatar"
            class="w-32 h-32  rounded-full border border-fuchsia-100">
          <div class="space-y-2" id="confirm">
            <h4>👋Hi I am <span class="font-semibold">${s.name}</span></h4>
            <h4>Are you Looking for My Github Repository List ?</h4>
            <button type="submit"
              class="px-6 py-1 rounded bg-fuchsia-950 hover:bg-fuchsia-900 text-fuchsia-100 text-sm sm:text-lg border border-fuchsia-300">
              <a href="${s.html_url}" target="blank">Yes</a></button>
          </div>
          </div>
            `;n.style.display="block",n.innerHTML=e}},r.send()});
