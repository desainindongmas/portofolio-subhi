/* The owner's three selected projects, linked to their existing showcases. */
(()=>{
 const host=document.querySelector('[data-screen="portofolio"]');
 const section=document.createElement('section');section.className='featured-work';
 host.querySelector('.sectionbar').before(section);
 const tr=(id,en)=>document.documentElement.lang==='en'?en:id;
 function draw(){section.innerHTML=`<div class="eyebrow">${tr('KARYA PILIHAN','SELECTED WORK')}</div><div class="featured-options">${(portfolioData.featuredProjects||[]).map((f,i)=>{const p=projects.find(p=>p.id===f.id);return p?`<button data-featured-project="${esc(f.id)}" aria-pressed="${projects[active]?.id===f.id}"><span>${String(i+1).padStart(2,'0')} / ${tr(f.category,['Website','Apps / SaaS','Creative Work'][i])}</span><b>${esc(p.brand)}</b><small>${tr('Jelajahi karya','Explore the work')} ↗</small></button>`:''}).join('')}</div>`}
 section.addEventListener('click',e=>{const b=e.target.closest('[data-featured-project]');if(!b)return;const collection=document.querySelector('.project-collection');if(collection)collection.open=false;projectQuery='';const search=document.querySelector('#project-search');if(search)search.value='';active=projects.findIndex(p=>p.id===b.dataset.featuredProject);filter=b.dataset.featuredProject==='project-26'?'social':'all';document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x.dataset.filter===filter);x.setAttribute('aria-pressed',String(x.dataset.filter===filter))});render();(document.querySelector('#content-gallery:not([hidden])')||document.querySelector('.project')).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'})});
 draw();window.addEventListener('languagechange',draw);
})();
