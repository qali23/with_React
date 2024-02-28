import React, {useEffect, useState, useContext} from "react";
import MainLayout from '../layout/MainLayout';
import { Link } from "react-router-dom";
const baseURL = "3.86.207.43";
const localURL = "localhost";

function FilmsForActor({actor, show}){
    const newApiURL = "http://"+baseURL+":8081/home/actor/";
    const [actorData, setActorData] = useState(null);//Selected actor full data
    const [triggerFetch, setTriggerFetch] = useState(false);

    useEffect(() => {//when selected actor changes, this fetches full data for that actor
        fetch(newApiURL + actor.actorID)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setActorData(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
            setTriggerFetch(false);
    }, [triggerFetch]);

    async function addFilmToActor(filmID) {
        const apiURL = "http://"+baseURL+":8081/home/addFilmToActor/"+actor.actorID + "/" + filmID;
        
        const requestData = {
            method: 'POST'
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
                console.log('Film added to actor successfully:', data);
                setTriggerFetch(true);
                return data; // Return data if needed
            })
            .catch(error => {
                console.error('Error:', error);
                throw error; // Throw error to handle it outside if needed
            });
    }

    function handleClick(){
        let filmID = document.getElementById("filmID").value;
        addFilmToActor(filmID)
            .catch(error => {console.log("unsuccessful")});
    }

    if (show){
        return(
            <ul>
                <div class = "mini-input">
                    <label for="dish">Film ID:</label>
                    <input type="text" className="filmID" name="fname"/>
                    <button className="addFilm" onClick= {handleClick}>Add</button>
                </div>
                {actorData.filmsActedIn.map(film => (
                    <li className="actorFilmList">
                        {film.title} {film.filmID}
                    </li>
                ))}
            </ul>
        );
    } else{
        return <div></div>
    }
    
}

function EachActor({actor}){
    const [show, setShow]= useState(false);

    function handleClick(){
        setShow(!show);
    }

    return(
        <div>
           <button className="each_actor_button" type="submit" onClick= {handleClick}>{actor.firstName} {actor.lastName}</button>
            <FilmsForActor actor={actor} show={show}/>
        </div>
    )

}

function API_database({fetchTrigger, setFetchTrigger}) {
    const apiURL = "http://"+baseURL+":8081/home/allActors";
    

    const [actors, setActors] = useState([]);//All the actors: just name, id

    useEffect(() => {//Fetches all the actors basic data
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setActors(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
            setFetchTrigger(false);
    }, [fetchTrigger]);
    
    return (
        <div>
            <ul id="actorNames">{actors.map(actor => (
                <li class="listOfActors">
                    <EachActor actor={actor}/>
                </li>
                ))}
            </ul>
        </div>
    );
}

function NewActor({setFetchTrigger}){
    async function addActor(firstName, lastName) {
        const apiURL = "http://"+baseURL+":8081/home/addActor";
        
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
              <label for="firstName">First Name:</label>
              <input type="text" id="firstName" name="fname"/>
            </div>
            <div class = "input">
              <label for="lastName">Surname:</label>
              <input type="text" id="lastName" name="lname"/>
            </div>
            <button id="new_actor_submit_button" type="submit" onClick= {(e) => {
              e.preventDefault();
              handleClick();
              }}>Submit</button>
        </div>
    
    )
}

function RemoveActor({setFetchTrigger}){
    async function deleteActor(firstName, lastName) {
        const apiURL = "http://"+baseURL+":8081/home/deleteActor";
        
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

function Actors(){
    const [fetchTrigger, setFetchTrigger] = useState(false);

    return(
        <div>
            <header className='App-header'>
                <h1 data-testid="Actors_title">ACTORS</h1>
                <MainLayout></MainLayout>
            </header>
            <form id="add+remove_actor">
                <NewActor setFetchTrigger={setFetchTrigger}/>
                <RemoveActor setFetchTrigger={setFetchTrigger}/>
            </form>
            <div>
                <API_database fetchTrigger={fetchTrigger} setFetchTrigger={setFetchTrigger}/>
            </div>
        </div>
    )

}
export default Actors;