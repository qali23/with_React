import React from 'react';
import { Link } from "react-router-dom";


function MainLayout({children}){
    return(
        <div ClassName="App-header">
            <nav>
                
                <Link id="homepage" to="/homepage">Homepage</Link>
                <Link id="actors" to="/actors">Actors</Link>
                <Link id="films" to="/films">Films</Link>
                <div>{children}</div>

            </nav> 
        </div>
    )
}

export default MainLayout;