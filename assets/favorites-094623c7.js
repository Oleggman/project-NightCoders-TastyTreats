import{T as y,l as m,s as c}from"./dark-theme-e716946f.js";const e={favoriteCategoriesList:document.querySelector(".favorite-categories-btn"),favoriteRecipesList:document.querySelector(".favorites-list"),favoritesDefault:document.querySelector(".favorites-default"),allBtn:document.querySelector(".all-btn"),gallery:document.querySelector(".favorites-card-list"),galleryCard:document.querySelector(".cards-container"),recipeModal:document.querySelector(".modal-recipes-container"),overlay:document.querySelector(".overlay"),closeBtn:document.querySelector(".modal-close-btn")},p=new y;let d="";function L(){const t=$(),s='<button class="button-fav all-btn" name="all">All categories</button>',a=JSON.parse(localStorage.getItem("favorites"))||[];e.favoriteCategoriesList.innerHTML="",e.favoriteRecipesList.innerHTML="",a.length?e.favoriteCategoriesList.innerHTML=`${s}${t}`:e.allBtn.style.display="none",f()}function f(){const t=localStorage.getItem("favorites"),s=JSON.parse(t)||[];if(e.allBtn.style.display="none",s.length){e.allBtn.style.display="block";let a;d===""?a=s:a=s.filter(i=>i.category===d),e.favoriteRecipesList.innerHTML=M(a),document.querySelectorAll(".like-button").forEach(i=>{i.onclick=()=>B(i)}),document.querySelectorAll(".card-footer-btn").forEach(i=>{i.onclick=()=>h(i)}),e.favoritesDefault.classList.add("is-hidden-favorites")}else e.favoritesDefault.classList.remove("is-hidden-favorites"),e.allBtn.classList.add("is-hidden-favorites");s.length===0?(e.favoritesDefault.classList.remove("is-hidden-favorites"),e.favoriteCategoriesList.innerHTML="",e.allBtn.style.display="none"):e.favoritesDefault.classList.add("is-hidden-favorites")}async function h(t){const s=t.dataset.id,a=await p.fetchOneRecipe(s);m(a.data),e.recipeModal.classList.add("active"),e.overlay.classList.add("active"),document.body.style.overflow="hidden"}e.closeBtn.addEventListener("click",S);function S(){e.recipeModal.classList.remove("active"),e.overlay.classList.remove("active"),document.body.style.overflow="auto"}function $(){const t=localStorage.getItem("favorites"),s=JSON.parse(t)||[];return s.length?s.flatMap(a=>a.category).filter((a,r,o)=>o.indexOf(a)===r).reduce((a,r)=>a+b(r),""):""}const b=t=>`<button class="button-fav">${t}</button>`;function C(t){t.target.nodeName==="BUTTON"&&(t.target.name==="all"?(d="",v(t.target)):(d=t.target.textContent,v(t.target)),f())}function v(t){document.querySelectorAll(".button-fav").forEach(a=>{a===t?a.classList.add("onActive"):a.classList.remove("onActive")})}document.addEventListener("DOMContentLoaded",L);e.favoriteCategoriesList.addEventListener("click",C);function B(t){console.log(t),console.log(t.id);const s=t.id;console.log(t);const a=localStorage.getItem("favorites");let r=JSON.parse(a)||[];const o=r.findIndex(n=>n.id===s);if(o!==-1){const n=r[o].category;r.splice(o,1),localStorage.setItem("favorites",JSON.stringify(r)),(JSON.parse(localStorage.getItem("favorites"))||[]).some(u=>u.category===n)||(document.querySelectorAll(".item").forEach(l=>{l.dataset.category===n&&l.remove()}),e.favoriteCategoriesList.querySelectorAll(".button-fav").forEach(l=>{l.textContent===n&&l.remove()}))}(JSON.parse(localStorage.getItem("favorites"))||[]).length===0?(e.favoriteRecipesList.innerHTML="",e.allBtn.style.display="none",e.favoritesDefault.classList.remove("is-hidden-favorites"),e.favoriteCategoriesList.innerHTML=""):f()}function M(t){return t.map(({title:s,description:a,preview:r,rating:o,id:i,category:n,area:g})=>`<li
      class="card-container" id='${i}' data-category='${n}' data-area='${g}' data-title='${s}' data-description="${a}" data-preview="${r}" data-rating="${o}"
      style="background-image: linear-gradient(1deg,rgba(5, 5, 5, 0.6),rgba(5, 5, 5, 0)),
      url(${r});">
      <button class="like-button" id='${i}'>
        <svg class="like-icon like-favorite" width="22" height="22">
          <use href="${c}#heart"></use>
        </svg>
        </button>
      <div class="card-info">
        <h3 class="card-header">${s}</h3>
        <p class="card-description">
          ${a}
        </p>
        <div class="card-footer">
          <div class="card-rate">
            <span class="card-rate-value">${Number(o).toFixed(1)}</span>
            <div class="card-rate-stars">
              <svg class=${Number(o).toFixed(1)>=1?"star-icon-orange":"star-icon-grey"}>
                <use href="${c}#star"></use>
              </svg>
              <svg class=${Number(o).toFixed(1)>=2?"star-icon-orange":"star-icon-grey"}>
                <use href="${c}#star"></use>
              </svg>
              <svg class=${Number(o).toFixed(1)>=3?"star-icon-orange":"star-icon-grey"}>
                <use href="${c}#star"></use>
              </svg>
              <svg class=${Number(o).toFixed(1)>=4?"star-icon-orange":"star-icon-grey"}>
                <use href="${c}#star"></use>
              </svg>
              <svg class=${Number(o).toFixed(1)>=5?"star-icon-orange":"star-icon-grey"}>
                <use href="${c}#star"></use>
              </svg>
            </div>
          </div>
          <button class="card-footer-btn js-open-modal" data-id="${i}" data-modal="2">See recipe</button>
        </div>
      </div>
    </li>`).join("")}
