// Add or change artists here. Put photos in /assets and set img to e.g. "assets/artist-3.jpg".
var artists=[
  {name:"",img:"assets/artist-1.jpg",tone:"#2c2f33"},
  {name:"",img:"assets/artist-2.jpg",tone:"#2c2f33"}
];
function sil(i){var s=i%2,id="g"+i;
return '<svg class="wall" aria-hidden="true"><filter id="n'+i+'"><feTurbulence type="fractalNoise" baseFrequency=".6" numOctaves="3" seed="'+(i+2)+'"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#n'+i+')" opacity=".55"/></svg>'
+'<svg viewBox="0 0 400 500" aria-hidden="true"><defs><linearGradient id="'+id+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d2d2d2"/><stop offset="1" stop-color="#7d7d7f"/></linearGradient></defs>'
+'<path d="M0 500C0 400 60 340 140 320L260 320C340 340 400 400 400 500Z" fill="#1c1d1f"/>'
+'<path d="M170 262h60v70q-30 26-60 0z" fill="#8c8c8e"/>'
+'<path d="M140 320L200 455L110 500L50 420Z M260 320L200 455L290 500L350 420Z" fill="#2b2c2f"/>'
+'<path d="M147 330Q200 425 253 330" fill="none" stroke="#e4e4e4" stroke-width="7" stroke-linecap="round" stroke-dasharray="1 9"/>'
+'<ellipse cx="129" cy="196" rx="10" ry="18" fill="#9a9a9c"/><ellipse cx="271" cy="196" rx="10" ry="18" fill="#9a9a9c"/>'
+'<ellipse cx="200" cy="190" rx="70" ry="88" fill="url(#'+id+')"/>'
+(s?'<path d="M127 175Q122 86 200 84Q278 86 273 175Q250 122 200 126Q150 122 127 175Z" fill="#141414"/>':'<g fill="#121212"><circle cx="140" cy="130" r="30"/><circle cx="175" cy="105" r="32"/><circle cx="215" cy="100" r="34"/><circle cx="255" cy="120" r="32"/><circle cx="268" cy="155" r="20"/><circle cx="132" cy="160" r="20"/></g>')
+'<path d="M132 205Q140 290 200 294Q260 290 268 205Q256 238 200 238Q144 238 132 205Z" fill="#141414" opacity="'+(s?'.3':'1')+'"/>'
+'<g fill="none" stroke-linecap="round"><path d="M160 172q20-10 38-2M202 170q20-8 38 2" stroke="#141414" stroke-width="6"/><path d="M165 190q15-8 30 0M205 190q15-8 30 0" stroke="#222" stroke-width="4"/><path d="M201 198q-8 30-4 40q8 6 16 0" stroke="#555" stroke-width="3"/><path d="M178 258q22 9 44 0" stroke="'+(s?'#2a2a2a':'#777')+'" stroke-width="4"/></g>'
+'<circle cx="300" cy="400" r="20" fill="#ddd"/><circle cx="300" cy="400" r="8" fill="#888"/></svg>';}
var box=document.getElementById("slides"),nameEl=document.getElementById("name"),cur=0,timer;
artists.forEach(function(a,i){
  var s=document.createElement("div");s.className="slide";
  var bg=a.img?'background-image:url('+a.img+')':'background:radial-gradient(ellipse at 50% 35%,'+a.tone+',#0c0d0e 75%)';
  s.innerHTML='<div class="photo" style="'+bg+'"></div>'+(a.img?'':sil(i));
  box.appendChild(s);
});
function show(i){
  cur=(i+artists.length)%artists.length;
  var all=box.children;
  for(var k=0;k<all.length;k++)all[k].classList.toggle("on",k===cur);
  nameEl.textContent=artists[cur].name;
}
function auto(){clearInterval(timer);timer=setInterval(function(){show(cur+1)},7000)}
document.getElementById("next").onclick=function(){show(cur+1);auto()};
document.getElementById("prev").onclick=function(){show(cur-1);auto()};
document.addEventListener("keydown",function(e){
  if(e.key==="ArrowRight"){show(cur+1);auto()}
  if(e.key==="ArrowLeft"){show(cur-1);auto()}
  if(e.key==="Escape")closeAll();
});
var menu=document.getElementById("menu"),news=document.getElementById("news");
function closeAll(){menu.classList.remove("open");news.classList.remove("open")}
document.getElementById("menuBtn").onclick=function(){closeAll();menu.classList.add("open")};
document.getElementById("newsBtn").onclick=function(){closeAll();news.classList.add("open")};
document.querySelectorAll("[data-close]").forEach(function(b){b.addEventListener("click",function(e){if(b.getAttribute("href")==="#")e.preventDefault();closeAll()})});
show(0);auto();
