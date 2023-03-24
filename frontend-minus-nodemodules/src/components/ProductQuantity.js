import React, {useState} from "react";
import {GrAddCircle} from 'react-icons/gr'; 
import{AiOutlineMinusCircle} from 'react-icons/ai'; 

function ProductQuantity() {
    let [quantity, setQuantity] = useState(0);
    let increase = () => setQuantity(quantity === 10 ? quantity: quantity+1);
    let decrease = () => setQuantity(quantity === 0 ? 0: quantity-1);
    return (
        <>
            <AiOutlineMinusCircle onClick={decrease} />
            <span id="quantity">&nbsp;{quantity}&nbsp;</span>
            <GrAddCircle onClick={increase} />
        </>
    );
};

export default ProductQuantity; 