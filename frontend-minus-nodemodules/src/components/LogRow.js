import React from "react";
import {RiDeleteBinLine, RiEdit2Line} from 'react-icons/ri'; 

function LogRow ({restaurants, onDelete, onEdit}) {
    return (
        <tr id="logRow">
            <td><i><RiDeleteBinLine onClick={() => onDelete(restaurants._id)} title="Delete the entry"></RiDeleteBinLine></i></td>
            <td><i><RiEdit2Line onClick={() => onEdit(restaurants)} title="Edit the entry"></RiEdit2Line> </i></td>
            <td title="Name of the restaurant" >{restaurants.name}</td> 
            <td title="How would you rate the restaurant out of 5 stars?"> {restaurants.rating}</td>
            <td title="What date did you visit the restaurant?"> {restaurants.date.slice(0,10)}</td>
            <td></td>
        </tr>
    );

}

export default LogRow; 