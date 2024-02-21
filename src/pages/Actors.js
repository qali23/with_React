import React, {useEffect, useState, useContext} from "react";
import MainLayout from '../layout/MainLayout';
import { Link } from "react-router-dom";


function API_database() {
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
    }, []);

    return (
        <div>
            <ul>{actorNames}</ul>
        </div>
    );
}

function Actors(){
    return(
        <div>
            <header className='App-header'>
                <h1>Chefs</h1>
                <MainLayout></MainLayout>
            </header>
            <API_database/>
        </div>
    )

}
export default Actors;