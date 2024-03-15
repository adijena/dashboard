import { useState } from "react";
import ProductModalView from "../../components/ProductModalView";
import useProducts from "../../context/products";
import { deleteProduct } from "../../data/ProductsData";

const ProductCard = ({ product }) => {
  const { products, setProducts } = useProducts();
  const [open, setOpen] = useState(false);
  // Function to open and close modals
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  // Function to handle product deletion
  const handleDelete = () => {
    deleteProduct(product.product_id);
    setProducts(
      products.filter((item) => item.product_id !== product.product_id)
    );
  };

  return (
    <>
      <div className="bg-offWhite flex gap-2 rounded-xl m-4 h-52 w-96">
        <img
          src={product.image_link}
          alt="name"
          className="rounded-l-xl w-36 object-cover"
        />
        <div className="flex flex-col w-full items-center  justify-center md:text-left gap-2 p-6">
          <h2 className="text-xl font-bold text-center">
            {product.product_name}
          </h2>
          <span className="text-sm font-semibold text-center">
            {`Category: ${product.product_category}`}
          </span>
          <span className="text-sm font-semibold text-center">
            {`Price: ${product.price}`}
          </span>
          <span className="text-sm font-semibold text-center">{`Stock: ${product.stock}`}</span>
          <div className="flex gap-2">
            <button
              className="border p-2 rounded-xl bg-golden w-24 text-center"
              onClick={handleDelete}
            >
              delete
            </button>
            <button
              className="border p-2 w-24 rounded-xl bg-golden"
              onClick={onOpenModal}
            >
              edit
            </button>
          </div>
        </div>
      </div>
      {/* Product modal view */}
      <ProductModalView
        open={open}
        onCloseModal={onCloseModal}
        item={product}
      />
    </>
  );
};
export default ProductCard;
