import "./trending.css";
import AllData from "./Data";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Trending = () => {
  const filteredItems = AllData.filter((item) => item.id);

  let [scrollPosition, setScrollPosition] = useState(0);
  let slide = document.getElementById("items-slide");
  const slideref = useRef(null);

  const slideBefore = () => {
    let newPosition = (scrollPosition -= 250);
    slideref.current.scrollTo({ left: newPosition, behavior: "smooth" });
    setScrollPosition(newPosition);
  };

  const slideNext = () => {
    let newPosition = (scrollPosition += 250);
    slideref.current.scrollTo({ left: newPosition, behavior: "smooth" });
    setScrollPosition(newPosition);
  };

  return (
    <div className="trending-products">
      <div className="product-slider">
        <h5 id="slider-title">Now Trending</h5>
        <ul>
          <button onClick={() => slideBefore()} className="before">
            Before
          </button>
          <button onClick={() => slideNext()} className="next">
            Next
          </button>
        </ul>
      </div>
      <div ref={slideref} className="product-carousel" id="items-slide">
        {filteredItems.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/categories/product/${item.id}`}>
                <div className="product-carousel-slider">
                  <img src={item.IMG} />
                  <h3 id="nameofProduct">{item.product}</h3>
                  <p id="pricesofProduct">{item.price}$</p>
                </div>
              </Link>
            </div>
              
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
