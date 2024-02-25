import React from 'react';
import MainLayout from '../layout/MainLayout';
import { Link } from "react-router-dom";
import secretIngredient from "../Images/secret_ingredient.jpg"



function Ingredients(){
    return(
        <div>
            <header className='App-header'>
                <h1>INGREDIENTS</h1>
                <MainLayout></MainLayout>
            </header>
            <div>
                <article>
                    <img id="si" src = {secretIngredient} alt = "an image"/>
                    <h2>The stuff you make food from</h2>
                    <ul>
                        <li>bread</li>
                        <li>jam :)</li>
                        <li>butter</li>
                        <li class="small_text">peanut butter</li>
                    </ul>
                </article>
            </div>
        </div>
        
    )
}

export default Ingredients;