fetch('romut.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Verkkovirhe: ' + response.status);
    }
    return response.json();
  })
  .then(items => {
    const container = document.getElementById('content');
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <h3>${item.name}</h3>
        <img src="${item.image}" alt="${item.name}">
        <p>Kunto: ${item.condition}</p>
        <p>Hinta: ${item.price}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Virhe haettaessa romuja:', error);
    document.getElementById('content').innerHTML = '<p>Romujen lataaminen epäonnistui.</p>';
  });
