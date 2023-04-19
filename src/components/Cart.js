import CartItem from "./CartItem";

function Cart({
  cart,
  cartQuantity,
  removeFromCart,
  changeQuantity,
  clearCart,
  cartOpen,
  toggleCart,
  ProductsJSON,
  products,
}) {
  function checkOut() {
    let total = getTotalPrice();
    alert("You have been charged £" + total + " on your credit card!");
    clearCart();
    toggleCart();
  }

  function getTotalPrice() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += ProductsJSON[cart[i]].price * cartQuantity[i];
    }
    return (Math.round(total * 100) / 100).toFixed(2);
  }

  return (
    <>
      {cartOpen && (
        <div id="Cart">
          {cart.length > 0 ? (
            <div>
              {cart.map((item, index) => (
                <CartItem
                  key={item}
                  id={item}
                  product={ProductsJSON[item]}
                  quantity={cartQuantity[index]}
                  removeFromCart={removeFromCart}
                  changeQuantity={changeQuantity}
                />
              ))}
              <hr />
              <div className="cart-title">Total: £{getTotalPrice()}</div>
              <hr />
              <button className="btn" onClick={() => checkOut()}>
                Checkout
              </button>
            </div>
          ) : (
            <div className="title-text">No items in the cart</div>
          )}
        </div>
      )}
    </>
  );
}

export default Cart;
