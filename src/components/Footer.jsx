import { useEffect } from "react";

const Footer = () => {

    const buttonPush = () => {
        alert("Thank you for subscribe our newsletter");
    };


   const btnClick = document.querySelectorAll('.btn')
  //  btnClick.forEach(button => {
  //     button.addEventListener("click", ()=> {
  //       console.log("alert")
  //     });
  //  });
 
 

  return (
    <footer>
      <div className="newsletter">
        <h1>Newsletter</h1>
        <input id="subscription" type="text" placeholder="Your Email" />
        <button onClick={() => buttonPush()}>Subscribe</button>
      </div>
      <div className="copyright">
        <ul>
          <li className="btn">About</li>
          <li className="btn">Store Location</li>
          <li className="btn">FAQs</li>
          <li className="btn">News</li>
          <li className="btn">Carrers</li>
          <li className="btn">Contact Us</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
