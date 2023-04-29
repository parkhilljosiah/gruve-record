import { useContext } from "react";
import "../../assets/stylesheets/Shop.css";
import { ShopContext } from "../../context/ShopContext";

export default function Product(props) {
  const { id, productName, artist, released, cover, price } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  let cartItemCount = cartItems[id];

  return (
    <div className="product__container">
      <img className="product__cover" alt="" src={cover} />
      <div className="product__text">
        <p className="product__record__title">
          {productName} : {artist}
        </p>
        <p className="product__record__released">Released : {released}</p>
        <p className="product__price">
          ${price} {cartItemCount > 0 && <> x {cartItemCount}</>}
        </p>
      </div>
      <button
        className="product__button"
        onClick={() => {
          addToCart(id);
        }}
      >
        <p className="product__button__hover">Buy Now</p>
      </button>
    </div>
  );
}
