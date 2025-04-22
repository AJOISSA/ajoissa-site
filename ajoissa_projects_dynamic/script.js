fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById('project-list');
    projects.forEach(proj => {
      const card = document.createElement('div');
      card.className = "project";
      card.innerHTML = `
        <h3>${proj.title}</h3>
        <img src="${proj.image}" alt="${proj.title}" />
        <p>${proj.description}</p>
        <a href="${proj.link}">Katso lisää</a>
      `;
      container.appendChild(card);
    });
  });
