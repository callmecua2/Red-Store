import { useState } from "react";
import "./shoppingcart.css";

const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="container">
      <div className="shopping-cart">
        <h2>My Shopping Cart</h2>
        <table className="cart-table">
          <thead className="table-head">
            <th className="table-header">
              <h4>Product Name</h4>
            </th>
            <th className="table-header">
              <h4>Quantity</h4>
            </th>
            <th className="table-header">
              <h4>Price</h4>
            </th>
          </thead>
          <tbody className="tbody">
            <tr className="table-items">
              <td className="table-items-col">
                <div className="table-items-desc">
                  <div className="cart-image">
                    <img src="/src/img/main/vintage.jpg" alt="image" />
                  </div>
                  <div className="cart-item-name">
                    <p>Living World</p>
                  </div>
                </div>
              </td>
              <td className="button-col">
                <div className="cart-price-button">
                  <div className="price-button">
                    <button onClick={() => decrease()}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => increase()}>+</button>
                  </div>
                </div>
              </td>
              <td className="price-col">
                <div className="product-prices">
                  <p>1500 $</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShoppingCart;

// <div className="cart-items">
//           <div className="product-total">
//             <div className="product-total-title">
//               <p>Name of Product</p>
//               <p>Quantity</p>
//               <p>Total</p>
//             </div>
//             <div className="product-desc">
//               <div className="cart-img">
//                 <img src="/src/img/main/livingroom.jpg" alt="" />
//               </div>
//               <div className="cart-item-name">
//                 <p>Living Room</p>
//               </div>
//               <div className="cart-price-button">
//                 <div className="price-button">
//                   <button onClick={() => decrease()}>-</button>
//                   <p>{quantity}</p>
//                   <button onClick={() => increase()}>+</button>
//                 </div>
//               </div>
//               <div className="product-prices">
//                 <p>Total :</p>
//               </div>
//             </div>
//           </div>
//         </div>
