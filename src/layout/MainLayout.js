import React from 'react';
import { Link } from "react-router-dom";


function MainLayout({children}){
    return(
        <div ClassName="App-header">
            <nav>
                
                <Link id="recipesHomepage" to="/recipe_homepage">Recipes Homepage</Link>
                <Link id="allRecipes" to="/">All Recipes</Link>
                <Link id="ingredients" to="/ingredients">Ingredients</Link>
                <Link id="chefs" to="/chefs">Chefs</Link>
                <div>{children}</div>
            </nav> 
        </div>
    )
}

export default MainLayout;