const getGoods = () => {

  const links = document.querySelectorAll('.navigation-link');

  const getData = () => {
    fetch('https://willberries-glo-default-rtdb.firebaseio.com/db.json')
      .then((res) => res.json())
      .then((data) => {
        const array = data.filter(function(item){
          return item.gender === 'Mens'
        })
        localStorage.setItem('goods', JSON.stringify(array));
      })
  }

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const linkValue = link.textContent;
      console.log(linkValue);
      getData();
    })
  })

  // localStorage.setItem('goods', JSON.stringify({ name: 'all' }))
  // const goods = JSON.parse(localStorage.getItem('goods'));
  // console.log(goods);
  // console.log(localStorage);
  // localStorage.removeItem('goods');
  // console.log(localStorage);

}
getGoods()

// 16:37