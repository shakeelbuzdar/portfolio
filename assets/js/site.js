(function(){
const C=window.SITE,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const P={pin:'<path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',map:'<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',page:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>',link:'<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',chart:'<path d="M4 20V4M4 20h16"/><path d="M8 15l4-4 3 3 5-6"/>',clip:'<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v3H9zM9 12l2 2 4-4"/>'};
const ico=n=>`<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const here=location.pathname.split("/").pop()||"index.html";
const NAV=[["Home","index.html"],["About","about.html"],["Services","services.html"],["Case Studies","portfolio.html"],["Process","process.html"],["Contact","contact.html"]];
const CTA_TEXT="Get a Free SEO Consultation";

/* header */
$("#site-header").outerHTML=`<header class="site-header"><div class="wrap"><a class="logo" href="index.html"><span></span>${esc(C.name)}</a>
<button class="burger" aria-expanded="false" aria-controls="nav">Menu</button>
<nav class="nav" id="nav" aria-label="Main">${NAV.map(([t,h])=>`<a href="${h}"${h===here?' aria-current="page"':''}>${t}</a>`).join("")}<button class="btn" data-open-form>${CTA_TEXT}</button></nav></div></header>`;
const burger=$(".burger");burger.onclick=()=>{const o=$("#nav").classList.toggle("open");burger.setAttribute("aria-expanded",o)};

/* footer */
const ic=d=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const IC={mail:ic('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>'),
 in:ic('<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'),
 wa:ic('<path d="M21 11.5a8.4 8.4 0 01-12.4 7.4L3 21l1.9-5.5A8.5 8.5 0 1121 11.5z"/><path d="M9 8.5c0 3.3 2.7 6 6 6l1-1.3-1.8-.9-.9.7a4 4 0 01-1.8-1.8l.7-.9-.9-1.8z"/>'),
 fb:ic('<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>'),
 ig:ic('<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>')};
const wa=String(C.whatsapp||"").replace(/\D/g,"");
const SOC=[["Email",C.email&&!/your-email/.test(C.email)?"mailto:"+C.email:"",IC.mail],["LinkedIn",C.linkedin,IC.in],["WhatsApp",wa?"https://wa.me/"+wa+"?text="+encodeURIComponent("Hello Muhammad, I found your website and would like to discuss SEO."):"",IC.wa],["Facebook",C.facebook,IC.fb],["Instagram",C.instagram,IC.ig]].filter(x=>x[1]);
const social=SOC.map(([t,u,i])=>`<a href="${esc(u)}" aria-label="${t}" title="${t}"${u.startsWith("mailto")?"":' target="_blank" rel="noopener"'}>${i}</a>`).join("");
$("#site-footer").outerHTML=`<footer class="site-footer"><div class="wrap"><div class="fgrid">
<div class="fbrand"><strong>${esc(C.name)}</strong><p>${esc(C.title)}</p><p class="fnote">Helping businesses grow through SEO, Google Maps and local search visibility.</p><div class="social">${social}</div></div>
<nav aria-label="Footer quick links"><h4>Quick Links</h4><ul>${NAV.map(([t,h])=>`<li><a href="${h}">${t}</a></li>`).join("")}</ul></nav>
<nav aria-label="Footer services"><h4>Services</h4><ul>${SERVICES.map(s=>`<li><a href="services.html#${s.id}">${esc(s.select)}</a></li>`).join("")}</ul></nav>
<div><h4>Let's Work Together</h4><p>Have a project in mind? Tell me about your goals and I'll get back to you.</p><button class="btn" data-open-form>${CTA_TEXT}</button>${C.fiverr?`<p style="margin-top:14px"><a href="${esc(C.fiverr)}" target="_blank" rel="noopener">View my Fiverr profile</a></p>`:""}</div>
</div><div class="fbar"><span>© ${new Date().getFullYear()} ${esc(C.name)}. All rights reserved.</span><span><a href="faq.html">FAQ</a><a href="privacy.html">Privacy Policy</a></span></div></div></footer>`;

/* CTA band */
$$("[data-cta]").forEach(e=>e.outerHTML=`<section class="cta"><div class="wrap"><h2>Ready to Improve Your Online Visibility?</h2><p>Whether you need better Google Maps visibility, stronger organic search performance, or a clearer SEO strategy, let's discuss the right next steps for your business.</p><div class="btns"><button class="btn" data-open-form>${CTA_TEXT}</button><a class="btn ghost" href="services.html">View My Services</a></div></div></section>`);

/* form */
const opts=(a,ph)=>`<option value="">${ph}</option>`+a.map(o=>`<option>${esc(o)}</option>`).join("");
const formHTML=id=>`<form class="form" id="${id}" novalidate>
<div><label for="${id}-n">Full Name </label><input id="${id}-n" name="name"</div></div>
<div><label for="${id}-e">Business Email *</label><input id="${id}-e" name="email" type="email" required autocomplete="email"><div class="err"></div></div>
<div><label for="${id}-w">Website URL *</label><input id="${id}-w" name="website" type="url" placeholder="https://example.com" required><div class="err"></div></div>
<div><label for="${id}-s">Service Required *</label><select id="${id}-s" name="service" required>${opts(C.serviceOptions,"Select a service")}</select><div class="err"></div></div>
<div class="full"><label for="${id}-m">Message / Project Details</label><textarea id="${id}-m" name="message" rows="3"></textarea></div>
<div class="hp" aria-hidden="true"><input name="_gotcha" tabindex="-1" autocomplete="off"><input type="hidden" name="_subject" value="New SEO inquiry from website"><input type="hidden" name="submitted_on" value=""></div>
<p class="full muted" style="margin:0;font-size:.9rem">By sending this inquiry you agree to the <a href="privacy.html" target="_blank">Privacy Policy</a>.</p>
<div class="full" role="alert" aria-live="polite" id="${id}-st"></div>
<div class="full"><button class="btn" type="submit">Send My Project Inquiry</button></div></form>`;
const intro=`<h2 id="fh">Let's Talk About Your SEO Goals</h2>`;const wire=f=>{
 f.addEventListener("submit",async ev=>{ev.preventDefault();let bad=false;
  $$("input,select,textarea",f).forEach(c=>{const er=c.closest("div").querySelector(".err");if(!er)return;let m="";
   if(c.validity.valueMissing)m="This field is required.";else if(c.validity.typeMismatch)m=c.type==="email"?"Enter a valid email address.":"Enter a full URL starting with https://";
   c.setAttribute("aria-invalid",!!m);er.textContent=m;if(m&&!bad){bad=true;c.focus()}});
  if(bad)return;
  const st=$("#"+f.id+"-st"),btn=$("button[type=submit]",f);st.className="full";st.textContent="";
  if(C.formEndpoint.includes("YOUR_FORM_ID")){st.className="full status";st.textContent="The form is not connected yet. Add your Formspree endpoint in assets/js/config.js.";return}
  f.elements.submitted_on.value=new Date().toLocaleString("en-GB",{dateStyle:"full",timeStyle:"short"});
  btn.disabled=true;btn.textContent="Sending…";
  const ac=new AbortController(),tm=setTimeout(()=>ac.abort(),20000);
  try{const r=await fetch(C.formEndpoint,{method:"POST",body:new FormData(f),headers:{Accept:"application/json"},signal:ac.signal});clearTimeout(tm);
   if(!r.ok){const j=await r.json().catch(()=>({}));throw new Error((j.errors&&j.errors.map(x=>x.message).join(", "))||j.error||("Error "+r.status))}
      const hold=f.closest("#inline-form");if(hold)hold.style.minHeight=hold.offsetHeight+"px";
   f.outerHTML=`<div class="ok" role="status" tabindex="-1"><h3>Thank you for reaching out!</h3><p>Your inquiry has been submitted successfully. I'll review your project details and respond using the email address you provided.</p></div>`;
   const okEl=$(".ok");if(okEl){okEl.scrollIntoView({block:"center"});okEl.focus({preventScroll:true})}
  }catch(e){const why=e&&e.name==="AbortError"?"no reply from server in 20 seconds - your message may still have arrived, please check your email":((e&&e.message)||"network error");st.className="full status";st.textContent="Your inquiry could not be sent ("+why+"). Please try again, or email "+C.email+" directly.";btn.disabled=false;btn.textContent="Send My Project Inquiry"}
 });};
const inline=$("#inline-form");
if(inline){inline.innerHTML=intro+formHTML("f1");wire($("#f1"))}
const dlg=document.createElement("dialog");dlg.setAttribute("aria-labelledby","fh");dlg.innerHTML=`<button class="x" aria-label="Close" type="button">×</button>`+(inline?"":intro+formHTML("f2"));document.body.append(dlg);
if(!inline)wire($("#f2"));
$(".x",dlg).onclick=()=>dlg.close();dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
document.addEventListener("click",e=>{const b=e.target.closest("[data-open-form]");if(!b)return;
 const sel=$(inline?"#f1-s":"#f2-s");if(sel&&b.dataset.service)sel.value=b.dataset.service;
 if(inline){$("#inline-form").scrollIntoView();$("#f1-n").focus()}else dlg.showModal()});

/* renderers */
const svc=$$("[data-services]");
svc.forEach(el=>{const full=el.dataset.services==="full";el.innerHTML=SERVICES.map(s=>full?
`<article class="service" id="${s.id}"><div>${ico(s.icon)}<h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p><button class="btn" data-open-form data-service="${esc(s.select)}">${esc(s.cta)}</button></div>
<div><ul class="checks">${s.items.map(i=>`<li>${esc(i)}</li>`).join("")}</ul>${s.note?`<p class="note">${esc(s.note)}</p>`:""}</div></article>`:
`<article class="card">${ico(s.icon)}<h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p><a href="services.html#${s.id}">See what's included</a></article>`).join("")});
$$("[data-expertise]").forEach(el=>el.innerHTML=EXPERTISE.map(([i,t,d],n)=>`<a class="card xcard" href="services.html#${SERVICES[n]?SERVICES[n].id:""}">${ico(i)}<h3>${t}</h3><p>${d}</p><span class="more">Learn more <b>→</b></span></a>`).join("")+`<button class="card xcard xcta" data-open-form type="button"><h3>Not sure what you need?</h3><p>Tell me about your website and I'll suggest the right starting point.</p><span class="more">Get a free consultation <b>→</b></span></button>`);
$$("[data-faq]").forEach(el=>{const n=+el.dataset.faq||FAQ.length;el.innerHTML=FAQ.slice(0,n).map(([q,a])=>`<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")});
const CATSVC={"Local SEO":"Local SEO & Google Maps","Google Business Profile":"Google Business Profile Optimization","On-Page SEO":"On-Page SEO","Technical SEO":"Technical SEO","Link Building":"Off-Page SEO & Link Building","Google Search Console":"Google Search Console Analysis","Google Merchant Center":"Other"};
const slug=(p,i)=>p.slug||("project-"+i);
const shot=p=>p.image?`<img src="${esc(p.image)}" alt="${esc(p.title)} screenshot" loading="lazy">`:`<div class="ph">Screenshot placeholder — add a real image</div>`;
const arrow='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
$$("[data-portfolio]").forEach(el=>{
 const f=$("#filters");f.innerHTML=["All",...PROJECT_CATS].map((c,i)=>`<button aria-pressed="${i===0}" data-c="${c}">${c}</button>`).join("");
 const draw=c=>{el.innerHTML=PROJECTS.map((p,i)=>[p,i]).filter(([p])=>c==="All"||p.cat===c).map(([p,i])=>`<a class="card case" href="case.html?p=${encodeURIComponent(slug(p,i))}"><span class="tag">${esc(p.cat)}</span><h3>${esc(p.title)}</h3>${shot(p)}${p.highlight?`<span class="hl">${esc(p.highlight)}</span>`:""}<p class="obj">${esc(p.objective)}</p><span class="more">Read full case study ${arrow}</span></a>`).join("")||"<p>No projects in this category yet.</p>"};
 f.onclick=e=>{const b=e.target.closest("button");if(!b)return;$$("button",f).forEach(x=>x.setAttribute("aria-pressed",x===b));draw(b.dataset.c);reveal()};draw("All")});
$$("[data-case]").forEach(el=>{
 const id=new URLSearchParams(location.search).get("p"),i=PROJECTS.findIndex((p,k)=>slug(p,k)===id);
 if(i<0){el.innerHTML='<h1>Case study not found</h1><p><a class="btn" href="portfolio.html">Back to case studies</a></p>';return}
 const p=PROJECTS[i];document.title=p.title+" | "+C.name;
 el.innerHTML=`<a class="back" href="portfolio.html">← Back to case studies</a><span class="tag">${esc(p.cat)}</span><h1>${esc(p.title)}</h1>${shot(p)}
 <div class="facts"><div><b>Industry</b>${esc(p.industry)}</div><div><b>Period</b>${esc(p.period)}</div><div><b>Tools</b>${esc(p.tools)}</div></div>
 ${[["Objective",p.objective],["Challenge",p.challenge],["Strategy",p.strategy],["Work done",p.work]].map(([k,v])=>`<div class="block"><h3>${k}</h3><p>${esc(v)}</p></div>`).join("")}
 <div class="block"><h3>Results</h3><div class="result"><div class="card"><b>Before</b><p>${esc(p.before)}</p></div><div class="card"><b>After</b><p>${esc(p.after)}</p></div></div></div>
 <p style="margin-top:26px"><button class="btn" data-open-form data-service="${esc(CATSVC[p.cat]||"Other")}">Discuss a Similar Project</button></p>`});

/* scroll progress bar + reveal animations */
const bar=document.createElement("div");bar.className="progress";bar.setAttribute("aria-hidden","true");document.body.prepend(bar);
const prog=()=>{const h=document.documentElement.scrollHeight-innerHeight;bar.style.transform="scaleX("+(h>0?Math.min(1,Math.max(0,scrollY/h)):0)+")"};
addEventListener("scroll",prog,{passive:true});addEventListener("resize",prog);addEventListener("load",prog);new ResizeObserver(prog).observe(document.body);prog();
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const SEL="main h1,main h2,main .lead,main .btns,main .hero-art,main .card:not(.result .card),main .service,main .steps li,main details,main .block,main .facts,main .filters,main .two>img,main .case-page>*,main .cta p,.site-footer .fgrid>*";
let io;
function reveal(){if(reduce)return;
 io=io||new IntersectionObserver(es=>{let n=0;es.forEach(en=>{if(!en.isIntersecting)return;const el=en.target;io.unobserve(el);el.style.animationDelay=(n++*90)+"ms";el.classList.add("in");el.addEventListener("animationend",()=>{el.classList.remove("rv","in");el.style.animationDelay=""},{once:true})})},{threshold:.1,rootMargin:"0px 0px -5% 0px"});
 $$(SEL).forEach(el=>{if(el.dataset.rv)return;el.dataset.rv=1;el.classList.add("rv");io.observe(el)})}
reveal();

/* analytics */
if(C.ga4Id){const s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+C.ga4Id;document.head.append(s);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",C.ga4Id)}
})();