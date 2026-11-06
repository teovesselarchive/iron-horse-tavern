// Every dish remains readable without JavaScript. Enhancement adds a photographic preview.
const dishImage=document.querySelector('.active-dish');
const dishFigure=document.querySelector('.dish-photo');
const mobileMenu=matchMedia('(max-width:650px)');
function placeDish(button){if(!dishFigure)return;if(mobileMenu.matches)button.insertAdjacentElement('afterend',dishFigure);else document.querySelector('.menu-stage').prepend(dishFigure);}
const dishChoices=[...document.querySelectorAll('[data-dish]')];
function selectDish(button){
  if(!dishImage)return;
  placeDish(button);
  const stem=button.dataset.dish;
  const widths=stem==='pretzel'?[600,1024]:[600,1100,1800];
  dishImage.srcset=widths.map(w=>`assets/${stem}-${w}.webp ${w}w`).join(', ');
  dishImage.src=`assets/${stem}-${widths.at(-1)}.webp`;
  dishImage.alt=button.dataset.alt;
  document.querySelector('[data-dish-caption]').textContent=button.dataset.alt;
  dishChoices.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
}
dishChoices.forEach(button=>{
  button.addEventListener('click',()=>selectDish(button));
  button.addEventListener('focus',()=>selectDish(button));
  button.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')selectDish(button)});
});
if(dishChoices.length){placeDish(dishChoices[0]);mobileMenu.addEventListener('change',()=>placeDish(dishChoices.find(b=>b.getAttribute('aria-pressed')==='true')||dishChoices[0]));}
const branchButtons=[...document.querySelectorAll('[data-branch]')];
function chooseBranch(index){
  branchButtons.forEach(b=>{const active=b.dataset.branch===String(index);b.setAttribute('aria-pressed',String(active));document.getElementById(b.getAttribute('aria-controls')).hidden=!active;});
}
branchButtons.forEach(button=>button.addEventListener('click',()=>chooseBranch(button.dataset.branch)));
if(branchButtons.length)chooseBranch(0);
document.querySelectorAll('[data-map-address]').forEach(button=>button.addEventListener('click',()=>{
  const panel=button.closest('.map-panel');if(panel.querySelector('iframe'))return;
  const iframe=document.createElement('iframe');iframe.title='Map for '+button.dataset.mapName;
  const url=new URL('https://www.google.com/maps');url.searchParams.set('q',button.dataset.mapAddress);url.searchParams.set('output','embed');
  iframe.src=url.href;iframe.loading='lazy';iframe.referrerPolicy='no-referrer-when-downgrade';iframe.tabIndex=0;
  panel.append(iframe);panel.classList.add('map-loaded');iframe.focus();
}));
