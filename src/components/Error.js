import { useNavigate } from "react-router-dom";
import "../assets/stylesheets/Error.css";

export default function Error() {
  let navigate = useNavigate();

  return (
    <div className="error__container">
      <p className="error__text">404 Error</p>
      <p className="error__text">The Page You Are Looking for Does Not Exist</p>
      <button className="error__button" onClick={() => navigate("/")}>
        Return Home
      </button>
    </div>
  );
}
