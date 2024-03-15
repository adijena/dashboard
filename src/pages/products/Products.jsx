import { FaSearch, FaPlus, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { getAllProducts, searchProductsByName } from "../../data/ProductsData";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { ProductsProvider } from "../../context/products";
import AddProductModalView from "../../components/AddProductModalView";

const Products = () => {
  // State for storing products data, pagination information, search query, and modal state
  const [products, setProducts] = useState();
  const [pagination, setPagination] = useState({
    totalPages: 0,
    currentPage: 1,
  });
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  // Function to open and close modal
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const itemsPerPage = 12;
  // Function to handle moving between pages
  const nextPage = () => {
    let next = Math.min(pagination.currentPage + 1, pagination.totalPages);
    setPagination((prev) => ({
      ...prev,
      currentPage: next,
    }));
  };
  const prevPage = () => {
    let prevs = Math.max(pagination.currentPage - 1, 1);
    setPagination((prev) => ({
      ...prev,
      currentPage: prevs,
    }));
  };

  // Function to search products by name
  const searchProducts = () => {
    const productsData = searchProductsByName(search);
    setProducts(productsData);
    setPagination({
      currentPage: 1,
      totalPages: Math.ceil(productsData.length / itemsPerPage),
    });
  };
  // Fetch products data and set initial pagination state on component mount

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getAllProducts();
      setProducts(productsData);
      setPagination({
        currentPage: 1,
        totalPages: Math.ceil(productsData.length / itemsPerPage),
      });
    };
    fetchData();
  }, []);
  // Calculate the start and end index of products to display based on pagination

  const startIndex = (pagination.currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, products?.length);

  return (
    <>
      <div className="flex flex-col w-full">
        {/* Header + Search bar */}
        <div className="flex flex-col">
          <div className="p-4 flex justify-between w-full flex-col md:flex-row items-center gap-2 dark:text-drkTextMid">
            <h2 className="text-3xl font-bold">Products</h2>
            <div className="flex gap-2">
              <input
                type="text"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Search Product"
                className="border rounded-xl p-2 w-64 md:w-72
              dark:bg-drkSec
              "
              />
              <button
                className="rounded-xl border p-2 dark:bg-drkSec"
                onClick={searchProducts}
              >
                <FaSearch size={24} />
              </button>
              <button
                className="rounded-xl border p-2 dark:bg-drkSec"
                onClick={onOpenModal}
              >
                <FaPlus size={24} />
              </button>
            </div>
          </div>
        </div>

        <ProductsProvider value={{ products, setProducts }}>
          {/* Products list */}
          <div className="flex flex-wrap w-full px-2 justify-evenly">
            {products?.slice(startIndex, endIndex).map((prod) => {
              return <ProductCard product={prod} key={prod.product_id} />;
            })}
          </div>
          {/* pagination */}
          <div className="flex gap-2 justify-center items-center p-4 dark:text-drkBtn">
            <button onClick={prevPage}>
              <FaAngleLeft size={32} />
            </button>
            <span className="text-xl dark:text-drkTextPrimary">
              {pagination.currentPage}
            </span>
            <button onClick={nextPage}>
              <FaAngleRight size={32} />
            </button>
          </div>
          {/* AddProduct modal */}
          <AddProductModalView open={open} onCloseModal={onCloseModal} />
        </ProductsProvider>
      </div>
    </>
  );
};
export default Products;
