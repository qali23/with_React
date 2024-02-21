import React from 'react';
import { Link } from "react-router-dom";


function MainLayout({children}){
    return(
        <header ClassName="App-header">
            <nav>
                
                <Link to="/recipe_homepage">Recipes Homepage</Link>
                <Link to="/">All Recipes</Link>
                <Link to="/ingredients">Ingredients</Link>
                <Link to="/chefs">Chefs</Link>
                <div>{children}</div>
            </nav> 
        </header>
    )
}

export default MainLayout;