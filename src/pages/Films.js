import React, {useEffect, useState, useContext} from "react";
import MainLayout from '../layout/MainLayout';
import { Link } from "react-router-dom";


function API_database({fetchTrigger, setFetchTrigger}) {
    const apiURL = "http://34.238.40.69:8081/home/allFilms";

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
                    const film_description = `${film.description}`;
                    return <li key={film_title}><h2>{film_title}</h2><p>{film_description}</p></li>;
                });
                // Update state with actorNames
                setFilms(films);
            })
            .catch(error => {
                console.error('Error:', error);
            });
            setFetchTrigger(false);
    }, [fetchTrigger]);

    return (
        <div>
            <ul id="filmNames">{films}</ul>
        </div>
    );
}

function NewFilm({setFetchTrigger}){
    async function addFilm(title, description) {
        const apiURL = "http://34.238.40.69:8081/home/addFilm";
        
        const requestData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description}),
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
                console.log('Film added successfully:', data);
                setFetchTrigger(true);
                return data; // Return data if needed
            })
            .catch(error => {
                console.error('Error:', error);
                throw error; // Throw error to handle it outside if needed
            });
    }

    function handleClick(){
        let title = document.getElementById("title").value;
        let description = document.getElementById("description").value;
        addFilm(title, description)
            .catch(error => {console.log("unsuccessful")});
    }

    return(
        <div>
            <div class = "input">
              <label for="dish">Title:</label>
              <input type="text" id="title" name="fname"/>
            </div>
            <div class = "input">
              <label for="Recipe">description:</label>
              <input type="text" id="description" name="lname"/>
            </div>
            <button id="new_film_submit_button" type="submit" onClick= {(e) => {
              e.preventDefault();
              handleClick();
              }}>submit</button>
        </div>
    
    )
}

function RemoveFilm({setFetchTrigger}){
    async function deleteFilm(title) {
        const apiURL = "http://34.238.40.69:8081/home/deleteFilm";
        
        const requestData = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title}),
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
                console.log('Film deleted successfully:', data);
                setFetchTrigger(true);
                return data; // Return data if needed
            })
            .catch(error => {
                console.error('Error:', error);
                throw error; // Throw error to handle it outside if needed
            });
    }

    function handleClick(){
        let title = document.getElementById("title").value;
        deleteFilm(title)
            .catch(error => {console.log("unsuccessful")});
    }

    return(
        <div>
            <button id="delete_film_submit_button" type="submit" onClick= {(e) => {
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
                <h1>Films</h1>
                <MainLayout></MainLayout>
            </header>
            <form>
                <NewFilm setFetchTrigger={setFetchTrigger}/>
                <RemoveFilm setFetchTrigger={setFetchTrigger}/>
            </form>
            <div>
                <API_database fetchTrigger={fetchTrigger} setFetchTrigger={setFetchTrigger}/>
            </div>
        </div>
    )

}
export default Films;