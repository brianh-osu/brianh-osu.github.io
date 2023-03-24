import React, {useState} from "react";
import ProductQuantity from "./ProductQuantity";

function ProductRow({products}){
    return (
        <tr>
            <td>{products.product}</td>
            <td>{products.company}</td>
            <td>{products.price.toLocaleString('en-US', {style:'currency', currency:'USD'})}</td>
            <td><ProductQuantity /></td>
        </tr>
    );
};

export default ProductRow; 