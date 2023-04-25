import { useState } from "react";
import "../assets/stylesheets/Header.css";

export default function Header() {
  let [theme, setTheme] = useState(true);
  let [count, setCount] = useState(0);

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

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <>
      <div className="header__container">
        <a href="#" className="header__button cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <p
            className={
              body.className === "dark"
                ? "cart__counter counter__dark"
                : "cart__counter counter__light"
            }
          >
            {count}
          </p>
        </a>
        <div className="logo__container">
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
    </>
  );
}
