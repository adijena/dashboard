import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { addProduct, getAllProducts } from "../data/ProductsData";
import useProducts from "../context/products";
import { v4 as uuidv4 } from "uuid";


const AddProductModalView = ({ open, onCloseModal }) => {
  const { products, setProducts } = useProducts();
  const [product, setProduct] = useState({
    product_id: uuidv4(),
    product_name: "",
    price: 0,
    stock: 0,
    image_link: "",
    product_category: "",
  });
  const [changed, setChanged] = useState(false);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProduct({
      ...product,
      [id]: value,
    });
    setChanged(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (changed) {
      addProduct(product);
      
      setProducts((prev) => [...prev, { ...product }]);
      onCloseModal();
      setChanged(false);
      console.log(products);
      setProduct({
        product_id: uuidv4(),
        price: 0,
        stock: 0,
        image_link: "",
        product_category: "",
        product_name: "",
      });
    }
  };
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      center
      styles={{
        modal: {
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: "#fff",
          minWidth: "600px",
        },
        closeButton: {
          padding: "15px",
        },
      }}
    >
      <div>
        {/* header */}
        <h2 className="font-bold text-2xl p-1">Add Product</h2>
        <hr className="my-2 border-2 rounded-lg" />
        {/* details */}
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-lg p-2">
              <label htmlFor="productName">Product Name:</label>
              <input
                type="text"
                id="product_name"
                value={product?.product_name}
                onChange={handleInputChange}
                required
                className="border rounded-md p-2"
                placeholder="Product Name"
              />
            </div>
            <div className="flex flex-col gap-2 text-lg p-2">
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                id="price"
                value={product?.price}
                onChange={handleInputChange}
                required
                className="border rounded-md p-2"
                placeholder="price"
              />
            </div>
            <div className="flex flex-col gap-2 text-lg p-2">
              <label htmlFor="category">Category:</label>
              <select
                id="product_category"
                value={product?.product_category}
                onChange={handleInputChange}
                required
                className="border rounded-md p-2"
              >
                <option value="">Select a category</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home & Kitchen">Home & Kitchen</option>
                <option value="Beauty & Personal Care">
                  Beauty & Personal Care
                </option>
              </select>
            </div>
            <div className="flex flex-col gap-2 text-lg p-2">
              <label htmlFor="stock">Stock:</label>
              <input
                type="text"
                id="stock"
                value={product?.stock}
                onChange={handleInputChange}
                required
                className="border rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-2 text-lg p-2">
              <label htmlFor="imgUrl">Product Image Link:</label>
              <input
                type="text"
                id="image_link"
                value={product?.image_link}
                onChange={handleInputChange}
                required
                className="border rounded-md p-2"
                placeholder="Image Link"
              />
            </div>
            <hr className="border-2 rounded-lg" />
            <div className="p-2 flex gap-2">
              <button className="border px-4 py-2 rounded-lg" type="submit">
                Submit
              </button>
              <button
                className="border px-4 py-2 rounded-lg"
                onClick={onCloseModal}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default AddProductModalView;
