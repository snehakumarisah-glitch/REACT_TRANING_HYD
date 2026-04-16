import axios from "axios";
import "./ListProducts.css";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { Product } from "../model/product";
import useProducts from "../hooks/useProducts";
import { useState } from "react";
import ProductView from "../components/ProductView";
    
const imgUrl = "http://localhost:9000"
//const url = "http://localhost:9000/products";
const url = "http://localhost:9000/secure_products";



function ListProductsPage() {

    useProducts(url);
    const {products, setProducts} = useProducts(url); 
    const navigate = useNavigate();
   // useTitle("List Products");
   const [isMessageVisible, setVisible] = useState(true);


    async function handleDelete(product: Product){

        try{
            const deleteUrl = url + "/" + product.id;
            await axios.delete(deleteUrl);

            const index = products.findIndex(item => item.id === product.id);
            products.splice(index, 1);
            setProducts(products);
        } catch(error){
        alert("failed to  delete");
        }
    }

    async function handleEdit(product: Product){
        navigate("/products/" + product.id);
    }


   

    return (
        <div>
            <h3>List of Products</h3>

            {isMessageVisible? <div className="alert alert-info">Demo for listProducts</div> : null}
            <br/>
            <button className="btn btn-info"
                onClick={() => setVisible(!isMessageVisible)}>
                {isMessageVisible? "Hide": "Show"}
            </button>

            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map((product) => {
                    return(

                    <ProductView product={product}/>
                    // <div className="product" key={product.id}> 
                    //     <img src={"http://localhost:9000" + product.imageUrl}  />
                    //     <p><strong>ID:</strong> {product.id}</p>
                    //     <p><strong>Name:</strong> {product.name}</p>
                    //     <p><strong>Description:</strong> {product.description}</p>
                    //     <p><strong>Price:</strong> ${product.price}</p>
                    //     <div>
                    //         <button className="btn btn-info" onClick={() => handleEdit(product)}>EDIT</button>
                    //         <button className="btn btn-danger" onClick={() => handleDelete(product)}>DELETE</button>
                    //     </div>
                    // </div>
                    )
}                )}
            </div>
        </div>
    );
                                                                                                       






}

export default ListProductsPage;