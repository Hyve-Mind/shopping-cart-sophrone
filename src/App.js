import { HashRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ProductsJSON from "./products/products.json";

function App() {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let loadedCart = JSON.parse(window.sessionStorage.getItem("cart"));
    let loadedQuantity = JSON.parse(window.sessionStorage.getItem("quantity"));
    if (!loadedCart) loadedCart = [];
    if (!loadedQuantity) loadedQuantity = [];
    setCart(loadedCart);
    setCartQuantity(loadedQuantity);
    addProductsToStateArray();
  }, []);

  function addToCart(id) {
    let newCart = [...cart];
    let newQuantity = [...cartQuantity];
    let index = newCart.indexOf(id);
    if (index === -1) {
      newCart.push(id);
      newQuantity.push(1);
    } else {
      if (newQuantity[index] < 10) newQuantity[index]++;
    }
    setCart(newCart);
    setCartQuantity(newQuantity);
    updateSessionStorage(newCart, newQuantity);
  }

  function addProductsToStateArray() {
    const productsArray = [];
    for (let product in ProductsJSON) {
      productsArray.push(ProductsJSON[product]);
    }
    setProducts(productsArray);
  }

  function changeQuantity(id, quantity) {
    let newCart = [...cart];
    let newQuantity = [...cartQuantity];
    let index = cart.indexOf(id);
    if (quantity === 0) {
      newCart.splice(index, 1);
      newQuantity.splice(index, 1);
    } else {
      if (index === -1) {
        newCart.push(id);
        newQuantity.push(quantity);
      } else {
        newQuantity[index] = quantity;
      }
    }
    setCart(newCart);
    setCartQuantity(newQuantity);
    updateSessionStorage(newCart, newQuantity);
  }

  function removeFromCart(id) {
    let newCart = [...cart];
    let newQuantity = [...cartQuantity];
    let index = cart.indexOf(id);
    newCart.splice(index, 1);
    newQuantity.splice(index, 1);
    setCart(newCart);
    setCartQuantity(newQuantity);
    updateSessionStorage(newCart, newQuantity);
  }

  function clearCart() {
    setCart([]);
    setCartQuantity([]);
    updateSessionStorage([], []);
  }

  function toggleCart() {
    setCartOpen(true);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function updateSessionStorage(cart, quantity) {
    window.sessionStorage.setItem("cart", JSON.stringify(cart));
    window.sessionStorage.setItem("quantity", JSON.stringify(quantity));
  }

  return (
    <div id="content">
      <Cart
        cart={cart}
        cartQuantity={cartQuantity}
        removeFromCart={removeFromCart}
        changeQuantity={changeQuantity}
        clearCart={clearCart}
        cartOpen={cartOpen}
        toggleCart={toggleCart}
        ProductsJSON={ProductsJSON}
        products={products}
      />
      <HashRouter>
        <Header toggleCart={toggleCart} cart={cart} />
        <Main
          cart={cart}
          cartQuantity={cartQuantity}
          addToCart={addToCart}
          changeQuantity={changeQuantity}
          toggleCart={toggleCart}
          // openCart={openCart}
          closeCart={closeCart}
          ProductsJSON={ProductsJSON}
          products={products}
        />
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
