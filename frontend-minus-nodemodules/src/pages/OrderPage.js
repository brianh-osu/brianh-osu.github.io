import React, {useState} from 'react';
import ProductRow from '../components/ProductRow';

function OrderPage({products}) {
    
    return(
        <>
        
            <h2>Request to Order</h2>
                <article>
                    <p>
                        Users can request to place an order on this page. Select the quantity of each product that you would like to add to your order.
                    </p>
                    
                    <fieldset >
                        
                        <legend>Order Information</legend>
                        {/* <table style="width: 75%" align="center"> */}
                        <table id="productTable">
                            <caption>Please add quantities to your cart. </caption> 
                            <thead>
                                <tr>
                                    <th>Company </th>
                                    <th>Product </th>
                                    <th>Price </th>
                                    <th>Quantity </th>
                                </tr>
                            </thead>
                            <tbody>                           
                                {products.map((current_product, index) => 
                                    <ProductRow products={current_product} key ={index} /> )}
                                    
                            </tbody>
                        </table>
                        
                    </fieldset>
                </article>
        </>
    );
};

export default OrderPage;