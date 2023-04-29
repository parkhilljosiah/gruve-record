import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export default function CartItem(props) {
  const { id, productName, price, cover } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  function totalPrice() {
    let totalPrice = price * cartItems[id];

    return totalPrice.toFixed(2);
  }

  let body = document.getElementById("body");

  return (
    <div className="cart__item__container">
      <img className="cart__item__cover" alt="" src={cover} />
      <div className="cart__item__description">
        <p className="cart__item__name">{productName}</p>
        <p className="cart__item__price">${price}</p>
      </div>
      <div className="cart__item__count__handler">
        <button
          className="cart__item__count__increase"
          onClick={() => removeFromCart(id)}
        >
          <i class="fa-solid fa-minus"></i>
        </button>
        <input
          className={
            body.className === "dark"
              ? "cart__item__count__input counter__dark"
              : "cart__item__count__input counter__light"
          }
          value={cartItems[id]}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button
          className="cart__item__count__decrease"
          onClick={() => addToCart(id)}
        >
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="cart__item__total__price">${totalPrice()}</div>
    </div>
  );
}
