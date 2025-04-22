// verkkokauppa.js

let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  alert(product + " lisätty koriin!");
}

function goToCheckout() {
  if (cart.length === 0) {
    alert("Ostoskori on tyhjä.");
    return;
  }

  let message = "Tuotetilaus:\n";
  let total = 0;
  cart.forEach(item => {
    message += `- ${item.product} (${item.price}€)\n`;
    total += item.price;
  });

  message += `\nYhteensä: ${total}€\n\nNimi: \nSähköposti: \n`;

  const mailtoLink = "mailto:ajoissaoy@gmail.com?subject=Tuotetilaus&body=" + encodeURIComponent(message);
  window.location.href = mailtoLink;
}
