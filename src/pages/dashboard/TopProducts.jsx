import { useEffect } from "react";
import { useState } from "react";
import { getTopProducts } from "../../data/ProductsData";

const Product = ({ name, link, price, stock, category }) => {
  return (
    <div className="flex bg-cream dark:bg-drkSec rounded-lg gap-2 w-72">
      <img
        src={link}
        alt={name}
        className="w-24 h-28 rounded-l-lg object-cover"
      />
      <div className="flex flex-col px-2 py-2">
        <span className="font-semibold">{name}</span>
        <span className="italic">{category}</span>
        <span className="italic">{stock} Left</span>
        <span>${price}</span>
      </div>
    </div>
  );
};
// TopProducts component
const TopProducts = () => {
  const [topProducts, setTopProducts] = useState(null);
  // Fetch top products data
  useEffect(() => {
    const data = getTopProducts();
    setTopProducts(data);
  }, []);
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-medium text-2xl m-2">Top Products</h2>
      <div className="flex flex-col gap-2 border-t p-2">
        {topProducts?.map(
          (
            {
              product_id,
              product_name,
              stock,
              product_category,
              price,
              image_link,
            },
            index
          ) => (
            <Product
              key={product_id}
              name={product_name}
              link={image_link}
              stock={stock}
              category={product_category}
              price={price}
            />
          )
        )}
      </div>
    </div>
  );
};
export default TopProducts;
