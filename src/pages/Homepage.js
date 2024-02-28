import React from 'react'
import MainLayout from '../layout/MainLayout';
import { Link } from "react-router-dom";
import teamDecision from "../Images/team-decision.jpg";
import whichFilm from "../Images/which_film.jpg";


function Homepage(){
    return(
        <div>
            <header className='App-header'>
                <h1>ACTORS & FILMS HOMEPAGE</h1>
                <MainLayout></MainLayout>
            </header>
            <div>
                <article>
                    <p>A webpage where all users can add and delete actors and films of their choice. Let the community decide which ones THEY want!</p>
                    <img src = {teamDecision} alt = "an image"/>
                    <p>We hope to add a host of brilliant features to this webpage in future,
                        Feel free to take a look around and enjoy the features as you please!
                    </p>
                    <p>Which actors are everyone talking about? Which films does the community recommend for YOU? </p>
                    <img src = {whichFilm} alt = "an image"/>
                </article>
            </div>
        </div>
        
    )
}

export default Homepage;