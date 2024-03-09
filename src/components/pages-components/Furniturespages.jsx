import AllData from "../Data";
import { Link } from "react-router-dom";

const Furniturespages = () => {
  const filteredItems = AllData.filter(
    (item) => item.categories === "furnitures"
  );

  return (
    <div className="categories-product">
      <div className="categories-product">
        {filteredItems.map((item) => {
          return (
            <div key={item.id} className="categories-list">
              <Link to={`/categories/product/${item.id}`}>
                <div className="categories-store">
                  <img src={item.IMG} alt="cheap" />
                  <h3 className="product">{item.product}</h3>
                  <p className="prices">{item.price}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default Furniturespages