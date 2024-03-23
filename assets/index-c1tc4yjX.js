(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c=document.getElementById("search-user"),d=document.getElementById("profile-img"),l=document.getElementById("profile-name"),u=document.getElementById("profile-description"),m=document.getElementById("profile-followers"),p=document.getElementById("profile-following"),g=document.getElementById("profile-location"),h=document.getElementById("card-container"),a="https://api.github.com",y=async o=>{try{return(await(await fetch(`${a}/users/${o}/repos`)).json()).map(e=>({url:e.html_url,name:e.name,description:e.description,license:e.license?e.license.name:"No tiene",forks:e.forks||0,stars:e.stargazers_count||0}))}catch{return[]}},$=async o=>{const t=await(await fetch(`${a}/users/${o}`)).json();return{name:t.name,description:t.bio,followers:t.followers,following:t.following,location:t.location,image:t.avatar_url,url:t.html_url}},w=o=>{let n="";o.forEach(t=>{const s=`
    <a class="card" href="${t.url}" target="_blank" title="Ver respositorio en Github">
      <h3>${t.name}</h3>
      <p>${t.description}</p>
      <ul>
        <li>
          <i class="fa-regular fa-id-badge"></i>
          ${t.license}
        </li>
        <li>
          <i class="fa-solid fa-code-fork"></i>
          ${t.forks}
        </li>
        <li>
          <i class="fa-regular fa-star"></i>
          ${t.stars}
        </li>
      </ul>
    </a>
      `;n+=s}),h.innerHTML=n},E=o=>{d.src=o.image,l.textContent=o.name||"Este usuario no existe",l.href=o.url||"#",u.textContent=o.description||"No hay descripción disponible",m.textContent=String(o.followers)||"0",p.textContent=String(o.following)||"0",g.textContent=o.location||"No disponible"},f=async o=>{try{const n=await $(o),t=await y(o);E(n),w(t)}catch{alert("Este usuario no existe")}};c.addEventListener("search",()=>f(c.value));f("github");
