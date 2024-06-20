import "./display.css";
import { Link } from "react-router-dom";

const Display = () => {
  return (
    <div className="display-wrapper">
      <div className="featured grid-one">
        <Link to={"/categories/furnitures"}>
          <div className="overlay">
            <img src="/src/img/main/livingroom.jpg" alt="image" />
            <p>Live Comfortably</p>
          </div>
        </Link>
      </div>
      <div className="featured grid-two">
        <Link to={"/categories/skincare"}>
          <div className="overlay">
            <img src="/src/img/main/skincare.jpg" alt="image" />
            <p>SkinCare</p>
          </div>
        </Link>
      </div>
      <div className="featured grid-three">
        <Link to={"/categories/kitchen"}>
          <div className="overlay">
            <img src="/src/img/main/kitchen.jpg" alt="image" />
            <p>Kitchen</p>
          </div>
        </Link>
      </div>
      <div className="featured grid-four">
        <Link onClick={()=> window.top(0, 0)} to={"categories/electronics"}>
          <div className="overlay">
            <img src="/src/img/main/electronics.jpg" alt="image" />
            <p>Electronics</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Display;
