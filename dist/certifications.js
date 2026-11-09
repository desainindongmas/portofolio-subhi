/* Selected training supplied by the portfolio owner; screenshots are source
   material only. No credential verification or professional license is implied. */
(() => {
 const certificates=[...(portfolioData.certifications||[]),...(portfolioData.additionalTraining||[])];
 const tr=(id,en)=>document.documentElement.lang==='en'?en:id;
 const add=(parent,tag,text,className)=>{const el=document.createElement(tag);if(text)el.textContent=text;if(className)el.className=className;parent.append(el);return el};
 const hosts=[document.querySelector('#character-panel-2'),document.querySelector('.journey-details .journal:last-child')].filter(Boolean);
 function render(){
  hosts.forEach(host=>{
   const previous=host.querySelector('.training-archive');
   const opened=Array.from(previous?.querySelectorAll('.training-collection')||[],el=>el.open);
   previous?.remove();
   const section=add(host,'section','','training-archive');
   add(section,'span',tr('ARSIP PEMBELAJARAN','LEARNING ARCHIVE'),'eyebrow');
   add(section,'h3',tr('Pelatihan & Sertifikat','Training & Certificates'));
   add(section,'p',tr('Pengembangan kemampuan untuk desain, konten, pemasaran, dan bisnis digital.','Professional learning in design, content, marketing, and digital business.'),'training-intro');
   const details=add(section,'details','','training-collection');
   details.open=opened[0]||false;
   const summary=add(details,'summary');
   add(summary,'span',tr('Pelatihan relevan','Relevant training'));add(summary,'span',String(certificates.length),'training-count');
   const list=add(details,'ol','','training-list');
   certificates.forEach(c=>{
    const row=add(list,'li','','training-item');
    if(c.focus)add(row,'span',tr(c.focus,c.enFocus),'training-focus');
    add(row,'h4',tr(c.title,c.enTitle));
    add(row,'p',c.issuer);
    add(row,'p',(c.program||c.year||'')+(typeof c.durationJP==='number'?' · '+c.durationJP+' JP':''),'training-meta');
    add(row,'small',tr('Pelatihan','Training'));
   });
  });
 }
 render();window.addEventListener('languagechange',render);
})();
