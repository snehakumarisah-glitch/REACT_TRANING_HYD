import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import type { AppState } from "../redux/store";
import type { Product } from "../model/product";
import { useRouter } from "next/navigation";
const imgUrl = "http://localhost:9000"
//const url = "http://localhost:9000/products";
const url = "http://localhost:9000/secure_products";



export function useProducts(url: string) {

   const [products, setProducts] = useState<Product[]>([]); 
   //const navigate = useNavigate();
   const router = useRouter();
    const auth = useSelector((state : AppState) => state.auth);

    async function fetchProducts(signal: AbortSignal){
        try {

            if(!auth?.isAuththenticated) {
                //navigate("/login");
                router.push("/login");
                return;
            }

            //const headers = { "Authorization": `Bearer ${auth.accessToken}` };
            //const response = await axios.get<Product[]>(url, { headers, signal }); //await waits for response and give result
            
            const response = await axios.get<Product[]>(url)
            setProducts(response.data); 
            console.log("products", response);
        } catch (error) {
            console.log("failed to fetch products", error);
        }
    }
    
    useEffect(() => {
        const controller = new AbortController();// to abort/cancel any ansync api call
           fetchProducts(controller.signal);       
           return () => {
        controller.abort();   //
           };

    }, []);

    return {products, setProducts} as const;
    
                                                                                                    

}

export default useProducts;