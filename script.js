// Edit the arrays below to add real details, supporting evidence and links.
// Keep claims accurate and replace all bracketed placeholders before sharing.
const data = {
  clubs: [
    { name: 'Ananda Songho', role: 'Football Player', dates: '[Add dates]', position: '[Add position]', team: '[Add team details]', evidence: '[Add photos/documents]' },
    { name: 'Provati Sporting Club', role: 'Football Player', dates: '[Add dates]', position: '[Add position]', team: '[Add team details]', evidence: '[Add photos/documents]' }
  ],
  videos: [
    { title: '[Training video title]', focus: '[Ball control / passing / fitness / agility / shooting]', date: '[Training date]', description: '[Brief description]', url: '' },
    { title: '[Training video title]', focus: '[Training focus]', date: '[Training date]', description: '[Brief description]', url: '' },
    { title: '[Training video title]', focus: '[Training focus]', date: '[Training date]', description: '[Brief description]', url: '' },
    { title: '[Training video title]', focus: '[Training focus]', date: '[Training date]', description: '[Brief description]', url: '' }
  ],
  competitionEvidence: [
    { title: 'Championship medal', caption: '[Add medal photo or evidence]' },
    { title: 'Trophy and team photograph', caption: '[Add photograph]' },
    { title: 'Team / tournament photograph', caption: '[Add photograph]' },
    { title: 'Registration / organiser confirmation', caption: '[Add document or confirmation]' }
  ],
  gallery: [
    { title: 'Training photograph', date: '[Add date]' },
    { title: 'Football activity', date: '[Add date]' },
    { title: 'Team participation', date: '[Add date]' },
    { title: 'Competition evidence', date: '[Add date]' }
  ],
  projects: [
    { title: 'Sohoj Biology for Class 9–10 (English Version)', type: 'TRANSLATION · EDUCATIONAL CONTRIBUTION', status: 'Contribution', description: 'Translation contribution, together with Md. Ahsan. Book: Sohoj Biology for Class 9–10 (English Version). Author: Md. Junnurain Khan. Publisher: Sohoj Publication. This was a collaborative translation contribution; Omar is not presented as the sole translator or author.', evidence: ['Book cover: [Add link]', 'Translator credit page: [Add link]', 'Sample pages / publisher confirmation: [Add evidence]'] },
    { title: 'HSC Sohoj Biology Project', type: 'ACADEMIC PROJECT', status: 'Planned / In Progress', description: 'This project is not presented as completed. Update the status and details when the work is finished.', evidence: ['Description and contribution: [Add details]', 'Final output: [Add when complete]', 'Photographs / documents: [Add evidence]'] }
  ],
  activities: [
    { title: '[Activity name]', organisation: '[Organisation or event]', role: '[Your role or contribution]', date: '[Date or duration]', description: '[Short description]', evidence: '[Photos, certificate, video or other proof]' },
    { title: '[Activity name]', organisation: '[Organisation or event]', role: '[Your role or contribution]', date: '[Date or duration]', description: '[Short description]', evidence: '[Photos, certificate, video or other proof]' }
  ],
  documents: [
    ['Academic certificates and transcripts', ''],
    ['Certificates of participation and achievement', ''],
    ['Project evidence', ''],
    ['CV', ''],
    ['Motivation letter PDF', ''],
    ['Other supporting documents', '']
  ]
};

const el = (id) => document.getElementById(id);
const placeholder = (label) => `<div class="media-placeholder"><div><b>＋</b>${label}<br>Replace with your own media</div></div>`;

el('clubs').innerHTML = data.clubs.map(c => `<article class="club-card"><span class="club-meta">CLUB EXPERIENCE</span><h4>${c.name}</h4><div class="club-role">${c.role}</div><div class="club-fields"><span>Dates: ${c.dates}</span><span>Position: ${c.position}</span><span>Team details: ${c.team}</span><span>Evidence: ${c.evidence}</span></div></article>`).join('');
el('videos').innerHTML = data.videos.map(v => `<article class="video-card">${v.url ? (v.url.match(/\.(mp4|webm|ogg)(\?.*)?$/i) ? `<video controls playsinline preload="metadata" src="${v.url}"></video>` : `<iframe class="embedded-video" src="${v.url}" title="${v.title}" loading="lazy" allowfullscreen></iframe>`) : placeholder('Training video placeholder')}<div class="video-info"><span>${v.focus}</span><span>${v.date}</span></div><h4>${v.title}</h4><p>${v.description}</p>${v.url ? `<a class="media-link" href="${v.url}" target="_blank" rel="noopener">Watch / open video ↗</a>` : '<span class="media-link">Add video URL in script.js</span>'}</article>`).join('');
el('competition-evidence').innerHTML = data.competitionEvidence.map(i => `<div class="evidence-item">${placeholder(i.title)}<strong>${i.title}</strong><small>${i.caption}</small></div>`).join('');
el('sports-gallery').innerHTML = data.gallery.map(i => `<article class="gallery-card">${placeholder(i.title)}<strong>${i.title}</strong><small>${i.date}</small></article>`).join('');
el('projects-list').innerHTML = data.projects.map(p => `<article class="project-card"><span class="project-type">${p.type}</span><div style="display:flex;justify-content:space-between;gap:12px;align-items:start"><h3>${p.title}</h3><span class="status">${p.status}</span></div><p>${p.description}</p><ul>${p.evidence.map(x => `<li>${x}</li>`).join('')}</ul>${placeholder('Project cover, pages or supporting proof')}</article>`).join('');
el('activities-list').innerHTML = data.activities.map(a => `<article class="activity-card"><span class="project-type">ACTIVITY · EDITABLE ENTRY</span><h3>${a.title}</h3><p><strong>Organisation / event:</strong> ${a.organisation}</p><p><strong>Role:</strong> ${a.role}</p><p><strong>Date / duration:</strong> ${a.date}</p><p>${a.description}</p><p><strong>Evidence:</strong> ${a.evidence}</p>${placeholder('Add activity photograph or evidence')}</article>`).join('');
el('documents-list').innerHTML = data.documents.map(([title,url]) => `<div class="doc-row"><span>${title}</span>${url ? `<a href="${url}" target="_blank" rel="noopener">View document ↗</a>` : '<span class="media-link">Add link in script.js</span>'}</div>`).join('');
