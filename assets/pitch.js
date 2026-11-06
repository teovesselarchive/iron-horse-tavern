const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('[data-map-address]').forEach(button=>button.addEventListener('click',()=>{
  const panel=button.closest('.map-panel');
  if(panel.querySelector('iframe'))return;
  const frame=document.createElement('iframe');
  frame.title='Map for '+button.dataset.mapName;
  const address=new URL('https://www.google.com/maps');
  address.searchParams.set('q',button.dataset.mapAddress);address.searchParams.set('output','embed');
  frame.src=address.href;frame.loading='lazy';frame.referrerPolicy='no-referrer-when-downgrade';
  panel.append(frame);panel.classList.add('map-loaded');frame.setAttribute('tabindex','0');frame.focus();
}));
document.querySelectorAll('.tape-pause').forEach(button=>button.addEventListener('click',()=>{
 const paused=button.getAttribute('aria-pressed')!=='true';button.setAttribute('aria-pressed',String(paused));
 button.textContent=paused?'Resume text':'Pause text';button.closest('.tape').classList.toggle('motion-paused',paused);
}));
const parallaxImages=[...document.querySelectorAll('[data-parallax]')];let scheduled=false;
function updateParallax(){scheduled=false;if(reducedMotion.matches)return;parallaxImages.forEach(frame=>{const r=frame.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight){const amount=Math.max(-14,Math.min(14,(r.top+r.height/2-innerHeight/2)*-.035));frame.querySelector('img').style.transform=`translateY(${amount}px)`;}});}
if(parallaxImages.length){addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateParallax);}},{passive:true});updateParallax();}
reducedMotion.addEventListener('change',()=>{if(reducedMotion.matches){parallaxImages.forEach(el=>el.querySelector('img').style.transform='none');}});
