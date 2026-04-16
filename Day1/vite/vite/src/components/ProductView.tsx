//<ProductView product={product}/>

import React from "react"
import type { Product } from "../model/product"

type PropductViewProps = {
    product: Product
}

const ProductView: React.FC<PropductViewProps> = React.memo(({product}) => {
    return(
            <div className="product" key={product.id}> 
            <img src={"http://localhost:9000" + product.imageUrl}  />
            <p><strong>ID:</strong> {product.id}</p>
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            {/* <div>
                <button className="btn btn-info" onClick={() => handleEdit(product)}>EDIT</button>
                <button className="btn btn-danger" onClick={() => handleDelete(product)}>DELETE</button>
            </div> */}
        </div>
    )
})

export default ProductView;