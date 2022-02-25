const getGoods = () => {

  const links = document.querySelectorAll('.navigation-link');
  links.forEach(function(item){
    console.log(item);
  })

  const getData = () => {
    fetch('https://willberries-glo-default-rtdb.firebaseio.com/db.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
  }

}
getGoods()

// 16:37