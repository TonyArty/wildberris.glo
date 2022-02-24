const getGoods = () => {
  fetch('/db/db.json')
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data);
    })

}
getGoods()