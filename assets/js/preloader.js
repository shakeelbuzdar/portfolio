/* Loading screen 0% -> 100%. Sirf HOME page (index) par, aur ek session me sirf pehli baar. Test: URL ke aakhir me ?preload lagao */
(function(){
var seg=location.pathname.split("/").pop();
if(seg!==""&&seg!=="index.html"&&seg!=="index")return;
var force=/[?&]preload/.test(location.search);
try{if(!force&&sessionStorage.getItem("pl_done"))return}catch(e){}
var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
var MIN=reduce?500:1900,loaded=false,v=0,start=Date.now(),de=document.documentElement;
var st=document.createElement("style");
st.textContent='#pl{position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;background:radial-gradient(circle at 50% 38%,#2b2d0f 0%,#171717 62%);color:#F5F5F2;font-family:"Instrument Sans",system-ui,sans-serif;transition:transform .85s cubic-bezier(.77,0,.18,1),opacity .6s}'
+'#pl.out{transform:translateY(-100%);opacity:.6}'
+'#pl .pl-name{display:flex;align-items:center;gap:10px;font:700 1.15rem "Bricolage Grotesque",system-ui,sans-serif;letter-spacing:.02em}'
+'#pl .pl-dot{width:12px;height:12px;border-radius:50%;background:#A7A922;animation:plDot 1.6s ease-out infinite}'
+'#pl .pl-num{font:700 clamp(64px,16vw,128px)/1 "Bricolage Grotesque",system-ui,sans-serif;font-variant-numeric:tabular-nums;color:#fff;text-shadow:0 0 40px rgba(167,169,34,.45)}'
+'#pl .pl-bar{width:min(340px,72vw);height:6px;border-radius:99px;background:rgba(255,255,255,.12);overflow:hidden;box-shadow:inset 0 1px 2px rgba(0,0,0,.4)}'
+'#pl .pl-fill{height:100%;width:0;border-radius:99px;background:linear-gradient(90deg,#454719,#A7A922,#e3e55a);box-shadow:0 0 18px rgba(167,169,34,.8)}'
+'#pl .pl-sub{font-size:.85rem;letter-spacing:.14em;text-transform:uppercase;color:#bdbdb4;text-align:center;padding:0 20px}'
+'@keyframes plDot{0%{box-shadow:0 0 0 0 rgba(167,169,34,.7)}70%,100%{box-shadow:0 0 0 14px rgba(167,169,34,0)}}';
(document.head||de).appendChild(st);
var el=document.createElement("div");el.id="pl";el.setAttribute("role","status");el.setAttribute("aria-label","Loading");
el.innerHTML='<div class="pl-name"><span class="pl-dot"></span>Muhammad Shakeel</div><div class="pl-num">0%</div><div class="pl-bar"><div class="pl-fill"></div></div><div class="pl-sub">SEO &amp; Google Business Profile Expert</div>';
de.appendChild(el);de.style.overflow="hidden";
var num=el.querySelector(".pl-num"),fill=el.querySelector(".pl-fill");
function done(){
 try{sessionStorage.setItem("pl_done","1")}catch(e){}
 setTimeout(function(){el.classList.add("out");setTimeout(function(){el.remove();de.style.overflow=""},reduce?100:900)},reduce?50:350);
}
function tick(){
 var t=Date.now()-start,target=(loaded&&t>=MIN)?100:Math.min(92,t/MIN*92);
 v=Math.min(target,v+Math.max(.35,(target-v)*.09));
 num.textContent=Math.round(v)+"%";fill.style.width=v+"%";
 if(v>=99.9){num.textContent="100%";fill.style.width="100%";done();return}
 requestAnimationFrame(tick);
}
if(document.readyState==="complete")loaded=true;else addEventListener("load",function(){loaded=true});
setTimeout(function(){loaded=true},5000);
requestAnimationFrame(tick);
})();