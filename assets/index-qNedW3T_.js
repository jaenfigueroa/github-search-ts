(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const i=document.getElementById("search-user"),f=document.getElementById("profile-img"),g=document.getElementById("profile-name"),p=document.getElementById("profile-username"),h=document.getElementById("profile-description"),y=document.getElementById("profile-followers"),$=document.getElementById("profile-following"),w=document.getElementById("profile-location"),E=document.getElementById("card-container"),l=document.getElementById("modal"),b=document.getElementById("close-dialog"),I=document.getElementById("button-search"),B=document.getElementById("button-random"),u="https://api.github.com",L=async t=>{try{return(await(await fetch(`${u}/users/${t}/repos`)).json()).map(e=>({url:e.html_url,name:e.name,description:e.description,license:e.license?e.license.name:"No tiene",forks:e.forks||0,stars:e.stargazers_count||0}))}catch{return[]}},m=async t=>{const n=await fetch(`${u}/users/${t}`),o=await n.json();return{exist:n.status===200,name:o.name,userName:o.login,description:o.bio,followers:o.followers,following:o.following,location:o.location,image:o.avatar_url,url:o.html_url}},v=t=>{let n="";t.forEach(o=>{const r=`
    <a class="card" href="${o.url}" target="_blank" title="Ver respositorio en Github">
      <h3>${o.name}</h3>
      <p>${o.description}</p>
      <ul>
        <li>
          <i class="fa-regular fa-id-badge"></i>
          ${o.license}
        </li>
        <li>
          <i class="fa-solid fa-code-fork"></i>
          ${o.forks}
        </li>
        <li>
          <i class="fa-regular fa-star"></i>
          ${o.stars}
        </li>
      </ul>
    </a>
      `;n+=r}),E.innerHTML=n},x=t=>{f.src=t.image,g.textContent=t.name||"",p.textContent=`@${t.userName}`||"",h.textContent=t.description||"No hay descripción disponible",y.textContent=String(t.followers)||"0",$.textContent=String(t.following)||"0",w.textContent=t.location||"No disponible"},d=(t,n)=>Math.floor(Math.random()*(n-t+1))+t,N=async()=>{for(;;){const t=d(1,4e6),n=d(1,30),e=(await(await fetch(`https://api.github.com/users?since=${t}`)).json())[n].login;if((await m(e)).exist)return e}},a=async t=>{const n=await m(t),o=await L(t);n.exist?(x(n),v(o)):(l.showModal(),b.addEventListener("click",()=>l.close()))};i.addEventListener("search",()=>i.value&&a(i.value));I.addEventListener("click",()=>i.value&&a(i.value));B.addEventListener("click",async()=>a(await N()));a("github");
