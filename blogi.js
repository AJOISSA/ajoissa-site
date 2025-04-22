fetch('blogi.json')
  .then(response => response.json())
  .then(items => {
    const container = document.getElementById('content');
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';

      let html = `<h3>${item.title}</h3><small>${item.date}</small><p>${item.content}</p>`;
      
      card.innerHTML = html;
      container.appendChild(card);
    });
  });
