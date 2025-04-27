
fetch('/data/palvelut.json')
  .then(response => response.json())
  .then(items => {
    const container = document.getElementById('content');
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      let html = '';

      html = `<h3>${item.service}</h3><p>${item.description}</p><p>${item.price}</p>`;

      card.innerHTML = html;
      container.appendChild(card);
    });
  });
