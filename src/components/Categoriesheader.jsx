import "./categoriesheader.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllData from "./Data";

const CategoriesHeader = () => {


    const [bntName, setbtnName] = useState('All')

    const handleCategoryClick = (categories) => {
        setbtnName(categories)
    }

  return (
    <div className="categories-header">
      <h3 id="categories-title">{bntName}</h3>
      <div className="categories-sort">
        <ul>
          <Link to={"all"}>
            <li onClick={() => handleCategoryClick("All")}>All</li>
          </Link>
          <Link to={"furnitures"}>
            <li onClick={() => handleCategoryClick("Furnitures")}>
              Furnitures
            </li>
          </Link>
          <Link to={"electronics"}>
            <li onClick={() => handleCategoryClick("Electronics")}>
              Electronics
            </li>
          </Link>
          <Link to={"lamps"}>
            <li onClick={() => handleCategoryClick("Lamps")}>Lamps</li>
          </Link>
          <Link to={"kitchen"}>
            <li onClick={() => handleCategoryClick("Kitchen")}>Kitchen</li>
          </Link>
          <Link to={"chairs"}>
            <li onClick={() => handleCategoryClick("Chairs")}>Chairs</li>
          </Link>
          <Link to={"skincare"}>
            <li onClick={() => handleCategoryClick("Skincare")}>Skincare</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default CategoriesHeader;
