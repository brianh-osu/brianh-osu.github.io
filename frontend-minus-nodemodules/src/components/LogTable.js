import React from "react";
import LogRow from "./LogRow";
import {RiHeartAddLine} from 'react-icons/ri'; 
import { Link } from "react-router-dom";

function RestaurantList ({restaurants, onEdit, onDelete}) {
    return (
        <div class="table-container">
            
            <table id='logTable'>
                {/* <caption>Add, edit or delete restaurants</caption> */}
                <caption style={{textAlign: 'right'}}>Add a new restaurant:
                    <i><Link to="/add-restaurant">
                            <RiHeartAddLine id="icon" title="Add a new restaurant "></RiHeartAddLine></Link></i>
                </caption>
                <thead>
                    <tr>
                        <th>Delete </th>
                        <th>Edit </th>
                        <th>Name </th>
                        <th title="Rating (1-5). 1 being poor, 5 being amazing!">Rating </th>
                        <th title="Date visited">Date </th>
                        {/* <th><i><Link to="/add-restaurant">
                            <RiHeartAddLine id="icon" title="Add a new restaurant"></RiHeartAddLine></Link>
                            </i></th> */}
                    </tr>
                </thead>
                <tbody id="">
                    {restaurants.map((restaurants, i) =>
                        <LogRow 
                            onDelete={onDelete}
                            onEdit={onEdit}
                            restaurants={restaurants}
                            key={i}
                        
                        />
                    )}
                </tbody>
            </table>
            
        </div>
    );
}

export default RestaurantList;