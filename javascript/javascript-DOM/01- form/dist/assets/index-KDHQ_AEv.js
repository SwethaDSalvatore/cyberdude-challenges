(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const n=document.forms["idcard-form"],r=document.getElementById("review"),l=document.getElementById("outputContent"),s=document.getElementById("output"),e=document.getElementById("submit");s.style.display="none",r.addEventListener("click",t=>{t.preventDefault();const o=n.elements.fullName.value.toUpperCase(),u=n.elements.gender.value,c=n.elements.employeeId.value,i=n.elements.email.value,d=n.elements.phone.value,m=n.elements.bloodGroup.value,a=n.elements.day.value,p=n.elements.month.value,g=n.elements.year.value;if(o.length>0&&u.length>0&&c.length>0&&i.length>0&&d.length>0&&m.length>0&&a.length>0&&p.length>0&&g.length>0){const f=`
    <p><strong>Full Name:</strong> ${o}</p>
    <p><strong>Gender:</strong> ${u}</p>
    <p><strong>Employee ID NO:</strong> ${c}</p>
    <p><strong>E-mail:</strong> ${i}</p>
    <p><strong>Phone:</strong> ${d}</p>
    <p><strong>Blood Group:</strong> ${m}</p>
    <p><strong>Joining Date:</strong> ${a}/${p}/${g}</p>
`;l.innerHTML=f,s.style.display="block"}}),e.addEventListener("click",t=>{t.preventDefault(),alert("form has been submitted successfuly")})});
