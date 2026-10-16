document.documentElement.classList.add('js');
const toggle=document.getElementById('menu-toggle');
const links=document.getElementById('nav-links');
toggle.hidden=false;
function closeMenu(){links.classList.remove('open');toggle.setAttribute('aria-expanded','false');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));links.classList.toggle('open',open);});
links.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('nav'))closeMenu();});
window.matchMedia('(min-width: 851px)').addEventListener('change',closeMenu);
