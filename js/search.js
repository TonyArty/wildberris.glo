const search = function() {
  const searchBlock = document.querySelector('.search-block');
  const input = document.querySelector('.search-block > input');
  const button = document.querySelector('.search-block > button');
  
  input.addEventListener('input', (event) => {
    console.log(event.target.value);
  })
}
search()