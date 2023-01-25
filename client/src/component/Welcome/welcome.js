import "./welcome.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Welcome To Login/Register Screen</h1>
      <div
        className="button"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </div>
      <div>or</div>
      <div
        className="button"
        onClick={() => {
          navigate("/add");
        }}
      >
        Register
      </div>
    </div>
  );
};

export default Welcome;
