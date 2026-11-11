/* Blurred proof images -> click opens popup (same page), close with X / outside / Esc */
(function(){
var box=document.createElement("div");box.className="zoombox";box.hidden=true;
box.innerHTML='<button type="button" class="zoom-close" aria-label="Close">&times;</button><img alt=""><p>Tap outside or press Esc to close</p>';
document.body.appendChild(box);
var img=box.querySelector("img"),x=box.querySelector(".zoom-close"),last;
function open(el){last=el;img.src=el.dataset.full;img.alt=el.dataset.alt||"";box.hidden=false;document.body.style.overflow="hidden";requestAnimationFrame(function(){box.classList.add("show");x.focus()})}
function close(){box.classList.remove("show");document.body.style.overflow="";setTimeout(function(){box.hidden=true;img.src=""},250);if(last)last.focus()}
document.addEventListener("click",function(e){var p=e.target.closest(".proof");if(p){e.preventDefault();open(p);return}
 if(!box.hidden&&(e.target===box||e.target===x))close()});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!box.hidden)close()});
})();
