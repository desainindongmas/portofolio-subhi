(() => {
 const root=document.querySelector('[data-screen="profil"] .profiletext');
 const bio=root.querySelector('.character-bio'),facts=root.querySelector('.profilefacts');
 const tabs=document.createElement('div');tabs.className='character-tabs';tabs.setAttribute('role','tablist');tabs.setAttribute('aria-label','Informasi profil');
 const panels=document.createElement('div');panels.className='character-panels';
 const labels=['Overview','Experience','Education & Training'];
 const nodes=labels.map((label,i)=>{
  const button=document.createElement('button');button.type='button';button.id='character-tab-'+i;button.textContent=label;button.setAttribute('role','tab');button.setAttribute('aria-controls','character-panel-'+i);button.setAttribute('aria-selected',String(i===0));button.tabIndex=i===0?0:-1;tabs.append(button);
  const panel=document.createElement('div');panel.id='character-panel-'+i;panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',button.id);panel.className='character-tabpanel';panel.hidden=i!==0;panels.append(panel);
  button.addEventListener('click',()=>select(i));return {button,panel};
 });
 function select(index){nodes.forEach((n,i)=>{n.button.setAttribute('aria-selected',String(i===index));n.button.tabIndex=i===index?0:-1;n.panel.hidden=i!==index});root.closest('[data-screen]').dataset.characterTab=String(index)}
 tabs.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const current=nodes.findIndex(n=>n.button===document.activeElement);const next=e.key==='Home'?0:e.key==='End'?2:(current+(e.key==='ArrowRight'?1:2))%3;select(next);nodes[next].button.focus()});
 bio.before(tabs,panels);nodes[0].panel.append(bio,facts);
 const workProof=document.createElement('section');workProof.className='character-proof';nodes[0].panel.append(workProof);
 function drawWorkProof(){
  const en=document.documentElement.lang==='en',items=portfolioData.productivityEvidence||[];
  workProof.innerHTML='<h3>'+(en?'SELECTED WORK EXAMPLES':'CONTOH HASIL KERJA')+'</h3><div class="character-proof-grid">'+items.map(item=>'<div><strong>'+item.value+'</strong><span>'+(en?item.enTitle:item.title)+'</span></div>').join('')+'</div>';
 }
 window.addEventListener('languagechange',drawWorkProof);drawWorkProof();
 const add=(parent,tag,text)=>{const el=document.createElement(tag);el.textContent=text;parent.append(el);return el};
 if(!portfolioData.experience.length){add(nodes[1].panel,'h3','Pengalaman berkarya');add(nodes[1].panel,'p','Riwayat pengalaman kerja akan dilengkapi. Jelajahi Portfolio untuk melihat karya yang sudah ditampilkan.');const link=add(nodes[1].panel,'button','Lihat Portfolio →');link.className='inlineaction';link.dataset.go='portofolio'}
 else portfolioData.experience.forEach(e=>{add(nodes[1].panel,'h3',e.role||e.title||e.company||'Pengalaman');add(nodes[1].panel,'p',e.description||e.company||'')});
 portfolioData.education.forEach(e=>{const item=document.createElement('article');item.className='character-education';add(item,'small',e.kind||'Education');add(item,'h3',e.institution);add(item,'p',e.program);if(e.to)add(item,'p','Selesai '+new Intl.DateTimeFormat('id-ID',{month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(e.to+'-01')));nodes[2].panel.append(item)});
 if(!portfolioData.education.length)add(nodes[2].panel,'p','Data pendidikan belum ditambahkan.');
})();
