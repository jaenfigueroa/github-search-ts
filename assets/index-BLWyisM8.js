(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const i=document.getElementById("search-user"),p=document.getElementById("profile-img"),l=document.getElementById("profile-name"),d=document.getElementById("profile-username"),h=document.getElementById("profile-description"),y=document.getElementById("profile-followers"),$=document.getElementById("profile-following"),w=document.getElementById("profile-location"),E=document.getElementById("card-container"),u=document.getElementById("modal"),b=document.getElementById("close-dialog"),I=document.getElementById("button-search"),B=document.getElementById("button-random"),f="https://api.github.com",L=async t=>{try{return(await(await fetch(`${f}/users/${t}/repos`)).json()).map(e=>({url:e.html_url,name:e.name,description:e.description,license:e.license?e.license.name:"No tiene",forks:e.forks||0,stars:e.stargazers_count||0}))}catch{return[]}},g=async t=>{const n=await fetch(`${f}/users/${t}`),o=await n.json();return{exist:n.status===200,name:o.name,userName:o.login,description:o.bio,followers:o.followers,following:o.following,location:o.location,image:o.avatar_url,url:o.html_url}},v=t=>{let n="";t.forEach(o=>{const r=`
    <a class="card" href="${o.url}" target="_blank" title="Ver respositorio en Github">
      <h3>${o.name}</h3>
      <p>${o.description}</p>
      <ul>
        <li title="Licencia">
          <i class="fa-regular fa-id-badge"></i>
          ${o.license}
        </li>
        <li title="Forks">
          <i class="fa-solid fa-code-fork"></i>
          ${o.forks}
        </li>
        <li title="Estrellas">
          <i class="fa-regular fa-star"></i>
          ${o.stars}
        </li>
      </ul>
    </a>
      `;n+=r}),E.innerHTML=n},x=t=>{p.src=t.image,l.textContent=t.name||"",l.href=t.url||"",d.textContent=`@${t.userName}`||"",d.href=t.url||"",h.textContent=t.description||"No hay descripción disponible",y.textContent=String(t.followers)||"0",$.textContent=String(t.following)||"0",w.textContent=t.location||"No disponible"},m=(t,n)=>Math.floor(Math.random()*(n-t+1))+t,N=async()=>{for(;;){const t=m(1,4e6),n=m(1,30),e=(await(await fetch(`https://api.github.com/users?since=${t}`)).json())[n].login;if((await g(e)).exist)return e}},a=async t=>{const n=await g(t),o=await L(t);n.exist?(x(n),v(o)):(u.showModal(),b.addEventListener("click",()=>u.close()))};i.addEventListener("search",()=>i.value&&a(i.value));I.addEventListener("click",()=>i.value&&a(i.value));B.addEventListener("click",async()=>a(await N()));a("github");
