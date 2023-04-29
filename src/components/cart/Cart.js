import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import CartItem from "./CartItem";
import "../../assets/stylesheets/Cart.css";

export default function Cart() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  let navigate = useNavigate();

  return (
    <div className="cart__container">
      <div className="cart__heading">
        <p>Cart Items:</p>
      </div>
      <div className="cart__items">
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="cart__checkout">
          <p className="cart__subtotal"> Subtotal: ${totalAmount} </p>
          <div className="cart__checkout__button">
            <div className="cart__continue">
              <p>Not Done?</p>
              <Link to="/" className="cart__continue__link">
                Continue Shopping
              </Link>
            </div>
            <button
              className="cart__button checkout__button"
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="cart__empty">
          <p className="cart__empty__text"> Your Shopping Cart is Empty</p>
          <button className="cart__button" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
}
