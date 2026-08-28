(function () {
  const slug = document.body.dataset.slug;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return;

  document.getElementById('work-type').textContent = project.type;
  document.getElementById('work-title').textContent = project.title;
  document.getElementById('work-desc').textContent = project.desc;

  const iframe = document.createElement('iframe');
  iframe.src = `https://player.vimeo.com/video/${project.vimeoId}?title=0&byline=0&portrait=0`;
  iframe.allow = 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media';
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  iframe.allowFullscreen = true;
  iframe.loading = 'lazy';
  document.getElementById('work-video').appendChild(iframe);

  document.getElementById('work-external').href = `https://vimeo.com/${project.vimeoId}`;

  // "More work" — next 3 projects after this one, wrapping around
  const startIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const grid = document.getElementById('work-more-grid');
  for (let i = 1; i <= 3; i++) {
    const p = PROJECTS[(startIndex + i) % PROJECTS.length];
    const a = document.createElement('a');
    a.href = `/work/${p.slug}/`;
    a.className = 'work-more__item';
    a.innerHTML = `<span>${p.type}</span><strong>${p.title}</strong>`;
    grid.appendChild(a);
  }
})();
