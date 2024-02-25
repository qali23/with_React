import React from 'react'
import MainLayout from '../layout/MainLayout';
import { Link } from "react-router-dom";
import shapeFood from "../Images/shape_food.jpg";
import goodChefBadChef from "../Images/goodchef_badchef.png";


function RecipesHomepage(){
    return(
        <div>
            <header className='App-header'>
                <h1>RECIPES HOMEPAGE</h1>
                <MainLayout></MainLayout>
            </header>
            <body>
                <article>
                    <p>It all started one misty morning in a COTTAGE. Or maybe it did not.</p>
                    <p>Behold, a limited selection of ABSOLUTELY ESSENTIAL and NON-ESSENTIAL recipes of food that you can make</p>
                    <img src = {shapeFood} alt = "an image"/>
                    <p>To make food, you need ingredients.</p>
                    <p>Ingredients are just other food.
                        You make food kind of like how you produce super complicated software. You use lots of little software to make a big software.
                        If you do it well then you will make something nice. 
                    </p>
                    <p>Take wisdom from this vast array of a few recipes and maybe one day you'll be almost but not quite as good a chef as me (unlikely).</p>
                    <img src = {goodChefBadChef} alt = "an image"/>
                </article>
            </body>
        </div>
        
    )
}

export default RecipesHomepage;