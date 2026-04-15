import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "../model/product";
import './ListProducts.css';
import { useNavigate } from "react-router-dom";

const url = "http://localhost:9000/products";

function ListProductsPage() {

    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();

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

    async function handleDelete(product: Product){
        const url = "http://localhost:9000/products"
        try{
            const deleteUrl = url + "/" + product.id;
            await axios.delete(deleteUrl);
            //await fetchProducts();

            /** state is immutatble we cannot modify state in react**/
            // const index = products.findIndex(item => item.id === product.id);
            // products.splice(index,1);
            // setProducts(products);

             /** to avoid modifiying state we will copy the product**/
            const copy = [...products]
            const index = copy.findIndex(item => item.id === product.id);
            copy.splice(index,1);
            setProducts(copy);
        }catch {
            alert("failed to delete");
        }

    }

    async function handleEdit(product: Product){
        navigate("/products/"+product.id, {state:product});
    }

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
                            <div>
                                <button className="btn btn-danger" onClick={()=> {handleDelete(product)}}>Delete</button>
                                <button className="btn btn-danger" onClick={()=> {handleEdit(product)}}>Edit</button>
                            </div>  

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListProductsPage;