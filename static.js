/* Standalone interactions. No WordPress, Elementor, jQuery, API, or database. */
(() => {
  const layout = () => {
    const mobile = innerWidth <= 921;
    document.body.classList.toggle('ast-header-break-point', mobile);
    document.body.classList.toggle('ast-desktop', !mobile);
  };
  layout(); addEventListener('resize', layout);
  document.querySelectorAll('.eael-accordion-header,.elementor-tab-title').forEach((header, i) => {
    const content = header.nextElementSibling;
    if (!content) return;
    header.setAttribute('role', 'button'); header.tabIndex = 0;
    header.id ||= `certificate-toggle-${i}`; content.id ||= `certificate-content-${i}`;
    header.setAttribute('aria-controls',content.id);header.setAttribute('aria-expanded','false');
    content.setAttribute('role','region');content.setAttribute('aria-labelledby',header.id);
    const toggle = () => {
      const open = header.getAttribute('aria-expanded') !== 'true';
      header.setAttribute('aria-expanded',String(open));header.classList.toggle('active',open);header.classList.toggle('elementor-active',open);
      content.hidden=!open;content.setAttribute('aria-hidden',String(!open));
      content.classList.toggle('active',open);content.classList.toggle('elementor-active',open);content.style.display=open?'block':'none';
    };
    header.addEventListener('click',e=>{if(e.target.closest('a')) e.preventDefault();toggle();});
    header.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle();}});
  });
  document.querySelectorAll('.menu-toggle').forEach(button=>button.addEventListener('click',()=>{
    const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));
    document.querySelectorAll('.ast-mobile-header-content').forEach(nav=>{nav.style.display=open?'block':'none';});
  }));
  document.querySelectorAll('a[aria-disabled="true"]').forEach(a=>a.removeAttribute('tabindex'));
  document.querySelectorAll('form.search-form').forEach(form=>form.addEventListener('submit',e=>{
    e.preventDefault();let note=form.querySelector('[role="status"]');
    if(!note){note=document.createElement('p');note.setAttribute('role','status');form.append(note);}
    note.textContent='There are no published posts in this archive.';
  }));
})();
