const getGoods = () => {

  const links = document.querySelectorAll('.navigation-link');

  const getData = (value, category) => {
    fetch('https://willberries-glo-default-rtdb.firebaseio.com/db.json')
      .then((res) => res.json())
      .then((data) => {
        const array = data.filter((item) => item[category] === value)
        if (category) {
          console.log('есть');
        } else {
          console.log('нет');
        }

        localStorage.setItem('goods', JSON.stringify(array));
      })
  }

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const linkValue = link.textContent;
      const category = link.dataset.field;
      getData(linkValue, category);
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