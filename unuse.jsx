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

import { useState } from "react"
import AllData from "./src/components/Data"

{
    /* <div className="total-items">
            <div className="total-items-wrapper">
              <div className="total-items-image">
                <img src="/src/img/main/vintage.jpg" alt="img" />
              </div>
              <div className="total-items-product">
                <p className="total-items-name">Living World</p>
                <p className="total-items-price">${price}</p>
              </div>
              <div className="total-items-button">
                <button className="remove-cart">X</button>
                <div className="quantity-button">
                  <button onClick={() => decrease()}>-</button>
                  <p>{quantity}</p>
                  <button onClick={() => increase()}>+</button>
                </div>
              </div>
            </div>
          </div> */
  }
  {
    /* <div>
            {cartItem.map((item) => {
              return (
                <div className="total-items">
                  <div className="total-items-wrapper">
                    <div className="total-items-image">
                      <img src={item.IMG} alt="img" />
                    </div>
                    <div className="total-items-product">
                      <p className="total-items-name">{item.product}</p>
                      <p className="total-items-price">${item.price}</p>
                    </div>
                    <div className="total-items-button">
                      <button className="remove-cart">X</button>
                      <div className="quantity-button">
                        <button onClick={() => decrease()}>-</button>
                        <p>{quantity}</p>
                        <button onClick={() => increase()}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */
  }
  



    // const addButton = document.querySelectorAll('.addToCart');
  // addButton.forEach((button) => {
  //   button.addEventListener('click', ()=> {
  //     if(quantity >= 1) {
  //       const updateQuantity = quantity + 1;
  //       setQuantity(updateQuantity);
  //       setPrice(updateQuantity * 400);
  //     }
  //   })
  // })


  // const minusButton = document.querySelectorAll('.removeFromCart');
  // minusButton.forEach((button) => {
  //   button.addEventListener('click', ()=> {
  //     const updateQuantity = quantity - 1;
  //     if(updateQuantity >= 1) {
  //       setQuantity(updateQuantity);
  //       setPrice((prevprice) => price - 400);
  //     } else {
  //       setQuantity(1);
  //       setPrice(400);
  //     }
  //   })
  // })


    // const increase = () => {
  //   if (quantity >= 1) {
  //     const updateQuantity = quantity + 1;
  //     setQuantity(updateQuantity);
  //     setPrice(updateQuantity * 400);
  //   }
  // };

  // const decrease = () => {
  //   const updateQuantity = quantity - 1;
  //   if (updateQuantity >= 1) {
  //     setQuantity(updateQuantity);
  //     setPrice((prevprice) => price - 400);
  //   } else {
  //     setQuantity(1);
  //     setPrice(400);
  //   }
  // };

  const [quantity, setQuantity] = useState(1)

  