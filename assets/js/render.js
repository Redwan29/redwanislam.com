// Shared render helpers — DATA is set by data.js (localStorage-first)

function renderNav(active){
const pages=[
{id:‘index’,      label:‘About’,        href:‘index.html’},
{id:‘experience’, label:‘Experience’,   href:‘experience.html’},
{id:‘education’,  label:‘Education’,    href:‘education.html’},
{id:‘projects’,   label:‘Projects’,     href:‘projects.html’},
{id:‘publications’,label:‘Publications’,href:‘publications.html’},
{id:‘skills’,     label:‘Skills’,       href:‘skills.html’},
{id:‘contact’,    label:‘Contact’,      href:‘contact.html’}
];
const dlinks=pages.map(p=>`<li><a href="${p.href}" class="${p.id===active?'active':''}">${p.label}</a></li>`).join(’’);
const mlinks=pages.map(p=>`<li><a href="${p.href}" class="${p.id===active?'active':''}">${p.label}</a></li>`).join(’’);
const cv=DATA.cv_file?`<a href="${DATA.cv_file}" download class="btn nav-cta">⬇ CV</a>`:’’;
const dcv=DATA.cv_file?`<a href="${DATA.cv_file}" download class="dcv">⬇ Download CV</a>`:’’;
document.getElementById(‘nav’).innerHTML=` <div class="nav-logo">RI</div> <ul class="nav-links">${dlinks}</ul> ${cv} <button class="nav-hb" id="hb" onclick="toggleNav()" aria-label="Menu"> <span></span><span></span><span></span> </button>`;
const dr=document.createElement(‘div’);
dr.className=‘nav-drawer’;dr.id=‘nav-drawer’;
dr.innerHTML=`<ul>${mlinks}</ul>${dcv}`;
document.body.insertBefore(dr,document.body.firstChild);
}
function toggleNav(){
document.getElementById(‘hb’).classList.toggle(‘open’);
document.getElementById(‘nav-drawer’).classList.toggle(‘open’);
document.body.style.overflow=document.getElementById(‘nav-drawer’).classList.contains(‘open’)?‘hidden’:’’;
}
document.addEventListener(‘click’,e=>{
if(e.target.closest(’#nav-drawer a’)){
document.getElementById(‘hb’)?.classList.remove(‘open’);
document.getElementById(‘nav-drawer’)?.classList.remove(‘open’);
document.body.style.overflow=’’;
}
});

function renderFooter(){
document.getElementById(‘footer’).innerHTML=` <div style="border-top:1px solid var(--bdr);padding:2rem;text-align:center;position:relative;z-index:1;"> <p style="font-family:var(--mono);font-size:.7rem;color:var(--txt3);letter-spacing:.08em;"> © 2025 <span style="color:var(--cyan)">${DATA.name}</span> · <a href="mailto:${DATA.email}" style="color:var(--cyan2)">${DATA.email}</a> · <a href="${DATA.linkedin}" target="_blank" style="color:var(--cyan2)">LinkedIn</a> </p> </div>`;
}

function tags(arr){
if(!arr||!arr.length)return’’;
return`<div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.75rem;">${arr.map(t=>`<span class="tag tac">${t}</span>`).join('')}</div>`;
}

function renderExperience(){
return(DATA.experience||[]).map(e=>{
const p=e.projects?`<ul style="color:var(--txt2);font-size:.84rem;margin:.5rem 0 .75rem 1.1rem;line-height:1.85;">${e.projects.map(x=>`<li>${x}</li>`).join('')}</ul>`:’’;
return`<div class="tl-item"> <div class="tl-meta">${e.period}</div> <div class="tl-role">${e.role}</div> <div class="tl-co">${e.company}</div> <div class="tl-desc">${e.desc}</div>${p}${tags(e.tags)} </div>`;
}).join(’’);
}

function renderEducation(){
return(DATA.education||[]).map(e=>` <div class="edu-card"> <div class="edu-period">${e.period}</div> <div class="edu-deg">${e.degree}</div> <div class="edu-inst">${e.institution}</div> <div class="edu-det">${(e.detail||'').replace(/\n/g,'<br>')}</div> </div>`).join(’’);
}

function renderProjects(){
return(DATA.projects||[]).map(p=>{
const imgHtml = p.images && p.images.length
? `<div class="proj-gallery">${p.images.map((src,i)=>`
<div class="proj-img-wrap">
<img src="${src.url}" alt="${src.caption||p.title}" loading="lazy"
style="width:100%;display:block;border:1px solid var(--bdr);
${src.contain?'object-fit:contain;background:#010a12;max-height:220px;':'object-fit:cover;height:180px;'}">
${src.caption?`<div class="proj-img-cap">${src.caption}</div>`:’’}
</div>`).join('')} </div>`
: ‘’;
return`<div class="proj-card"> <div class="proj-type">${p.type}</div> <div class="proj-title">${p.title}</div> ${imgHtml} <div class="proj-desc">${p.desc}</div> <div class="proj-out">▶ ${p.outcome}</div> ${tags(p.tags)} </div>`;
}).join(’’);
}

function renderPublications(){
return(DATA.publications||[]).map((p,i)=>` <div class="pub-item"> <div class="pub-idx">0${i+1}</div> <div> <div class="pub-type">${p.type}</div> <div class="pub-title">${p.title}</div> <div class="pub-venue">${p.venue}</div> <div class="pub-authors">${p.authors}</div> ${p.doi?`<a href="${p.doi}" target="_blank" style="font-family:var(--mono);font-size:.65rem;color:var(--cyan2);margin-top:.3rem;display:inline-block;">↗ VIEW PAPER</a>`:''} </div> </div>`).join(’’);
}

function renderSkills(){
return(DATA.skillGroups||[]).map(g=>` <div class="skill-grp"> <div class="skill-grp-title">${g.title}</div> <ul class="skill-list">${(g.skills||[]).map(s=>`
<li>${s.name}${s.pct!=null?`<span class="skill-bar-w"><div class="skill-bar" style="width:${s.pct}%"></div></span>`:’’}</li>`).join('')} </ul> </div>`).join(’’);
}

function renderHonours(){
return(DATA.honours||[]).map(h=>` <div class="honour-item"> <span class="honour-icon">${h.icon}</span> <div class="honour-text">${h.text}</div> </div>`).join(’’);
}

function renderDetails(){
return(DATA.details||[]).map(d=>` <div class="det-row"> <span class="det-key">${d.key}</span> <span class="det-val">${d.link?`<a href="${d.link}" target="_blank">${d.val}</a>`:d.val}</span> </div>`).join(’’);
}

function renderPhoto(size=200){
if(DATA.photo)return`<div class="photo-frame" style="width:${size}px;height:${size}px;"><img src="${DATA.photo}" alt="${DATA.name}"></div>`;
return`<div class="photo-frame" style="width:${size}px;height:${size}px;"> <div class="photo-ph"> <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg> <span>Add photo<br>via CMS</span> </div></div>`;
}
