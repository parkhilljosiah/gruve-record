import { useContext, useState } from "react";
import "../assets/stylesheets/Header.css";
import { ShopContext } from "../context/ShopContext";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Header() {
  let [theme, setTheme] = useState(true);

  let navigate = useNavigate();
  let { cartItems } = useContext(ShopContext);

  function handleSum(obj) {
    let sum = Object.keys(obj).reduce(
      (sum, key) => sum + parseFloat(obj[key] || 0),
      0
    );

    return sum;
  }

  let body = document.getElementById("body");

  function handleTheme() {
    if (body.className === "dark") {
      body.className = "light";
      setTheme(!theme);
    } else {
      body.className = "dark";
      setTheme(!theme);
    }
  }

  return (
    <>
      <div className="header__container">
        <Link to="/cart" className="header__button cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <p
            className={
              body.className === "dark"
                ? "cart__counter counter__dark"
                : "cart__counter counter__light"
            }
          >
            {handleSum(cartItems)}
          </p>
        </Link>
        <div onClick={() => navigate("/")} className="logo__container">
          <h1>gruve</h1>
        </div>
        <button onClick={handleTheme} className="header__button theme">
          {theme ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </button>
      </div>
      <Outlet />
    </>
  );
}
