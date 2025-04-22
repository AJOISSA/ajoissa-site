fetch('yhteystiedot.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('yhteystiedot');
    container.innerHTML = `
      <h2>Yhteystiedot</h2>
      <p><strong>Nimi:</strong> ${data.nimi}</p>
      <p><strong>Osoite:</strong> ${data.osoite}</p>
      <p><strong>Puhelin:</strong> <a href="tel:${data.puhelin}">${data.puhelin}</a></p>
      <p><strong>Sähköposti:</strong> <a href="mailto:${data.sahkoposti}">${data.sahkoposti}</a></p>
      <p><strong>Aukioloajat:</strong> ${data.aukioloajat}</p>
    `;
  })
  .catch(error => {
    console.error("Virhe ladattaessa yhteystietoja:", error);
  });
