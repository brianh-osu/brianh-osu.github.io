import React, {useState} from "react"; 
import StaffRow from "../components/StaffRow";

function StaffPage(){
    let [results, setResults] = useState([]); 
    let fetchResults = () => {
        fetch('https://randomuser.me/api/?results=10') 
        .then( 
            (response) => response.json()
        )
        .then(
            (response) => {setResults(response.results)}
        )
        .catch(
            () => {alert("Uh oh, API is down. Something went wrong :-(. Try again later please.")}
        );
    };
    return (
        <>
            <h2>Random Staff Generator </h2>
                <article>
                <p>
                    <button id='fromServer' onClick = {fetchResults} value='add' margin='10px'>Click me for random staff :-) </button>
                    
                </p>
                <table className="staffTable">
                    <caption>
                        This app uses data from the <a href='https://randomuser.me/' target='_blank' rel='noreferrer'>Random User Generator </a>API and displays one of the results. 
                    </caption>
                    <thead>
                        <tr>
                            <th>Portrait </th>
                            <th>Name/Email </th>
                            <th>Telephone </th>
                            <th>City </th>
                        </tr>
                    </thead>
                    <tbody id="randomUser" className="randomUser">
                        {results.map((person, index) => <StaffRow person={(person)} key={index} />)}
                    </tbody>
                </table>
                </article>
        </>
    );
}; 

export default StaffPage; 