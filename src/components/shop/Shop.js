import { products } from "../../data/products";
import Product from "./Product";
import "../../assets/stylesheets/Shop.css";
import { useState } from "react";

export default function Shop() {
  let [productArray, setProductArray] = useState(products);

  function highToLow() {
    let copy = [...products];

    copy.sort((a, b) => b.price - a.price);

    setProductArray(copy);
  }

  function lowToHigh() {
    let copy = [...products];

    copy.sort((a, b) => a.price - b.price);

    setProductArray(copy);
  }

  return (
    <div className="shop__page__container">
      <div className="shop__sort__container">
        <div className="shop__sort__content">
          <p>sort by price</p>
          <div>
            <button className="sort__button sort__high" onClick={highToLow}>
              High
            </button>
            <button
              className="sort__button sort__default"
              onClick={() => setProductArray(products)}
            >
              Default
            </button>
            <button className="sort__button sort__low" onClick={lowToHigh}>
              Low
            </button>
          </div>
        </div>
      </div>
      <div className="shop__container">
        <div className="products__container">
          {productArray.map((p) => (
            <Product key={p.id} data={p} />
          ))}
        </div>
      </div>
      <a href="#top">
        <div className="arrow__container">
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      </a>
    </div>
  );
}
