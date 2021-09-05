function CartHandler(product) {
    let list = JSON.parse(localStorage.getItem('list'));
    if (list !== null) {
      list.push(product);
      localStorage.setItem('list', JSON.stringify(list));
    } else {
       let arr = [];
       arr.push(product);
       localStorage.setItem('list', JSON.stringify(arr));  
    }
    window.location.reload();
}

export default CartHandler;