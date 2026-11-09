/* Shared navigation, chapter orientation, and accessible portfolio controls. */
(()=>{
 const tr=(id,en)=>document.documentElement.lang==='en'?en:id;
 const icons={menu:'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',profil:'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21v-2a8 8 0 0 1 16 0v2',portofolio:'M8 6V3h8v3M3 7h18v14H3zM3 12h18M10 12v3h4v-3',skillset:'m12 2 2.4 6.5L21 11l-6.6 2.5L12 20l-2.4-6.5L3 11l6.6-2.5ZM19 2v4M17 4h4',about:'M21 11a9 9 0 0 1-9 9H5l-3 2 1-6a9 9 0 1 1 18-5ZM8 10h8M8 14h5'};
 const svg=key=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${icons[key]}"></path></svg>`;
 const chapters=[['menu','00','Menu','Menu'],['profil','01','Profil','Profile'],['portofolio','02','Karya','Work'],['skillset','03','Skills','Skills'],['about','04','Kontak','Contact']];
 const descriptions={profil:['Kenali cara saya bekerja, pengalaman, dan kemampuan yang mendukung proyek Anda.','Explore my approach, experience, and capabilities for your next project.'],portofolio:['Mulai dari tiga karya pilihan, lalu jelajahi website, aplikasi, dan konten yang saya kerjakan.','Start with three selected projects, then explore my websites, applications, and content.'],skillset:['Kreativitas, strategi, dan teknologi yang saya gunakan untuk mewujudkan ide.','The creativity, strategy, and technology I use to bring ideas to life.'],about:['Ceritakan kebutuhan Anda. Kita mulai dari percakapan yang tepat.','Tell me what you need. Let’s start with the right conversation.']};
 const titles={profil:['Profil','Profile'],portofolio:['Karya & Studi Kasus','Work & Case Studies'],skillset:['Skills & Abilities','Skills & Abilities'],about:['Mari Berkolaborasi','Let’s Collaborate']};
 const kickers={profil:'CHARACTER PROFILE',portofolio:'PROJECT COLLECTION',skillset:'SKILL TREE',about:'NEXT CHAPTER'};
 const header=document.querySelector('body>header');
 const nav=document.createElement('nav');nav.className='global-navigation';header.querySelector('.settings').before(nav);
 const narrow=matchMedia('(max-width:1050px)');
 function placeNavigation(){const wrap=document.querySelector('.about-contact'),hub=document.querySelector('.contact-hub');if(narrow.matches){document.body.append(nav);wrap?.prepend(hub)}else{header.querySelector('.settings').before(nav);wrap?.append(hub)}}
 placeNavigation();narrow.addEventListener('change',placeNavigation);
 document.querySelector('main').tabIndex=-1;
 document.querySelector('.skip-content').addEventListener('click',e=>{e.preventDefault();const target=document.querySelector('.screen:not([hidden]) h1')||document.querySelector('main');target.tabIndex=-1;target.focus();target.scrollIntoView({block:'start'})});
 for(const [key] of chapters){if(key==='menu')continue;const head=document.querySelector(`[data-screen="${key}"] .screenhead`);head.querySelector('.back').hidden=true;head.querySelector('.quicknav').hidden=true;const lead=document.createElement('div');lead.className='chapter-lead';const title=head.querySelector('h1');head.append(lead);lead.append(title);const kicker=document.createElement('div');kicker.className='chapter-kicker';lead.prepend(kicker);const description=document.createElement('p');description.className='chapter-description';lead.append(description)}
 const sectionbar=document.querySelector('[data-screen="portofolio"] .sectionbar');
 const collection=document.createElement('details');collection.className='project-collection';
 const collectionSummary=document.createElement('summary');collectionSummary.innerHTML='<span></span><small></small><b aria-hidden="true">+</b>';collection.append(collectionSummary);
 sectionbar.before(collection);collection.append(sectionbar,document.querySelector('[data-screen="portofolio"] .selector'),document.querySelector('[data-screen="portofolio"] .hint'));

 const searchWrap=document.createElement('div');searchWrap.className='project-search';
 const search=document.createElement('input');search.type='search';search.id='project-search';search.autocomplete='off';search.spellcheck=false;search.maxLength=120;
 const label=document.createElement('label');label.htmlFor=search.id;label.className='sr-only';
 const searchIcon=document.createElement('span');searchIcon.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="m16 16 5 5"></path></svg>';
 searchWrap.append(label,searchIcon,search);sectionbar.append(searchWrap);
 search.addEventListener('input',()=>{projectQuery=search.value.trim();render()});
 document.querySelector('#projectcount').setAttribute('aria-live','polite');
 const primaryContact=document.querySelector('.contact-options .contact-option');primaryContact?.classList.add('contact-option-primary');
 document.querySelectorAll('.contact-option').forEach(a=>{const name=a.querySelector('b')?.textContent;const iconKey={WhatsApp:'whatsapp',Instagram:'instagram'}[name];if(iconKey)a.querySelector('.contact-symbol').innerHTML=`<img src="assets/skills/${iconKey}.svg" alt="">`});
 function experience(){
  const panel=document.querySelector('#character-panel-1');panel.replaceChildren();
  const date=value=>!value?'':/^\d{4}$/.test(value)?value:new Intl.DateTimeFormat(document.documentElement.lang==='en'?'en-US':'id-ID',{month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(value+'-01'));
  for(const e of portfolioData.experience){const article=document.createElement('article');article.className='character-experience';const heading=document.createElement('h3');heading.textContent=e.company;const role=document.createElement('p');role.className='experience-role';role.textContent=e.role;const period=document.createElement('p');period.className='experience-period';period.textContent=date(e.from)+' – '+(e.current?tr('Sekarang','Present'):date(e.to));article.append(heading,role,period);if(e.scope){const scope=document.createElement('p');scope.textContent=e.scope;article.append(scope)}panel.append(article)}
 }
 function draw(){
  experience();
  const current=chapters.some(c=>c[0]===location.hash.slice(1))?location.hash.slice(1):'menu';
  nav.setAttribute('aria-label',tr('Navigasi utama','Main navigation'));
  nav.innerHTML=chapters.map(([key,n,id,en])=>`<a href="#${key}" ${key===current?'aria-current="page"':''}><span class="navigation-icon">${svg(key)}</span><span class="navigation-number" aria-hidden="true">${n}</span><span class="navigation-label">${tr(id,en)}</span></a>`).join('');
  document.body.dataset.chapter=current;
  Object.keys(titles).forEach(key=>{const lead=document.querySelector(`[data-screen="${key}"] .chapter-lead`);lead.querySelector('h1').textContent=tr(...titles[key]);lead.querySelector('.chapter-kicker').textContent=chapters.find(c=>c[0]===key)[1]+' / '+kickers[key];lead.querySelector('.chapter-description').textContent=tr(...descriptions[key])});
  collectionSummary.querySelector('span').textContent=tr('Jelajahi semua proyek','Explore all projects');collectionSummary.querySelector('small').textContent=projects.length+' '+tr('proyek','projects');
  label.textContent=tr('Cari proyek berdasarkan nama atau tools','Search projects by name or tools');search.placeholder=tr('Cari nama proyek atau tools…','Search projects or tools…');
  document.title=current==='menu'?'Muhammad Subhi — Web, Apps & Content':tr(...titles[current])+' — Muhammad Subhi';
  document.querySelectorAll('.settings>button').forEach(b=>b.title=b.getAttribute('aria-label')||'');
  if(primaryContact)primaryContact.querySelector('small').textContent=tr('Mulai diskusi proyek','Start a project conversation');
 }
 function change(){draw();requestAnimationFrame(()=>{const title=document.querySelector('.screen:not([hidden]) h1');if(title){title.tabIndex=-1;title.focus({preventScroll:true})}})}
 window.addEventListener('hashchange',change);window.addEventListener('languagechange',draw);draw();
})();
