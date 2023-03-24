import React, {useState} from 'react'; 
import {useNavigate} from 'react-router-dom'; 
// import TableHead from '../components/TableHead.js'; 

export const CreatePage = () => {
    const [name, setName] = useState()
    const [rating, setRating] = useState('0')
    const [date, setDate] = useState(); 

    const navigate = useNavigate(); 

    const addRestaurant = async () => {
        const newRestaurant = {name, rating, date};
        const response = await fetch('/log', {
            method: 'POST',
            body: JSON.stringify(newRestaurant),
            headers:{
                'Content-Type': 'application/json', 
            }
        });

        if(response.status === 201){
            alert('Added a new restaurant!'); 
            navigate("/log");
        } else {
            // alert(`Uh-oh, missing some input. Please try again (status code: 201)`)
            alert(`Uh-oh, missing some input or values are incorrect. Please try again (status code:${response.status})`);  
            navigate("/add-restaurant");
        } 
        
    }; 

    return (
    <>
        <h2>Log a new restaurant.</h2>
        <article>
            <p>Add a restaurant and provide the review </p>
            <div class="table-container">
                
                <table id="logTable">
                    <caption>New restaurant: </caption>
                    {/* <TableHead /> Deleted since this was optional*/}
                    <thead>
                        <th>Name </th>
                        <th>Rating </th>
                        <th>Date </th>
                    </thead>
                    <tbody>
                        <tr>
                            
                            {/* for="" changed to htmlFor="" since React doesn't use for */}
                            <td><label htmlFor="resname" className="required"> 
                                <input type="text" value={name} id="resname" name="name" placeholder="Restaurant name"
                                onChange={e => setName(e.target.value)} required 
                                autoFocus 
                                title = "Restaurant name"/>
                            </label></td>
                            <td><label htmlFor="resrating" className="required"> 
                                <input type="number" value={rating} id="resrating" placeholder="Rating"
                                name="rating" onChange={e => setRating(e.target.value)} 
                                min={0} max={5}
                                required title="Rating (1-5). 1 being poor, 5 being amazing!"/>
                            </label></td>
                            <td><label htmlFor="resdate" className="required">
                                <input type="date" id="resdate" name="date" value={date} 
                                required onChange={e => setDate(e.target.value)}
                                pattern="\d{2}-\d{2}-\d{2}" title="Date visited"/>     
                            </label></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className="wait" onClick={addRestaurant}>Save entry </button>
        </article>
    </>
    );
};

export default CreatePage; 