import "./list.css";
import AllData from "./Data";
import { Link } from "react-router-dom";

const List = () => {
  const filterItems = AllData.filter((item) => item.id <= 8);

  return (
    <div className="lists">
      <h2 id="lists-title">Our Best Product</h2>
      <div className="proud-products">
        {filterItems.map((item) => {
          return (
            <div className="lists-items" key={item.id}>
              <Link to={`categories/product/${item.id}`}>
                <div className="top-list">
                    <img src={item.IMG} alt="image" />
                    <h3 className="product">{item.product}</h3>
                    <p className="prices">{item.price}$</p>
                  </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
