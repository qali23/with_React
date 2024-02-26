import React, {useEffect, useState, useContext} from "react";
import MainLayout from '../layout/MainLayout';
import { Link } from "react-router-dom";


function API_database({fetchTrigger, setFetchTrigger}) {
    const apiURL = "http://localhost:8081/home/allFilms";

    // Initialize actorNames as empty array
    const [films, setFilms] = useState([]);

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
                const films = data.map(film => {
                    const film_title = `${film.title} `
                    const film_description`${film.description}`;
                    return <li key={film_title}>{film_description}</li>;
                });
                // Update state with actorNames
                setFilmNames(films);
            })
            .catch(error => {
                console.error('Error:', error);
            });
            setFetchTrigger(false);
    }, [fetchTrigger]);

    return (
        <div>
            <ul id="chefNames">{actorNames}</ul>
        </div>
    );
}

function NewActor({setFetchTrigger}){
    async function addActor(firstName, lastName) {
        const apiURL = "http://localhost:8081/home/addFilm";
        
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
        let lastName = document.getElementById("lastName").value;
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
              <input type="text" id="lastName" name="lname"/>
            </div>
            <button id="new_actor_submit_button" type="submit" onClick= {(e) => {
              e.preventDefault();
              handleClick();
              }}>submit</button>
        </div>
    
    )
}

function RemoveActor({setFetchTrigger}){
    async function deleteActor(firstName, lastName) {
        const apiURL = "http://localhost:8081/home/deleteActor";
        
        const requestData = {
            method: 'DELETE',
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
                console.log('Actor deleted successfully:', data);
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
        let lastName = document.getElementById("lastName").value;
        deleteActor(firstName, lastName)
            .catch(error => {console.log("unsuccessful")});
    }

    return(
        <div>
            <button id="delete_actor_submit_button" type="submit" onClick= {(e) => {
              e.preventDefault();
              handleClick();
              }}>Delete</button>
        </div>
    
    )
}

function Films(){
    const [fetchTrigger, setFetchTrigger] = useState(false);

    return(
        <div>
            <header className='App-header'>
                <h1>ACTORS</h1>
                <MainLayout></MainLayout>
            </header>
            <form>
                <NewFilm setFetchTrigger={setFetchTrigger}/>
                <RemoveFIlm setFetchTrigger={setFetchTrigger}/>
            </form>
            <div>
                <API_database fetchTrigger={fetchTrigger} setFetchTrigger={setFetchTrigger}/>
            </div>
        </div>
    )

}
export default Films;