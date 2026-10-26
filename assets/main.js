(function(){
  var d=document,root=d.documentElement;
  var btn=d.querySelector('.hamburger'),drawer=d.getElementById('mob-drawer'),overlay=d.querySelector('.mob-overlay');
  if(!btn||!drawer||!overlay){return;}
  var closeBtn=drawer.querySelector('.mob-close');
  function setOpen(open){
    drawer.classList.toggle('is-open',open);
    overlay.classList.toggle('is-open',open);
    root.classList.toggle('js-lock',open);
    btn.setAttribute('aria-expanded',open?'true':'false');
    drawer.setAttribute('aria-hidden',open?'false':'true');
    if(open&&closeBtn){closeBtn.focus();}else if(!open){btn.focus({preventScroll:true});}
  }
  btn.addEventListener('click',function(){setOpen(!drawer.classList.contains('is-open'));});
  overlay.addEventListener('click',function(){setOpen(false);});
  if(closeBtn){closeBtn.addEventListener('click',function(){setOpen(false);});}
  drawer.addEventListener('click',function(e){var a=e.target.closest('a');if(a){setOpen(false);}});
  d.addEventListener('keydown',function(e){if(e.key==='Escape'&&drawer.classList.contains('is-open')){setOpen(false);}});
  window.addEventListener('resize',function(){if(window.innerWidth>900&&drawer.classList.contains('is-open')){setOpen(false);}});
})();
