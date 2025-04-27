fetch('/data/projektit.json')
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById('content');
    projects.forEach(proj => {
      const card = document.createElement('div');
      card.className = "project";
      card.innerHTML = `
        <h3>${proj.title}</h3>
        <img src="${proj.image}" style="max-width: 100%; height: auto; display: block;" alt="${proj.title}" />
        <p>${proj.description}</p>
        <a href="${proj.link}">Katso lisää</a>
      `;
      container.appendChild(card);
    });
  });
