interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }
  
  // Récupérer le panier depuis le localStorage
  let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
  
  // Fonction pour ajouter un produit dans le panier
  function addToCart(id: number, name: string, price: number) {
    const existingProduct = cart.find((item: Product) => item.id === id);
  
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }
  
    // Sauvegarder le panier mis à jour dans le localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  