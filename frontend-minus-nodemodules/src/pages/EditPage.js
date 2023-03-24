import React, {useState} from 'react'; 
import {useNavigate} from 'react-router-dom'; 
// import TableHead from '../components/TableHead.js'; 

export const EditPage = ({restaurant}) => {
    const [name, setName] = useState(restaurant.name); 
    const [rating, setRating] = useState(restaurant.rating); 
    const [date, setDate] = useState(restaurant.date.slice(0,10));  

    const navigate = useNavigate(); 

    const editRestaurant = async () => {{

        const response = await fetch(`/log/${restaurant._id}`, {
            method: 'PUT', 
            body: JSON.stringify({
                name: name,
                rating: rating, 
                date: date
            }),
            headers: {'Content-Type': 'application/json'}, 
});

        if (response.status === 200) {
            alert("Restaurant was edited :-)")
            navigate("/log"); 
        } else {
            const errorMessage = await response.json(); 
            alert(`Uh-oh, restaurant didn't update. Status ${response.status}. ${errorMessage}`);
            // navigate("/log"); //don't need to navigate since you want to stay on this page to have user edit properly. 
        }

    }}

    return (
        <>
            <h2>Edit a restaurant </h2>
            <p>Update a restaurant and its review</p>
            <div class="table-container">
                <table id="logTable">
                    <caption>You are now updating: <strong>{restaurant.name} </strong></caption>
                    {/* <TableHead /> Commented out since this was optional*/}
                    <thead>
                        <tr>
                            <th>Name </th>
                            <th>Rating </th>
                            <th>Date </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label htmlFor="resname">
                                <input type="text" value={name} id="resname" name="name"
                                onChange={e => setName(e.target.value)} autoFocus />
                                </label></td>
                            <td><label htmlFor="resrating">
                                <input type="number" value={rating} id="resrating" name="rating"
                                onChange={e => setRating(e.target.value)} 
                                style={{width:'60px', textAlign:'center'}}/>
                                </label></td>
                            <td><label htmlFor="resdate">
                                <input type="date" id="resdate" name="date" value={date}
                                onChange={e => setDate(e.target.value)} />
                                </label></td>
                            {/* <td><button onClick={editRestaurant}>Save </button></td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={editRestaurant}>Save changes </button>
        </>

    )
}

export default EditPage 