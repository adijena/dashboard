import { createContext, useContext } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ProductsContext.Provider

export default function useProducts(){
    return useContext(ProductsContext);
}