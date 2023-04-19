import Product from "../components/Product";

function Products({
  cart,
  cartQuantity,
  addToCart,
  changeQuantity,
  toggleCart,
  openCart,
  products,
}) {
  function getCartQuantity(id) {
    let index = cart.indexOf(id);
    if (index > -1) {
      return cartQuantity[index];
    } else {
      return 0;
    }
  }

  return (
    <div id="Products" className="main">
      <ul className="products">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              quantity={getCartQuantity(product.id)}
              addToCart={addToCart}
              changeQuantity={changeQuantity}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
