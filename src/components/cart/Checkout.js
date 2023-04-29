import { useNavigate } from "react-router-dom";
import "../../assets/stylesheets/Checkout.css";

export default function Checkout() {
  let navigate = useNavigate();

  return (
    <div className="checkout__container">
      <p className="checkout__text"> Thank You for Shopping <em>gruve</em></p>
      <button className="checkout__button" onClick={() => navigate("/")}>
        Return to Store
      </button>
    </div>
  );
}
