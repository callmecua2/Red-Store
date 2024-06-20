import { useContext, useEffect, useState } from "react";
import "./shoppingcart.css";
import { CartContext } from "./ProductPage";

const ShoppingCart = () => {
  const { cartItem, setCartItem } = useContext(CartContext);
  const [totalItem, setTotalItem] = useState(cartItem.length);

  // const handleAdd = (productName, price) => {
  //   const filterProduct = cartItem.filter((item) => item.id === productName)
  //   if(quantity >= 1) {
  //     const updateQuantity = quantity + 1;
  //     setQuantity(updateQuantity);
  //     setPrice(updateQuantity * filterProduct.price)
  //   }
  // }

  // const handleRemove = (productName, price) => {
  //   if(quantity >= 1) {
  //     const updateQuantity = quantity - 1;
  //     setQuantity(updateQuantity);
  //     setPrice((prevprice) => price - cartItem.price)
  //   } else if (quantity < 1) {
  //     setQuantity(1)
  //     setPrice(cartItem.price)
  //   }
  // }

  // const handleAdd = (item) => {
  //  let product = cartItem.find((item) => item.id === item.id);
  //  product.unit += 1;
  //  const updateProduct = cartItem.map(item => {
  //   if(cartItem.id === product.id) return product

  //   return item
  // })
  // }

  // const handleAdd = () => {
  //   if(quantity >= 1) {
  //     const updateQuantity = quantity + 1
  //     setQuantity(updateQuantity)
  //   }
  // }

  // const handleReduce = () => {
  //   if(quantity >= 1) {
  //     const updateQuantity = quantity - 1;
  //     setQuantity(updateQuantity);
  //   } else {
  //     setQuantity(1);
  //   }
  // }

  const [deleteItem, setDeleteItem] = useState(cartItem);

  const removeItem = (id) => {
    const updateCart = cartItem.filter((item) => item.id !== id);
    setDeleteItem(updateCart);
    const json = JSON.stringify(cartItem.id);
    localStorage.removeItem("cartItem", json);
  };

  useEffect(() => {
    setCartItem(deleteItem);
  }, [deleteItem, setCartItem]);

  const addItem = (id, unitPrice, unitItem) => {
    const updateItem = cartItem.map((item) => {
      if (item.id === id) {
        return { ...item, unit: item.unit + 1 };
      }
      return item;
    });
    console.log(unitPrice)
    setCartItem(updateItem);
  };

  const subtract = (id) => {
    const updateItem = cartItem.map((item) => {
      const updateUnit = item.unit - 1;
      if (item.id === id && item.unit > 1) {
        return { ...item, unit: updateUnit };
      }
      return item;
    });
    setCartItem(updateItem);
  };

  const calcPrice = (quantity, price) => {
    if(addItem) {
      return quantity * price
    }
    if(subtract) {
      return price / quantity
    }
  }

  const cartwithItems = () => {
    return(
      <div className="total-items">
          {cartItem.map((item) => {
            return (
              <div key={item.id} className="total-items-wrapper">
                <div className="total-items-image">
                  <img src={item.IMG} alt="img" />
                </div>
                <div className="total-items-product">
                  <p className="total-items-name">{item.product}</p>
                  <p className="total-items-price">${calcPrice(item.unit, item.price)}</p>
                </div>
                <div className="total-items-button">
                  <button
                    className="remove-cart"
                    onClick={() => removeItem(item.id)}
                  >
                    X
                  </button>
                  <div className="quantity-button">
                    <button
                      className="removeFromCart"
                      onClick={() => subtract(item.id)}
                    >
                      -
                    </button>
                    <p>{item.unit}</p>
                    <button
                      className="addToCart"
                      onClick={() => addItem(item.id, item.price, item.unit)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    )
  }

  const cartEmpty = () => {
    return(
      <div className="cart-empty">
          <div className="empty-box">
            <p className="text-cart">Your cart is empty</p>
          </div>
        </div>
    )
  }


  let [emptyCart, setEmptyCart] = useState(cartEmpty)

  useEffect(()=> {
    if(cartItem.length >= 1) {
      setEmptyCart(cartwithItems)
    } else {
      setEmptyCart(cartEmpty)
    }
  },[cartItem])



  return (
    <div className="container">
      <div className="shopping-cart">
        <h2>My Shopping Cart</h2>

        {emptyCart}

        <div className="total-shop">
          <h2>Total Items : {totalItem} </h2>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
