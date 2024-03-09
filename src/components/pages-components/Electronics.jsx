import Electronicspages from "./Electronicspages";

const Electronics = () => {
  const filteredItems = AllData.filter((item) => item.categories === "chairs");

  return (
    <Electronicspages />
  );
};

export default Electronics;
