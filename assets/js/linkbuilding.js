(function(){
const el=document.getElementById("lb");if(!el||!window.LB)return;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const list=document.getElementById("lb-list"),box=document.getElementById("lb-detail");
list.innerHTML=LB.map(p=>`<button class="lb-card" data-s="${p.slug}" aria-pressed="false"><strong>${esc(p.domain)}</strong><span>${esc(p.country)}</span><small>DR ${p.stats[0]} · ${p.stats[1]} backlinks · ${p.stats[2]} sites</small></button>`).join("");
function show(s,scroll){
 const p=LB.find(x=>x.slug===s)||LB[0];
 list.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.s===p.slug));
 box.innerHTML=`<span class="tag">Link Building</span><h2>${esc(p.domain)}</h2>
 <img src="${p.img||'assets/img/lb-'+p.slug+'.png'}" alt="${esc(p.alt||'Ahrefs backlink profile for '+p.domain)}" loading="lazy">
 <dl>${[["Country",p.country],["Industry",p.industry],["Objective",p.objective],["Strategy",p.strategy],["Work done",p.work],["Before",p.before],["After",p.after],["Period",p.period],["Tools","Ahrefs"]].map(([k,v])=>`<dt>${k}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
 <p><button class="btn" data-open-form data-service="Off-Page SEO & Link Building">Discuss a Similar Project</button></p>`;
 history.replaceState(null,"","#"+p.slug);
 if(scroll&&innerWidth<=860)box.scrollIntoView({behavior:"smooth",block:"start"});
}
list.onclick=e=>{const b=e.target.closest("button");if(b)show(b.dataset.s,true)};
show(location.hash.slice(1),false);
})();