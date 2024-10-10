/*interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }
  
  let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
  
  function addToCart(id: number, name: string, price: number) {
    const existingProduct = cart.find((item: Product) => item.id === id);
  
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  */