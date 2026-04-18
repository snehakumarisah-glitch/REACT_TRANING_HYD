"use client"
import { useSelector } from "react-redux";
import type { AppState } from "../redux/store";
import { useTitle } from "../hooks/useTitle";
import { useState, useCallback } from "react";
import useProducts from '../hooks/useProducts';
import type { Product } from '../model/product';
import { useRouter } from 'next/navigation';
import ProductView from '../component/ProductView';

function ListProducts() {

    const url = 'http://localhost:9000/products';
    const router = useRouter();
    const { products, setProducts } = useProducts(url);
    const auth = useSelector((state: AppState) => state.auth);
    useTitle("List Products");
    const [isMessageVisible, setMessageVisible] = useState(true);

    const onProductDelete = useCallback(async (product: Product) => {

        try {
            const productsCopy = [...products]
            const index = productsCopy.findIndex(item => item.id === product.id);
            productsCopy.splice(index, 1);
            setProducts(productsCopy);

        } catch (error) {
            console.log("error->", error)
        }}, [products])

    
    const onhandleEdit = useCallback(async (product: Product) => {
        router.push("/products/" + product.id)
    },[router]);

    const calculateTotalPrice = () => {
        let total = 0;
        products.forEach(p=> {
            if(p.price)
                total += p.price
        })
        return total;
    }

    return (
        <div>
            <h3>List of Products</h3>
            <div>
                Total Price: {calculateTotalPrice()}
            </div>
            {isMessageVisible ? <div className="alert alert-info">Demo for List Product</div> : null} <br />
            <button className="btn btn-info" onClick={() => setMessageVisible(!isMessageVisible)}>
                {isMessageVisible ? "Hide" : "Show"}
            </button>
            <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                 {products.map(prodcut => {
                    return (
                        <ProductView key={prodcut.id} product={prodcut} onDelete={onProductDelete}
                        onEdit={onhandleEdit} />
                        
                        // <div className="product" key={prodcut.id} >
                        //     <p>Id: {prodcut.id}</p>
                        //     <p>Name: {prodcut.name}</p>
                        //     <p>Description: {prodcut.description}</p>
                        //     <p>Price: {prodcut.price}</p>
                        //     <button className="btn btn-danger" onClick={() => { handleDelete(prodcut) }}> Delete </button> &nbsp;
                        //     <button className="btn btn-info" onClick={() => handleEdit(prodcut)}> Edit </button>
                        // </div>
                    )

                })}
            </div>

        </div>

    )

}

export default ListProducts