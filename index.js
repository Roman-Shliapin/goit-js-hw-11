import{a as p,S as d,i as l}from"./assets/vendor-D8hBcPQM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function y(i){return p("https://pixabay.com/api/",{params:{key:"52807659-bebfa0ce69a97bf76a6d524af",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:t})=>(console.log(t.hits),t.hits)).catch(t=>{throw console.log(t),t})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(i){const t=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:s,comments:f,downloads:m})=>`<li class="gallery-item">
        <a href="${n}" class="gallery-link">
          <img src="${o}" alt="${e}" class="gallery-image" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${r}</p>
          <p class="info-item"><b>Views</b> ${s}</p>
          <p class="info-item"><b>Comments</b> ${f}</p>
          <p class="info-item"><b>Downloads</b> ${m}</p>
        </div>
      </li>`).join("");c.innerHTML=t,g.refresh()}function b(){c.innerHTML=""}function L(){u.classList.remove("is-hidden")}function S(){u.classList.add("is-hidden")}const a=document.querySelector(".form"),q=a.querySelector(".form-input");a.addEventListener("submit",v);function v(i){i.preventDefault();const t=q.value.trim();if(!t){l.warning({title:"Oops!",message:"Please enter a search term",timeout:3e3,position:"topRight"});return}a.reset(),L(),y(t).then(o=>{if(b(),o.length===0){l.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",timeout:3e3,position:"topRight"});return}h(o)}).catch(o=>{console.log(o)}).finally(()=>S())}
//# sourceMappingURL=index.js.map
