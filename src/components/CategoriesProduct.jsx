import AllData from "./Data";
import { Link } from "react-router-dom";

const CategoriesProduct = () => {
  const filteredItems = AllData.filter((item) => item.id);

  return (
    <div className="categories-product">
      {filteredItems.map((item) => {
        return (
          <div key={item.id}>
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
  );
};

export default CategoriesProduct;