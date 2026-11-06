const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
function closeNav(restore=false){nav?.classList.remove('is-open');toggle?.setAttribute('aria-expanded','false');if(toggle)toggle.textContent='Menu';if(restore)toggle?.focus();}
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Close':'Menu';nav.classList.toggle('is-open',open);});
nav?.addEventListener('click',e=>{if(e.target.closest('a'))closeNav();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('is-open'))closeNav(true);});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeNav();});
matchMedia('(min-width:901px)').addEventListener('change',e=>{if(e.matches)closeNav();});
const dialog=document.querySelector('.lightbox');
const items=[...document.querySelectorAll('.gallery-item')];
let current=0,opener=null;
function showPhoto(index){current=(index+items.length)%items.length;const item=items[current];dialog.querySelector('img').src=item.dataset.full;dialog.querySelector('img').alt=item.dataset.caption;dialog.querySelector('.lightbox-caption').textContent=item.dataset.caption;dialog.querySelector('.lightbox-count').textContent=`${current+1} of ${items.length}`;}
items.forEach((item,index)=>item.addEventListener('click',()=>{opener=item;showPhoto(index);dialog.showModal();document.body.style.overflow='hidden';dialog.querySelector('[data-close]').focus();}));
dialog?.querySelector('[data-close]').addEventListener('click',()=>dialog.close());
dialog?.querySelector('[data-prev]').addEventListener('click',()=>showPhoto(current-1));
dialog?.querySelector('[data-next]').addEventListener('click',()=>showPhoto(current+1));
dialog?.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();showPhoto(current+1);}if(e.key==='ArrowLeft'){e.preventDefault();showPhoto(current-1);}});
dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog?.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus();});
