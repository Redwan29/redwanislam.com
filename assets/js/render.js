// ============================================================
// RENDER HELPERS — shared across all pages
// ============================================================

// NAV
function renderNav(activePage) {
  const pages = [
    { id:"index",        label:"About",        href:"index.html" },
    { id:"experience",   label:"Experience",   href:"experience.html" },
    { id:"education",    label:"Education",    href:"education.html" },
    { id:"projects",     label:"Projects",     href:"projects.html" },
    { id:"publications", label:"Publications", href:"publications.html" },
    { id:"skills",       label:"Skills",       href:"skills.html" },
    { id:"contact",      label:"Contact",      href:"contact.html" }
  ];

  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${p.id===activePage?'active':''}">${p.label}</a></li>`
  ).join('');

  // CV download button only if file set
  const cvBtn = DATA.cv_file
    ? `<a href="${DATA.cv_file}" download class="btn nav-cta">⬇ Download CV</a>`
    : '';

  document.getElementById('nav').innerHTML = `
    <div class="nav-logo">// ${DATA.website.replace('https://','')}</div>
    <ul class="nav-links">${links}</ul>
    ${cvBtn}
  `;
}

// FOOTER
function renderFooter() {
  document.getElementById('footer').innerHTML = `
    <div style="border-top:1px solid var(--border);padding:2rem;text-align:center;position:relative;z-index:1;">
      <p style="font-family:var(--mono);font-size:.7rem;color:var(--text-dim);letter-spacing:.08em;">
        © 2025 <span style="color:var(--accent)">${DATA.name}</span> ·
        <a href="mailto:${DATA.email}" style="color:var(--accent2)">${DATA.email}</a> ·
        <a href="${DATA.linkedin}" target="_blank" style="color:var(--accent2)">LinkedIn</a>
      </p>
    </div>
  `;
}

// TAGS
function renderTags(tags) {
  if(!tags) return '';
  return `<div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.75rem;">
    ${tags.map(t=>`<span class="tag tag-accent">${t}</span>`).join('')}
  </div>`;
}

// EXPERIENCE ITEMS
function renderExperience() {
  return DATA.experience.map(e => {
    const projects = e.projects
      ? `<ul style="color:var(--text-muted);font-size:.84rem;margin:.5rem 0 .75rem 1.1rem;line-height:1.85;">
          ${e.projects.map(p=>`<li>${p}</li>`).join('')}
         </ul>`
      : '';
    return `
      <div class="timeline-item">
        <div class="timeline-meta">${e.period}</div>
        <div class="timeline-role">${e.role}</div>
        <div class="timeline-company">${e.company}</div>
        <div class="timeline-desc">${e.desc}</div>
        ${projects}
        ${renderTags(e.tags)}
      </div>`;
  }).join('');
}

// EDUCATION
function renderEducation() {
  return DATA.education.map(e => `
    <div class="edu-card">
      <div class="edu-period">${e.period}</div>
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-institution">${e.institution}</div>
      <div class="edu-detail">${e.detail.replace(/\n/g,'<br>')}</div>
    </div>`).join('');
}

// PROJECTS
function renderProjects() {
  return DATA.projects.map(p => `
    <div class="project-card">
      <div class="project-type">${p.type}</div>
      <div class="project-title">${p.title}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-outcome">▸ ${p.outcome}</div>
      ${renderTags(p.tags)}
    </div>`).join('');
}

// PUBLICATIONS
function renderPublications() {
  return DATA.publications.map((p,i) => `
    <div class="pub-item">
      <div class="pub-index">0${i+1}</div>
      <div>
        <div class="pub-type">${p.type}</div>
        <div class="pub-title">${p.title}</div>
        <div class="pub-venue">${p.venue}</div>
        <div class="pub-authors">${p.authors}</div>
      </div>
    </div>`).join('');
}

// SKILLS
function renderSkills() {
  return DATA.skillGroups.map(g => `
    <div class="skill-group">
      <div class="skill-group-title">${g.title}</div>
      <ul class="skill-list">
        ${g.skills.map(s => `
          <li>
            ${s.name}
            ${s.pct!=null
              ? `<span class="skill-bar-wrap"><div class="skill-bar" style="width:${s.pct}%"></div></span>`
              : ''}
          </li>`).join('')}
      </ul>
    </div>`).join('');
}

// HONOURS
function renderHonours() {
  return DATA.honours.map(h => `
    <div class="honour-item">
      <span class="honour-icon">${h.icon}</span>
      <div class="honour-text">${h.text}</div>
    </div>`).join('');
}

// ABOUT DETAILS
function renderDetails() {
  return DATA.details.map(d => `
    <div class="detail-row">
      <span class="detail-key">${d.key}</span>
      <span class="detail-val">${d.link
        ? `<a href="${d.link}" target="_blank">${d.val}</a>`
        : d.val}</span>
    </div>`).join('');
}

// PHOTO
function renderPhoto(size=200) {
  if(DATA.photo) {
    return `<div class="photo-frame" style="width:${size}px;height:${size}px;">
      <img src="${DATA.photo}" alt="${DATA.name}">
    </div>`;
  }
  return `<div class="photo-frame" style="width:${size}px;height:${size}px;">
    <div class="photo-placeholder">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
        <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
      <span>Add photo via<br>CMS</span>
    </div>
  </div>`;
}
