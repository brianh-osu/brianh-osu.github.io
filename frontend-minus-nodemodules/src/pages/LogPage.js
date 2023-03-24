import {React, useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';

import LogTable from '../components/LogTable'; 
import {RiHeartAddLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';


function LogPage({setRestaurant}) {
    const navigate = useNavigate(); 

    const [restaurants, setRestaurants] = useState([]);

    // Retrieving the log of documents 
    const loadRestaurants = async() => {
        const response = await fetch('/log'); 
        const restaurants = await response.json(); 
        setRestaurants(restaurants); 
    }

    // Updating 1 document 
    const onEditRestaurant = async restaurant => {
        setRestaurant(restaurant); 
        navigate("/edit-restaurant"); 
    }
    
    //Delete 1 document 
    const onDeleteRestaurant = async id => {
        const response = await fetch(`/log/${id}`, {method: 'DELETE' })
        if (response.status === 204) {
            const getResponse = await fetch('/log'); 
            const restaurants = await getResponse.json(); 
            setRestaurants(restaurants);
        } else {
            console.error(`Did not delete movie with id = ${id}, status code = ${response.status}`)
        }
    }

    //Incorporate useEffect() to load all the documents.
    useEffect( () => {
        loadRestaurants();
    }, [] ); 

    //Return the HTML to create the user interface (display the restaurants)
    return (
        <>
            <h2>List of Restaurants </h2>
            <p>This is the log of restaurants. The documents come from MongoDB. 
                You can add, edit, and delete restaurants using the below buttons. </p>
            <LogTable 
                restaurants={restaurants}
                onEdit={onEditRestaurant}
                onDelete={onDeleteRestaurant}
            />
            {/* <button><Link to="/add-restaurant">
                    <RiHeartAddLine id="icon" title="Add a new restaurant"></RiHeartAddLine></Link>
                    </button> */}
        </>
    );
}

export default LogPage; 