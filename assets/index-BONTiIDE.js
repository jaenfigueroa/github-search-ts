(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const l=document.getElementById("search-user"),f=document.getElementById("profile-img"),m=document.getElementById("profile-name"),u=document.getElementById("profile-username"),p=document.getElementById("profile-description"),g=document.getElementById("profile-followers"),h=document.getElementById("profile-following"),$=document.getElementById("profile-location"),y=document.getElementById("card-container"),c=document.getElementById("modal"),w=document.getElementById("close-dialog"),a="https://api.github.com",E=async o=>{try{return(await(await fetch(`${a}/users/${o}/repos`)).json()).map(e=>({url:e.html_url,name:e.name,description:e.description,license:e.license?e.license.name:"No tiene",forks:e.forks||0,stars:e.stargazers_count||0}))}catch{return[]}},I=async o=>{const n=await fetch(`${a}/users/${o}`),t=await n.json();return{exist:n.status===200,name:t.name,userName:t.login,description:t.bio,followers:t.followers,following:t.following,location:t.location,image:t.avatar_url,url:t.html_url}},B=o=>{let n="";o.forEach(t=>{const i=`
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
      `;n+=i}),y.innerHTML=n},b=o=>{f.src=o.image,m.textContent=o.name||"",u.textContent=`@${o.userName}`||"",p.textContent=o.description||"No hay descripción disponible",g.textContent=String(o.followers)||"0",h.textContent=String(o.following)||"0",$.textContent=o.location||"No disponible"},d=async o=>{const n=await I(o),t=await E(o);n.exist?(b(n),B(t)):(c.showModal(),w.addEventListener("click",()=>c.close()))};l.addEventListener("search",()=>l.value&&d(l.value));d("github");
