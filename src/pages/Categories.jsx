import "./categories.css";
import { Outlet } from "react-router-dom";
import CategoriesHeader from "../components/Categoriesheader";
import All from "../components/pages-components/All";
import { useEffect } from "react";

const Categories = () => {
  useEffect(() => {});

  return (
    <div className="container">
      <CategoriesHeader />
      <Outlet />
    </div>
  );
};

export default Categories;
