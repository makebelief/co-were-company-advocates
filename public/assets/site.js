/* C.O. Were & Company Advocates: lightweight browser behaviour (no third-party libraries). */
(()=>{
 const body=document.body;
 const toggle=document.querySelector('[data-mobile-open]');
 const close=document.querySelector('[data-mobile-close]');
 const menu=document.querySelector('#mobile-panel');
 const backdrop=document.querySelector('#mobile-backdrop');
 const setMenu=(open)=>{if(!menu)return;menu.classList.toggle('open',open);backdrop?.classList.toggle('visible',open);body.classList.toggle('nav-open',open);toggle?.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-hidden',String(!open));if(open)close?.focus();else toggle?.focus()};
 toggle?.addEventListener('click',()=>setMenu(true));close?.addEventListener('click',()=>setMenu(false));backdrop?.addEventListener('click',()=>setMenu(false));menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.classList.contains('open'))setMenu(false)});
 const form=document.getElementById('enquiry-form');
 if(form){const qs=new URLSearchParams(location.search);const area=qs.get('area');const select=form.querySelector('#area');if(area&&select&&[...select.options].some(o=>o.value===area))select.value=area;
 form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;
 const data=new FormData(form);if(data.get('company_website'))return;
 const clean=v=>String(v||'').replace(/[\r\n]+/g,' ').trim();
 const name=clean(data.get('full_name'));const service=clean(data.get('area'));
 const subject=`Website enquiry: ${service} — ${name}`;
 const details=[`Name: ${name}`,`Email: ${clean(data.get('email'))}`,`Phone: ${clean(data.get('phone'))||'Not provided'}`,`Enquiry area: ${service}`,'',`Message:\n${String(data.get('message')||'').trim()}`,'','Sent using an email client from the C.O. Were & Company Advocates website.'];
 const uri='mailto:cwerelaw@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(details.join('\n'));
 const s=form.querySelector('.form-status');if(s){s.textContent='Your email application should open with a prepared message. Please click Send inside your email app. If nothing opens, use cwerelaw@gmail.com directly.';s.classList.add('show');s.setAttribute('role','status')}
 window.location.href=uri;
 });}
 const up=document.querySelector('.scroll-top');if(up){let t=false;window.addEventListener('scroll',()=>{if(!t){t=true;requestAnimationFrame(()=>{up.classList.toggle('show',scrollY>450);t=false})}},{passive:true});up.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}))}
 // IMPORTANT: Kenyan Advocates (Marketing and Advertising) Rules 2014, rule 5(2)(b).
 // Advocate photos are intentionally unpublished by default. DO NOT enable without legal review.
 const SHOW_ADVOCATE_PORTRAITS=false;
 if(SHOW_ADVOCATE_PORTRAITS)document.querySelectorAll('.advocate-profile').forEach(p=>p.classList.add('show-portrait'));
})();
