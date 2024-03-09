import { useState, useEffect } from "react";
import "./productpage.css";
import AllData from "../components/Data";
import Trending from "../components/Trending";
import { useParams } from "react-router-dom";
import { createContext, useContext } from "react";


export const CartContext = createContext();

const Productpage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const items = AllData.find((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(items.price);

  const increase = () => {
    if (quantity >= 1) {
      const updateQuantity = quantity + 1;
      setQuantity(updateQuantity);
      setPrice(updateQuantity * items.price);
    }
  };

  const decrease = () => {
    const updateQuantity = quantity - 1;
    if (updateQuantity >= 1) {
      setQuantity(updateQuantity);
      setPrice((prevprice) => price - items.price);
    } else {
      setQuantity(1);
      setPrice(items.price);
    }
  };

  return (
    <div className="container">
      <div className="main-page">
        <h3>{items.product}</h3>
        <div className="main-page-product">
          <img src={items.IMG} alt="red" />
        </div>
        <div className="main-page-price">
          <p id="product-description">{items.product}</p>
          <div className="main-page-price-button">
            <p id="quantity">Quantity</p>
            <div className="price-button">
              <button onClick={() => decrease()}>-</button>
              <p>{quantity}</p>
              <button onClick={() => increase()}>+</button>
            </div>
            <p id="prices">{price}$</p>
          </div>
          <div className="cart">
            <button id="addCart" onClick={() => addToCart(items)}>
              Add to Cart
            </button>
            <button id="direct-buy">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="product-specs wrapper">
        <div className="product-specs-block">
          <div className="product-texture specs">
            <h3>Texture :</h3>
            <p>Wood</p>
          </div>
          <div className="product-weight specs">
            <h3>Weight :</h3>
            <p>10 kg</p>
          </div>
          <div className="product-size specs">
            <h3>Size :</h3>
            <p>60cm x 20cm</p>
          </div>
        </div>
      </div>

      <Trending />
    </div>
  );
};

export default Productpage;
