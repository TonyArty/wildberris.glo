const cart = function(){ //encapsulation
  const cartBtn = document.querySelector('.button-cart');
  const cart = document.getElementById('modal-cart');
  const cartClose = document.querySelector('.modal-close');

  cartBtn.addEventListener('click', function() {
    cart.style.display = 'flex';
  })
  cartClose.addEventListener('click', function() {
    cart.style.display = '';
  })
}
cart()