import React, {useEffect, useState, useContext} from "react";
import MainLayout from '../layout/MainLayout';
import { Link } from "react-router-dom";


function API_database({fetchTrigger, setFetchTrigger}) {
    const apiURL = "http://localhost:8081/home/allActors";

    // Initialize actorNames as empty array
    const [actorNames, setActorNames] = useState([]);

    useEffect(() => {
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Map actor data to JSX list items
                const names = data.map(actor => {
                    const fullName = `${actor.firstName} ${actor.lastName}`;
                    return <li key={fullName}>{fullName}</li>;
                });
                // Update state with actorNames
                setActorNames(names);
            })
            .catch(error => {
                console.error('Error:', error);
            });
            setFetchTrigger(false);
    }, [fetchTrigger]);

    return (
        <div>
            <ul>{actorNames}</ul>
        </div>
    );
}



function NewActor({setFetchTrigger}){
    async function addActor(firstName, lastName) {
        const apiURL = "http://localhost:8081/home/addActor";
        
        const requestData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName}),
        };
    
        fetch(apiURL, requestData)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response;
            })
            .then(data => {
                // Handle success response here if needed
                console.log('Actor added successfully:', data);
                setFetchTrigger(true);
                return data; // Return data if needed
            })
            .catch(error => {
                console.error('Error:', error);
                throw error; // Throw error to handle it outside if needed
            });
    }

    function handleClick(){
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("LastName").value;
        addActor(firstName, lastName)
            .catch(error => {console.log("unsuccessful")});
    }

    return(
        <div>
            <div class = "input">
              <label for="dish">First Name:</label>
              <input type="text" id="firstName" name="fname"/>
            </div>
            <div class = "input">
              <label for="Recipe">Surname:</label>
              <input type="text" id="LastName" name="lname"/>
            </div>
            <button id="new_actor_submit_button" type="submit" onClick= {(e) => {
              e.preventDefault();
              handleClick();
              }}>submit</button>
        </div>
    
    )
}

function Actors(){
    const [fetchTrigger, setFetchTrigger] = useState(false);

    return(
        <div>
            <header className='App-header'>
                <h1>Chefs</h1>
                <MainLayout></MainLayout>
            </header>
            <NewActor setFetchTrigger={setFetchTrigger}/>
            <div>
                <API_database fetchTrigger={fetchTrigger} setFetchTrigger={setFetchTrigger}/>
            </div>
        </div>
    )

}
export default Actors;