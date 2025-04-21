
fetch('fanituotteet.json')
  .then(response => response.json())
  .then(items => {
    const container = document.getElementById('content');
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      let html = '';
    
      html = `<h3>${item.name}</h3><img src="${item.image}" alt="${item.name}"><p>Koko: ${item.size}</p><p>Hinta: ${item.price}</p>`;
        
      card.innerHTML = html;
      container.appendChild(card);
    }});
  });
