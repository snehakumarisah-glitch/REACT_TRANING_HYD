import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "../model/product";
import './ListProducts.css'

const url = "http://localhost:9000/products";
function ListProductsPage() {
    

    const [products, setProducts] = useState<Product[]>([]);
    async function fetchProducts() {
        try {
            const response = await axios.get<Product[]>(url);
            setProducts(response.data);
            console.log(response);

        } catch(error){

        }
    }
    
    useEffect(() => {
        fetchProducts();
        
    },[]);

    return(
        <div>
            <h3>
                List Products
            </h3>
            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent:'center'}}>
                {
                products.map(product => {
                    return(
                        <div className="product" key={product.id}>
                            <p>Id: {product.id}</p>
                            <p>Name: {product.name}</p>
                            <p>Description: {product.description}</p>
                            <p>Price: {product.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListProductsPage;