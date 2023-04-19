function CartItem({ id, product, quantity, removeFromCart, changeQuantity }) {
  return (
    <div className="cart-item">
      <div className="cart-img">
        <img src={require(`./../images/${id}.jpeg`).default} alt={id} />
      </div>
      <div className="cart-info">
        <span className="cart-title">{product.name}</span>
        <div className="cart-description">
          <button
            className="btn btn-cart-quantity"
            onClick={() =>
              quantity > 1 && changeQuantity(product.id, quantity - 1)
            }
          >
            −
          </button>
          {quantity}
          <button
            className="btn btn-cart-quantity"
            onClick={() =>
              quantity < 10 && changeQuantity(product.id, quantity + 1)
            }
          >
            +
          </button>
          <span className="cart-price">x £{product.price}</span>
          <button className="btn btn-remove" onClick={() => removeFromCart(id)}>
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
