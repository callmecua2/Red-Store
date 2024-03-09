import "./navbarstyle.css";
import logo from "../img/logo.png";
import cart from "../img/cart.png";
import { useEffect, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../pages/ProductPage";

const Navbar = () => {
  
  const [angka, setAngka] = useState(0);
  const { cartItem } = useContext(CartContext);

  useEffect(() => {

    const total = document.getElementById("cart-quantity");

    if (cartItem.length < 1) {
      total.style.display = "none";
    } else {
        total.style.display = "flex"
    }

  }, [cartItem]);

  const tambah = () => {
            setAngka(angka + 1)
            console.log(angka)
        }

  const navigate = useNavigate();


  
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} onClick={()=>tambah()} alt="logo" />
      </div>
      <nav>
        <ul>
          <li onClick={()=>navigate('/')}>Home</li>
          <li onClick={()=>navigate('/categories/all')}>Categories</li>
          <li onClick={()=>navigate('/categories/product/5')}>Product Page</li>
          <li onClick={()=>navigate('/categories')}>Contact</li>
          <li onClick={()=>navigate('/categories/product/5')}>Account</li>
        </ul>
      </nav>
      <div className="nav-bag" onClick={()=>navigate('/mycart')}>
        <img className="navbar-cart" src={cart} alt="cart" />
        <span id="cart-quantity">
          <span id="cart-total">{cartItem.length}</span>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
