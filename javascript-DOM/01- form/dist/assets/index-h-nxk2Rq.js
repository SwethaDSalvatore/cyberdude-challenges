(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))u(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function m(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(n){if(n.ep)return;n.ep=!0;const t=m(n);fetch(n.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.forms["idcard-form"],a=document.getElementById("btn"),m=document.getElementById("outputContent"),u=document.getElementById("output");u.style.display="none",e.addEventListener("input",n);function n(){const o=e.checkValidity(),s=p(e.elements.employeeId.value),l=f(e.elements.email.value),r=y(e.elements.phone.value),i=E(e.elements.bloodGroup.value),d=v(e.elements.day.value,e.elements.month.value,e.elements.year.value);a.disabled=!(o&&s&&l&&r&&i&&d),c(),t("employeeId",s),t("email",l),t("phone",r),t("bloodGroup",i),t("day",d),t("month",d),t("year",d)}function t(o,s){const l=e.elements[o],r=document.getElementById(`error-${o}`);if(!s){const i=l.dataset.error||"This field is required.";r.textContent=i,l.classList.add("border-red-500"),r.classList.add("text-red-500")}}function c(){e.querySelectorAll("input").forEach(s=>{s.classList.remove("border-red-500");const l=document.getElementById(`error-${s.name}`);l&&(l.textContent="",l.classList.remove("text-red-500"))})}function p(o){return/^CD\d{5}$/.test(o)}function f(o){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)}function y(o){return/^(\+\d{1,3})?(\s)?\d{10}$/.test(o)}function E(o){return/^(A|B|AB|O)[+-]$/.test(o.toUpperCase())}function v(o,s,l){const r=o>=1&&o<=31,i=s>=1&&s<=12,d=l>=1900&&l<=new Date().getFullYear();return r&&i&&d}a.addEventListener("click",()=>{const o=e.elements.fullName.value.toUpperCase(),s=e.elements.gender.value.toUpperCase(),l=e.elements.employeeId.value,r=e.elements.email.value,i=e.elements.phone.value,d=e.elements.bloodGroup.value.toUpperCase(),h=e.elements.day.value,I=e.elements.month.value,g=e.elements.year.value,b=`
             Full Name : ${o}</p>
              <p>Gender : ${s}</p>
              <p>Employee ID NO : ${l}</p>
              <p>E-mail : ${r}</p>
              <p>Phone : ${i}</p>
              <p>Blood Group : ${d}</p>
              <p>Joining Date : ${h}/${I}/${g}</p>
          `;m.innerHTML=b,u.style.display="block"})});