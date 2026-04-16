import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { AppState } from "../redux/store";
import type { Product } from "../model/product";
    
const imgUrl = "http://localhost:9000"
//const url = "http://localhost:9000/products";
const url = "http://localhost:9000/secure_products";



export function useProducts(url: string) {

   const [products, setProducts] = useState<Product[]>([]); 
   const navigate = useNavigate();
    const auth = useSelector((state : AppState) => state.auth);

    async function fetchProducts(){
        try {

            if(!auth.isAuthenticated) {
                navigate("/login");
                return;
            }

            const headers = { "Authorization": `Bearer ${auth.accessToken}` };
            const response = await axios.get<Product[]>(url, { headers }); //await waits for response and give result
            setProducts(response.data); 
            console.log("products", response);
        } catch (error) {
            console.log("failed to fetch products", error);
        }
    }
    
    useEffect(() => {
        fetchProducts();
    }, []);

    return {products, setProducts};
                                                                                                    

}

export default useProducts;