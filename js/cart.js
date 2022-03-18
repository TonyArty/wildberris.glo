const cart = function(){ //encapsulation
  const cartBtn = document.querySelector('.button-cart');
  const cart = document.getElementById('modal-cart');
  const cartClose = document.querySelector('.modal-close');
  const goodsContainer = document.querySelector('.long-goods-list');

  const addToCart = (id) => {
    const goods = JSON.parse(localStorage.getItem('goods'));
    const clickedGood = goods.find(good => good.id === id);
    const cart = localStorage.getItem('cart') ? 
      JSON.parse(localStorage.getItem('cart')) : [];

    console.log(cart.some(good => good.id === clickedGood.id));
    if(cart.some(good => good.id === clickedGood.id)) {
      console.log('Increase ', clickedGood);
    } else {
      console.log('Add to cart  ', clickedGood);
      clickedGood.count = 1;
      cart.push(clickedGood);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }

  cartBtn.addEventListener('click', function() {
    cart.style.display = 'flex';
  })
  cartClose.addEventListener('click', function() {
    cart.style.display = '';
  })

  if(goodsContainer) {
    goodsContainer.addEventListener('click', (event) => {
      if(event.target.closest('.add-to-cart')) {
        const buttonToCart = event.target.closest('.add-to-cart');
        const goodId = buttonToCart.dataset.id;
        addToCart(goodId);
      }
    })
  }
}
cart()

//16:43