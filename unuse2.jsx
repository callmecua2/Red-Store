import { useState } from "react";
import AllData from "./src/components/Data";


const Cart = () => {

    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        setQuantity(quantity + 1)
    }

    const handleReduce = () => {
        setQuantity(quantity - 1)
    }

  return(
    <>
        <div>
            {AllData.map((item) => {
                return(
                    <div>
                        <button onClick={()=>handleAdd()}>ADD</button>
                        <img src={item.IMG} alt="" />
                        <h3 className="name">{item.product}</h3>
                        <p className="price">{item.price}</p>
                        <p className="quantity">{quantity}</p>
                        <button onClick={()=>handleReduce()}>REMOVE</button>
                    </div>
                )
            })}
        </div>

    </>
  )
};

export default Cart